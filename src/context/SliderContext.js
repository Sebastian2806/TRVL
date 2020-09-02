import React from 'react';

const SliderContext = React.createContext({
  cardsDirection: [0, 1, 2, 3, 4],
  changeCardsDirection: () => {},
  disabled: false,
});

export default SliderContext;
