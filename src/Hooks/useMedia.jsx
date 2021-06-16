import { useState, useEffect, useDebugValue } from 'react';
import PropTypes from 'prop-types';

export default function useMedia(media) {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(`(min-width: ${Number(media)}px)`);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);

    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  useDebugValue({ media, match });

  return match;
}

useMedia.propTypes = {
  media: PropTypes.number,
};
