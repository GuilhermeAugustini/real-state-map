import { useState, useCallback } from 'react';
import Card from '../../Components/Card/Card';
import CardGrid from '../../Components/Card/CardGrid/CardGrid';
import Container from '../../Components/Container/Container';
import Filter from '../../Components/Filter/Filter';
import Header from '../../Components/Header/Header';
import Map from '../../Components/Map/Map';
import Menu from '../../Components/Menu/Menu';
import Overflow from '../../Components/Overflow/Overflow';
import Portal from '../../Components/Portal/Portal';
import { container, containerFilter, containerOverflow, overflow } from './Home.module.scss';

const initialState = {
  grid: true,
  menu: false,
};
export default function Home() {
  const [state, setState] = useState(initialState);
  const dispatchState = useCallback(
    (newState) => setState((prev) => ({ ...prev, ...newState })),
    []
  );
  return (
    <>
      {state.menu && (
        <Portal>
          <Menu setMenu={dispatchState} />
        </Portal>
      )}

      <Header />

      <Container className={container}>
        <Container className={containerFilter}>
          <Filter setFilter={dispatchState} grid={state.grid} />
          <Overflow height="85vh" className={overflow}>
            <div className={containerOverflow} data-grid={state.grid}>
              {Array.from({ length: 8 }).map(() => (state.grid ? <CardGrid /> : <Card />))}
            </div>
          </Overflow>
        </Container>
        <Map />
      </Container>
    </>
  );
}
