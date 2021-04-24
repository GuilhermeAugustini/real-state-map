import classNames from 'classnames';
import { ReactComponent as Search } from '../../assets/Icons/search.svg';
import { ReactComponent as ViewGrid } from '../../assets/Icons/viewGrid.svg';
import { ReactComponent as ViewList } from '../../assets/Icons/viewList.svg';
import { ReactComponent as FilterIcon } from '../../assets/Icons/filter.svg';
import { ReactComponent as Sort } from '../../assets/Icons/sort.svg';

import {
  filter,
  filterUp,
  filterDown,
  inputSearch,
  button,
  sort,
  results,
  views,
  viewButton,
  active,
} from './Filter.module.scss';

export default function Filter() {
  return (
    <div className={filter}>
      <div className={filterUp}>
        <label htmlFor="search" className={inputSearch}>
          <Search />
          <input type="text" id="search" placeholder="Search" />
        </label>
        <button type="button" className={button}>
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
          <button type="button" className={classNames(viewButton, active)}>
            <ViewGrid />
          </button>
          <button type="button" className={viewButton}>
            <ViewList />
          </button>
        </div>
      </div>
    </div>
  );
}
