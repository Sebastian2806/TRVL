import { places } from '../util/places';

export const useCurrentPlace = (currentPlace) => {
  return places.find((el) => el.id === currentPlace);
};
