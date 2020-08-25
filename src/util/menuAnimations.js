import { gsap } from 'gsap';

const ease = 'expo.inOut';

export const openMenu = (
  menuWrapper,
  menu,
  menuBackground,
  menuList,
  menuQuote,
  menuQuoteAuthor,
  menuImages,
  menuLayers,
) => {
  const tl = gsap.timeline();

  gsap.to(menuQuoteAuthor, 0, { opacity: 0 });

  tl.to(menuWrapper, 0, { display: 'block' })
    .fromTo(
      [menu, menuBackground],
      { skewY: 2 },
      {
        duration: 0.8,
        y: 0,
        skewY: 0,
        ease,
        stagger: {
          amount: 0.06,
          from: 'end',
        },
      },
    )
    .fromTo(
      [...menuList.children],
      { autoAlpha: 0, x: -70 },
      {
        duration: 0.5,
        x: 0,
        autoAlpha: 1,
        ease,
        stagger: 0.06,
      },
    )
    .fromTo(
      menuQuote,
      { y: 100, skewY: 5, autoAlpha: 0 },
      { duration: 2, delay: -0.5, autoAlpha: 1, y: 0, skewY: 0, ease: 'power4.out' },
    )
    .fromTo(
      menuQuoteAuthor,
      { y: 30, autoAlpha: 0 },
      { duration: 1, delay: -0.6, y: 0, autoAlpha: 1, ease: 'power4.out' },
    )
    .fromTo(
      menuLayers,
      { scaleX: 1 },
      { duration: 1.2, delay: -2.4, scaleX: 0, transformOrigin: 'top right', ease, stagger: 0.15 },
    )
    .fromTo(menuImages, { scale: 1.4 }, { duration: 1.2, delay: -2.4, scale: 1, ease, stagger: 0.15 });
};

export const closeMenu = (menuWrapper, menu, menuBackground) => {
  const tl = gsap.timeline();

  tl.to([menu, menuBackground], {
    duration: 0.8,
    y: '-100%',
    ease,
    stagger: {
      amount: 0.06,
    },
  }).to(menuWrapper, 0, { display: 'none' });
};
