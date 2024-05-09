import { ButtonClassName } from '@/generalTypes';

export interface IButton {
  innerText: string;
  className: ButtonClassName;
  onClick: () => void;
}
