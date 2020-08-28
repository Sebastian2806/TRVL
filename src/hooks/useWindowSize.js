import { useState, useEffect } from 'react';
import _ from 'lodash';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({});

  const setSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setWindowSize({ width, height });
  };

  useEffect(() => {
    setSize();

    const debouncedSetSize = _.debounce(setSize, 400);

    window.addEventListener('resize', debouncedSetSize);
    return () => {
      window.removeEventListener('resize', debouncedSetSize);
    };
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
  };
};

export default useWindowSize;
