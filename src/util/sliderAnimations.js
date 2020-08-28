import { gsap } from 'gsap';

export const initCardPosition = (ref, pos, sign = 1, init = false) => {
  const duration = 0.6;
  const ease = 'expo.inOut';
  const delay = 0.3;
  let delayWhenIn = 0;

  if (pos === 2) {
    gsap.to(ref, {
      duration: init ? 0 : duration,
      zIndex: 10,
      opacity: 1,
      x: 0,
      scale: 1,
      rotationY: 0,
      ease,
      delay,
    });
  } else if (pos === 1 || pos === 3) {
    delayWhenIn = 0.05;
    gsap.to(ref, {
      duration: init ? 0 : duration,
      zIndex: 8,
      opacity: 0.7,
      x: 260 * sign,
      scale: 0.95,
      rotationY: -32 * sign,
      ease,
      delay,
    });
  } else if (pos === 0 || pos === 4) {
    delayWhenIn = 0.1;
    gsap.to(ref, {
      duration: init ? 0 : duration,
      zIndex: 6,
      opacity: 0.4,
      x: 2 * 260 * sign,
      scale: 0.9,
      rotationY: -32 * sign,
      ease,
      delay,
    });
  }

  gsap.to(ref, 1.5, {
    y: 0,
    ease,
    delay: delayWhenIn,
  });
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
