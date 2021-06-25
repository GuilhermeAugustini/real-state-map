import ProtoTypes from 'prop-types';

export default function Title({ children, as }) {
  const tags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };
  const Component = tags?.[as] ?? 'h1';
  return <Component>{children}</Component>;
}

Title.propTypes = {
  children: ProtoTypes.node.isRequired,
  as: ProtoTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Title.defaultProps = {
  as: 'h1',
};
