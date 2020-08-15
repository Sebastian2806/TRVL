import GrandCanyon from '../assets/img/Grand Canyon.jpg';
import GreatBarrierReef from '../assets/img/Great Barrier Reef.jpg';
import LakeBled from '../assets/img/Lake Bled.jpg';
import MoraineLake from '../assets/img/Moraine Lake.jpg';
import NiagaraFalls from '../assets/img/Niagara Falls.jpg';

export const places = [
  {
    id: 1,
    name: 'Grand Canyon',
    localization: 'USA',
    src: {
      jpg: GrandCanyon,
    },
  },
  {
    id: 2,
    name: 'Great Barrier Reef',
    localization: 'Australia',
    src: {
      jpg: GreatBarrierReef,
    },
  },
  {
    id: 3,
    name: 'Lake Bled',
    localization: 'Slovenia',
    src: {
      jpg: LakeBled,
    },
  },
  {
    id: 4,
    name: 'Moraine Lake',
    localization: 'Canada',
    src: {
      jpg: MoraineLake,
    },
  },
  {
    id: 5,
    name: 'Niagara Falls',
    localization: 'Canada / USA',
    src: {
      jpg: NiagaraFalls,
    },
  },
];
