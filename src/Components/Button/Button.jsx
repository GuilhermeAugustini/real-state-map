import classNames from 'classnames';
import ProtoTypes from 'prop-types';

import { button } from './Button.module.scss';

export default function Button({
  type,
  name,
  value,
  classProps,
  disabled,
  onClick,
  children,
  background,
}) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      name={name}
      value={value}
      className={classNames(button, classProps)}
      disabled={disabled}
      onClick={onClick}
      data-background={background}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  name: '',
  value: null,
  classProps: '',
  disabled: false,
  onClick: null,
  background: 'primary',
};

Button.propTypes = {
  type: ProtoTypes.string,
  name: ProtoTypes.string,
  value: ProtoTypes.string,
  classProps: ProtoTypes.string,
  disabled: ProtoTypes.bool,
  onClick: ProtoTypes.func,
  background: ProtoTypes.oneOf(['primary', 'secondary']),
  children: ProtoTypes.node.isRequired,
};
