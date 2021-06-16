import { useState } from 'react';
import { ReactComponent as Area } from '../../assets/Icons/area.svg';
import { ReactComponent as ArrowLeft } from '../../assets/Icons/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/Icons/arrowRight.svg';
import { ReactComponent as Bathrooms } from '../../assets/Icons/bathrooms.svg';
import { ReactComponent as Dorms } from '../../assets/Icons/dorms.svg';
import { ReactComponent as Favorite } from '../../assets/Icons/favorite.svg';
import { ReactComponent as FavoriteSelect } from '../../assets/Icons/favoriteSelect.svg';
import {
  arrow,
  arrows,
  buttonFavorite,
  card,
  cardFooter,
  cardHeader,
  indicators,
  slide,
} from './Card.module.scss';

export default function Card() {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className={card}>
      <div className={cardHeader}>
        <div className={slide}>
          <button
            type="button"
            className={buttonFavorite}
            onClick={() => setFavorite(!favorite)}
            data-selected={favorite}
          >
            {favorite ? <FavoriteSelect /> : <Favorite />}
            <span hidden>Favorites</span>
          </button>
          <div className={arrows}>
            <button type="button" className={arrow}>
              <ArrowLeft />
              <span hidden>Arrow Left</span>
            </button>
            <button type="button" className={arrow}>
              <ArrowRight />
              <span hidden>Arrow Right</span>
            </button>
          </div>

          <div className={indicators}>
            <button type="button" aria-label="slide-1" />
            <button type="button" aria-label="slide-2" data-selected="false" />
            <button type="button" aria-label="slide-3" />
            <button type="button" aria-label="slide-4" />
          </div>
        </div>
      </div>
      <div className={cardFooter}>
        <Dorms />
        <Area />
        <Bathrooms />
      </div>
    </div>
  );
}
