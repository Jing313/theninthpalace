import { useEffect } from 'react';

const useScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const url ="./js/init.js?ver=1.1";
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
};

export default useScript;