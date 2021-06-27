import ProtoTypes from 'prop-types';

export default function Container({ children, className }) {
  return <div className={className}>{children}</div>;
}

Container.propTypes = {
  children: ProtoTypes.node.isRequired,
  className: ProtoTypes.string,
};

Container.defaultProps = {
  className: '',
};
