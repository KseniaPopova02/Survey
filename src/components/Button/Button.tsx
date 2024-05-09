import { IButton } from './types';

export const Button: React.FC<IButton> = ({
  innerText,
  className,
  onClick,
}) => (
  <button className={className} onClick={onClick}>
    {innerText}
  </button>
);
