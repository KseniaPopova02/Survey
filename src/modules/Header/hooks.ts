import { usePathname } from 'next/navigation';
import { SURVEY_PATHS } from '@/routes';
import NebulaLogo from '@/assets/nebula-logo.svg';
import WhiteNebulaLogo from '@/assets/nebula-white-logo.svg';

export const useBackButtonVisibility = () => {
  const pathname = usePathname();
  return pathname !== SURVEY_PATHS.GENDER_SELECTION;
};

export const useLogo = () => {
  const pathname = usePathname();
  return pathname === SURVEY_PATHS.HOW_IT_WORK ? WhiteNebulaLogo : NebulaLogo;
};
