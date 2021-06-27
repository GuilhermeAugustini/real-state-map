import ProtoTypes from 'prop-types';
import Title from '../Title/Title';
import { type, title } from './PropertyType.module.scss';

export default function PropertyType({ icon }) {
  const Component = icon;
  return (
    <div className={type}>
      <Component />
      <Title as="h3" className={title}>
        Apartment
      </Title>
    </div>
  );
}
PropertyType.propTypes = {
  icon: ProtoTypes.elementType.isRequired,
};
