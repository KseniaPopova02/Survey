import ArrowSvg from '@/assets/arrow-back.svg';
import { IArrow } from './type';
import './styles.css';

export const Arrow: React.FC<IArrow> = ({ onClick }) => {
  return (
    <div className="arrow" onClick={onClick}>
      <ArrowSvg />
    </div>
  );
};
