import Card from '../../Components/Card/Card';
import CardGrid from '../../Components/Card/CardGrid/CardGrid';
import Filter from '../../Components/Filter/Filter';
import Portal from '../../Components/Portal/Portal';
import Menu from '../../Components/Menu/Menu';
import Header from '../../Components/Header/Header';
import Map from '../../Components/Map/Map';
import { container, containerFilter, overflow } from './Home.module.scss';

export default function Home() {
  return (
    <>
      <Portal>
        <Menu />
      </Portal>
      <Header />
      <div className={container}>
        <div className={containerFilter}>
          <Filter />
          <div className={overflow}>
            <CardGrid />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Map />
      </div>
    </>
  );
}
