import { ReactComponent as Search } from '../../../assets/Icons/search.svg';
import { inputSearch } from './InputSearch.module.scss';

export default function InputSearch() {
  return (
    <label htmlFor="search" className={inputSearch}>
      <Search />
      <input type="text" id="search" placeholder="Search" />
    </label>
  );
}
