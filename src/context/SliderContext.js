import React from 'react';

const SliderContext = React.createContext({
  cardsDirection: [],
  changeCardsDirection: () => {},
  disabled: false,
});

export default SliderContext;
