import Container from '../../Container/Container';

import { container, choice, select } from './Radio.module.scss';

export default function Radio() {
  return (
    <Container className={container}>
      <span className={select} />
      <span className={choice}>1</span>
      <span className={choice}>2</span>
      <span className={choice} data-active="true">
        3
      </span>
      <span className={choice}>4</span>
      <span className={choice}>5+</span>
    </Container>
  );
}

Radio.propTypes = {};
