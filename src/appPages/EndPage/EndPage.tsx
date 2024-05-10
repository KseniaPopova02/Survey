'use client';
import { usePageReloadRedirect } from '@/hooks';
import './styles.css';

export const EndPage = () => {
  usePageReloadRedirect();
  return (
    <div className="end">
      Your unique astrological insights are being prepared. Soon, you will
      discover the stars in a way you never imagined possible.
    </div>
  );
};
