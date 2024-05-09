import ArrowBackSvg from '@/assets/arrow-back.svg';
import { IArrowBack } from './type';
import './styles.css';

export const ArrowBack: React.FC<IArrowBack> = ({ onClick }) => {
  return (
    <div className="arrow-back" onClick={onClick}>
      <ArrowBackSvg />
    </div>
  );
};
