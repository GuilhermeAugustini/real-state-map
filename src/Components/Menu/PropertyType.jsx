import ProtoTypes from 'prop-types';
import { type } from './PropertyType.module.scss';

export default function PropertyType({ icon }) {
  const Component = icon;
  return (
    <div className={type}>
      <Component />
    </div>
  );
}
PropertyType.propTypes = {
  icon: ProtoTypes.node.isRequired,
};
