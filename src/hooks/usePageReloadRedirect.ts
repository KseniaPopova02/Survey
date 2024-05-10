import { SURVEY_PATHS } from '@/routes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const usePageReloadRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const reloadFlag = sessionStorage.getItem('reloading');

    if (reloadFlag) {
      sessionStorage.removeItem('reloading');
      router.push(SURVEY_PATHS.GENDER_SELECTION);
    }

    const setReloadFlag = () => sessionStorage.setItem('reloading', 'true');

    window.addEventListener('beforeunload', setReloadFlag);

    return () => window.removeEventListener('beforeunload', setReloadFlag);
  }, [router]);
};
