/* eslint-disable no-underscore-dangle */
export default function Control() {
  // eslint-disable-next-line no-unused-vars
  let MAP = '';
  let DIV = '';

  function onAdd(map) {
    MAP = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl';
    this._container.textContent = 'Aqui';
    DIV = this._container;
    return this._container;
  }

  function onRemove() {
    DIV.parentNode.removeChild(this._container);
    MAP = undefined;
  }
  return { onAdd, onRemove };
}
