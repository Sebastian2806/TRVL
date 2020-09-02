export const getWidth = (ref) => ref.getBoundingClientRect();

export const setVH = () => {
  return () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
};
