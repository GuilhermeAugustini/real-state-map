import classNames from 'classnames';
import ProtoTypes from 'prop-types';
import { ReactComponent as ViewGrid } from '../../assets/Icons/viewGrid.svg';
import { ReactComponent as ViewList } from '../../assets/Icons/viewList.svg';
import { ReactComponent as FilterIcon } from '../../assets/Icons/filter.svg';
import { ReactComponent as Sort } from '../../assets/Icons/sort.svg';
import InputSearch from '../Inputs/InputSearch/InputSearch';

import {
  filter,
  filterUp,
  filterDown,
  button,
  sort,
  results,
  views,
  viewButton,
  active,
} from './Filter.module.scss';

export default function Filter({ setFilter, grid }) {
  return (
    <div className={filter}>
      <div className={filterUp}>
        <InputSearch />
        <button type="button" className={button} onClick={() => setFilter({ menu: true })}>
          <FilterIcon />
          <span>Filter</span>
        </button>
      </div>

      <div className={filterDown}>
        <p className={results}>
          <b>145</b> results
        </p>
        <div className={sort} aria-labelledby="sortBy">
          <span>Sort By</span>
          <button id="sortBy" type="button" className={button}>
            <Sort />
            <span>Price</span>
          </button>
        </div>
        <div className={views}>
          <button
            type="button"
            className={classNames(viewButton, grid && active)}
            onClick={() => setFilter({ grid: true })}
          >
            <ViewGrid />
          </button>
          <button
            type="button"
            className={classNames(viewButton, !grid && active)}
            onClick={() => setFilter({ grid: false })}
          >
            <ViewList />
          </button>
        </div>
      </div>
    </div>
  );
}
Filter.propTypes = {
  setFilter: ProtoTypes.func.isRequired,
  grid: ProtoTypes.bool.isRequired,
};
