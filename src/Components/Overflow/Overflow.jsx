import ProtoTypes from 'prop-types';
import useClassNames from '../../Hooks/useClassNames';
import { overflow, scroll, notScroll } from './Overflow.module.scss';

export default function Overflow({ children, notScrollbar, height, className }) {
  const classes = useClassNames();
  return (
    <div
      className={classes(overflow, notScrollbar ? notScroll : scroll, className)}
      style={{ maxHeight: height }}
    >
      {children}
    </div>
  );
}

Overflow.propTypes = {
  children: ProtoTypes.node.isRequired,
  notScrollbar: ProtoTypes.bool,
  height: ProtoTypes.string,
  className: ProtoTypes.string,
};

Overflow.defaultProps = {
  notScrollbar: false,
  height: '100vh',
  className: null,
};
