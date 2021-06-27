import { ReactComponent as Back } from '../../assets/Icons/back.svg';
import { ReactComponent as typeHome } from '../../assets/Icons/typeHome.svg';
import Button from '../Button/Button';
import Container from '../Container/Container';
import InputSearch from '../Inputs/InputSearch/InputSearch';
import Number from '../Inputs/Number/Number';
import Radio from '../Inputs/Radio/Radio';
import Range from '../Inputs/Range/Range';
import Overflow from '../Overflow/Overflow';
import Title from '../Title/Title';
import PropertyType from './PropertyType';

import { back, container, floor, menu, overlay, properties, title } from './Menu.module.scss';

export default function Menu() {
  return (
    <div className={overlay}>
      <div className={menu}>
        <Overflow>
          <Container className={container}>
            <Container className={back}>
              <Back />
            </Container>

            <Title className={title}>Filters</Title>

            <Container>
              <InputSearch />
            </Container>

            <Container>
              <Title as="h2">Property Type</Title>
              <div className={properties}>
                <PropertyType icon={typeHome} />
                <PropertyType icon={typeHome} />
                <PropertyType icon={typeHome} />
                <PropertyType icon={typeHome} />
              </div>
            </Container>

            <Container>
              <Title as="h2">Price</Title>
              <Range />
            </Container>

            <Container>
              <Title as="h2">Area</Title>
              <Range />
            </Container>

            <Container>
              <Title as="h2">Rooms</Title>
              <Radio />
            </Container>

            <Container>
              <Title as="h2">Bathrooms</Title>

              <Radio />
            </Container>

            <Container>
              <Title as="h2">Parkings</Title>
              <Radio />
            </Container>

            <Container className={floor}>
              <Title as="h2">Floor</Title>
              <Number />
            </Container>

            <Container>
              <Button background="secondary">Filter</Button>
              <Button>Clear</Button>
            </Container>
          </Container>
        </Overflow>
      </div>
    </div>
  );
}
