import { ReactComponent as Navigation } from '../../../assets/Icons/navigation.svg';
import { ReactComponent as ZoomUp } from '../../../assets/Icons/zoomUp.svg';
import { ReactComponent as ZoomDown } from '../../../assets/Icons/zoomDown.svg';
import Container from '../../Container/Container';
import { container, zoom, zoomButtons, navigation, navigationButton } from './Controls.module.scss';

export default function Controls() {
  return (
    <Container className={container}>
      <div className={navigation}>
        <button type="button" className={navigationButton}>
          <Navigation />
        </button>
      </div>
      <div className={zoom}>
        <button type="button" className={zoomButtons}>
          <ZoomUp />
        </button>
        <button type="button" className={zoomButtons}>
          <ZoomDown />
        </button>
      </div>
    </Container>
  );
}
