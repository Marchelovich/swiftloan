import { useState, useEffect } from 'react';

export const useSplineLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkSplineViewer = () => {
      if (customElements.get('spline-viewer')) {
        setIsLoaded(true);
      }
    };

    checkSplineViewer();
    const timeout = setTimeout(checkSplineViewer, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return isLoaded;
};