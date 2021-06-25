import ReactDOM from 'react-dom';
import ProtoTypes from 'prop-types';

export default function Portal({ children, container }) {
  return ReactDOM.createPortal(children, container);
}

Portal.propTypes = {
  children: ProtoTypes.node.isRequired,
  container: ProtoTypes.node,
};

Portal.defaultProps = {
  container: document.getElementById('root').parentNode,
};
