import ProtoTypes from 'prop-types';
import { overflow } from './Overflow.module.scss';

export default function Overflow({ children }) {
  return <div className={overflow}>{children}</div>;
}

Overflow.propTypes = {
  children: ProtoTypes.node.isRequired,
};
