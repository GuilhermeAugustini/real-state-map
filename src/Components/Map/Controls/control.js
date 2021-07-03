import ReactDOM from 'react-dom';
import Controls from './Controls';
/* eslint-disable no-underscore-dangle */
export default function Control() {
  // eslint-disable-next-line no-unused-vars
  let MAP;
  let CONTAINER;

  function createElement() {
    ReactDOM.render(<Controls />, CONTAINER);
  }

  function onAdd(map) {
    MAP = map;
    CONTAINER = document.createElement('div');
    CONTAINER.id = 'control';
    setTimeout(() => createElement(), 1);
    return CONTAINER;
  }

  function onRemove() {
    CONTAINER.parentNode.removeChild(CONTAINER);
    MAP = undefined;
  }
  return { onAdd, onRemove };
}
