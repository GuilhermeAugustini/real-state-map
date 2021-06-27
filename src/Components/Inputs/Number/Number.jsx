import { ReactComponent as Minus } from '../../../assets/Icons/minus.svg';
import { ReactComponent as More } from '../../../assets/Icons/more.svg';
import Container from '../../Container/Container';

import { container, controls, input } from './Number.module.scss';

export default function Number() {
  return (
    <Container className={container}>
      <span className={controls}>
        <Minus />
      </span>
      <input type="text" className={input} value="3" />
      <span className={controls}>
        <More />
      </span>
    </Container>
  );
}
