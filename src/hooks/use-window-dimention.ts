import { useState, useEffect } from 'react';
// Reference: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
type Dimensions = {
  width: number;
  height: number;
};

const getWindowDimensions = (): Dimensions => {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = (): Dimensions => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
