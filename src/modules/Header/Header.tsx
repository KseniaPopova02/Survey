'use client';

import NebulaLogo from '@/assets/nebula-logo.svg';
import WhiteNebulaLogo from '@/assets/nebula-white-logo.svg';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowBack } from '@/components';
import './styles.css';
import { SURVEY_PATHS } from '@/routes';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isBackButtonVisible = pathname !== SURVEY_PATHS.GENDER_SELECTION;
  const Logo =
    pathname === SURVEY_PATHS.HOW_IT_WORK ? WhiteNebulaLogo : NebulaLogo;

  const onBackClick = () => {
    router.back();
  };

  const backButton = isBackButtonVisible ? (
    <ArrowBack onClick={onBackClick} />
  ) : (
    <div className="invisible-div"></div>
  );

  return (
    <div className="header">
      {backButton}
      <Logo />
      <div></div>
    </div>
  );
};
