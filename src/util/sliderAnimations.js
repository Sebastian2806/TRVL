import { gsap } from 'gsap';

export const initCardPosition = (ref, position, init = false) => {
  const sign = position === 0 || position === 1 ? -1 : 1;
  const duration = init ? 0 : 0.6;
  const delay = init ? 0 : 0.3;
  const ease = 'expo.inOut';
  let width = 0;
  let delayWhenIn = 0;
  let scale = 1;
  let opacity = 1;
  let rotationY = 0;
  let zIndex = 10;

  if (position !== 2) {
    width = window.innerHeight < 650 ? 208 : 260;
    rotationY = -32 * sign;
  }

  if (position === 1 || position === 3) {
    delayWhenIn = 0.05;
    scale = 0.95;
    opacity = 0.7;
    zIndex = 8;
  } else if (position === 0 || position === 4) {
    delayWhenIn = 0.1;
    width *= 2;
    scale = 0.9;
    opacity = 0.4;
    zIndex = 6;
  }

  gsap.to(ref, {
    duration,
    zIndex,
    opacity,
    x: width * sign,
    scale,
    rotationY,
    ease,
    delay,
  });

  if (init) {
    gsap.to(ref, 1.5, {
      y: 0,
      ease,
      delay: delayWhenIn,
    });
  }
};

export const descriptionIn = (el) => {
  const title = [...el.children][0];
  const line = [...el.children][1];
  const place = [...el.children][2];
  const ease = 'power4.out';

  gsap.fromTo(
    [title, place],
    { y: 50, autoAlpha: 0 },
    {
      delay: 1.3,
      autoAlpha: 1,
      duration: 0.5,
      y: 0,
      ease,
      stagger: 0.1,
    },
  );

  gsap.fromTo(
    line,
    { scaleX: 0 },
    {
      delay: 1.5,
      duration: 0.4,
      opacity: 1,
      scaleX: 1,
      transformOrigin: 'left',
      ease,
    },
  );
};

export const descriptionOut = (el) => {
  const title = [...el.children][0];
  const line = [...el.children][1];
  const place = [...el.children][2];
  const ease = 'power4.out';

  gsap.to([title, place], {
    duration: 0.6,
    y: -100,
    ease,
    stagger: 0.2,
  });

  gsap.to(line, {
    duration: 0.4,
    scaleX: 0,
    transformOrigin: 'right',
    ease,
  });
};
