import InputSearch from '../Inputs/InputSearch/InputSearch';
import Title from '../Title/Title';
import Button from '../Button/Button';
import Overflow from '../Overflow/Overflow';
import PropertyType from './PropertyType';
import { ReactComponent as typeHome } from '../../assets/Icons/typeHome.svg';

import { overlay, menu, properties } from './Menu.module.scss';

export default function Menu() {
  return (
    <div className={overlay}>
      <div className={menu}>
        <Overflow>
          <div>
            <Title as="h2">Filters</Title>
            <InputSearch />
            <Title as="h2">Property Type</Title>
            <div className={properties}>
              <PropertyType icon={typeHome} />
              <PropertyType icon={typeHome} />
              <PropertyType icon={typeHome} />
              <PropertyType icon={typeHome} />
            </div>
            <Title as="h2">Price</Title>
            <div />
            <Title as="h2">Area</Title>
            <div />
            <Title as="h2">Rooms</Title>
            <div />
            <Title as="h2">Bathrooms</Title>
            <div />
            <Title as="h2">Parkings</Title>
            <div />
            <Title as="h2">Floor</Title>
            <div />
            <Button background="secondary">Filter</Button>
            <Button>Clear</Button>
          </div>
        </Overflow>
      </div>
    </div>
  );
}
