import { gsap } from 'gsap';

export const initCardsPosition = (slider, cards, cardsDirection) => {
  gsap.set(slider.current, {
    perspective: '2000px',
  });

  // CENTER ELEMENT
  gsap.set(cards[cardsDirection[2]], {
    zIndex: 10,
    x: 0,
    scale: 1,
    rotationY: 0,
  });

  // RIGHT ELEMENTS
  gsap.set(cards[cardsDirection[3]], {
    opacity: 0.8,
    x: 250,
    scale: 0.9,
    rotationY: -30,
  });

  gsap.set(cards[cardsDirection[4]], {
    opacity: 0.6,
    x: 480,
    scale: 0.85,
    rotationY: -30,
  });

  // LEFT ELEMENTS
  gsap.set(cards[cardsDirection[0]], { x: -480, scale: 0.85, rotationY: 30, opacity: 0.6 });
  gsap.set(cards[cardsDirection[1]], { x: -250, scale: 0.9, rotationY: 30, opacity: 0.8 });
};

export const initCardsDescriptionPosition = (cards, focusedEl) => {
  cards.forEach((el, i) => {
    if (i !== focusedEl)
      gsap.set([...[...el.children][0].children], {
        opacity: 0,
        visibility: 'hidden',
      });
  });
};

export const changeCard = (el, x, opacity, zIndex, scale, { duration = 0.5, rotationY = -30 } = {}) => {
  gsap.to(el, {
    delay: 0.5,
    duration,
    opacity,
    zIndex,
    x,
    scale,
    rotationY,
    ease: 'power1.inOut',
  });
};

export const changeCardDescription = (currentEl, nextEl) => {
  const currentElements = [...currentEl.children];
  const nextElements = [...nextEl.children];

  gsap.to([currentElements[0], currentElements[2]], {
    y: -100,
    ease: 'power4.out',
    opacity: 0,
    stagger: 0.2,
  });

  gsap.to(currentElements[1], 0.3, {
    delay: 0.4,
    scaleX: 0,
    opacity: 0,
    transformOrigin: 'right',
  });

  gsap.to([...currentElements], {
    visibility: 'hidden',
    delay: 0.7,
  });

  gsap.set([...nextElements], {
    visibility: 'visible',
  });

  gsap.fromTo(
    [nextElements[0], nextElements[2]],
    { y: 100 },
    {
      delay: 0.7,
      y: 0,
      opacity: 1,
      stagger: 0.2,
    },
  );

  gsap.fromTo(
    nextElements[1],
    { scaleX: 0 },
    {
      delay: 1.1,
      opacity: 1,
      scaleX: 1,
      transformOrigin: 'left',
    },
  );
};
