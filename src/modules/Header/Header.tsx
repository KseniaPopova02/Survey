'use client';

import { useRouter } from 'next/navigation';
import { Arrow } from '@/components';
import './styles.css';
import { useBackButtonVisibility, useLogo } from './hooks';

export const Header = () => {
  const router = useRouter();
  const isBackButtonVisible = useBackButtonVisibility();
  const Logo = useLogo();

  const backButton = isBackButtonVisible ? (
    <Arrow onClick={() => router.back()} />
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
