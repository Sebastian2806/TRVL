import React from 'react';

const SliderContext = React.createContext({
  cardsDirection: [],
  changeCardsDirection: () => {},
});

export default SliderContext;
