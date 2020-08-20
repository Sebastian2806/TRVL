import { gsap } from 'gsap';

export const openMenu = (menu, menuBackground, menuList) => {
  const tl = gsap.timeline();
  const liArr = [...menuList.current.children];

  const backgrounds = liArr.map((el) => [...el.children][0]);

  tl.to([menu, menuBackground], {
    duration: 0,
    y: '0%',
  })
    .from([menu, menuBackground], {
      duration: 0.8,
      y: '-100%',
      ease: 'power3.inOut',
      skewY: 3,
      transformOrigin: 'top right',
      stagger: {
        amount: 0.09,
        from: 'end',
      },
    })
    .to([...backgrounds], {
      delay: -0.3,
      duration: 0.7,
      ease: 'power3.inOut',
      scaleX: 0,
      transformOrigin: 'right',
      stagger: {
        amount: 0.06,
      },
    });
};

export const closeMenu = (menu, menuBackground, menuList) => {
  const liArr = [...menuList.current.children];

  const backgrounds = liArr.map((el) => [...el.children][0]);

  gsap.to([menu, menuBackground], {
    ease: 'power3.inOut',
    duration: 1,
    y: '-100%',
    stagger: {
      amount: 0.09,
    },
  });

  gsap.to([...backgrounds], {
    duration: 0,
    delay: 1,
    scaleX: 1,
  });
};
