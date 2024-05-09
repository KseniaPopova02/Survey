import type { Metadata } from 'next';
import '@/globals.css';
import { IRootLayout } from '@/generalTypes';
import { Header } from '@/modules';
import { Providers } from '@/Redux';

export const metadata: Metadata = {
  title: 'Nebula Survey',
  description: 'Survey for your unique astrological blueprint.',
};

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
