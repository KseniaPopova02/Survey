'use client';

import NebulaLogo from '@/assets/nebula-logo.svg';
import WhiteNebulaLogo from '@/assets/nebula-white-logo.svg';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowBack } from '@/components';
import './styles.css';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isBackButtonVisible = pathname !== '/question/gender-selection';
  const Logo =
    pathname === '/question/how-it-work' ? WhiteNebulaLogo : NebulaLogo;

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
