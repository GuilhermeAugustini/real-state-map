import ReactDOM from 'react-dom';
import ProtoTypes from 'prop-types';

export default function Portal({ children, container }) {
  return ReactDOM.createPortal(children, container);
}

Portal.propTypes = {
  children: ProtoTypes.node.isRequired,
  container: ({ container }, propName, componentName) => {
    if (!(container instanceof HTMLElement)) {
      return new Error(
        `Invalid prop "${propName}" supplied to "${componentName}". "${componentName}" is not instance of HTMLElement.`
      );
    }
    return null;
  },
};

Portal.defaultProps = {
  container: document.getElementById('root').parentNode,
};
