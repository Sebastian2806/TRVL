import GrandCanyon from '../assets/img/jpg/grand_canyon.jpg';
import GreatBarrierReef from '../assets/img/jpg/great_barrier_reef.jpg';
import LakeBled from '../assets/img/jpg/lake_bled.jpg';
import MoraineLake from '../assets/img/jpg/moraine_lake.jpg';
import NiagaraFalls from '../assets/img/jpg/niagara_falls.jpg';

import GrandCanyonWebp from '../assets/img/webp/grand_canyon.webp';
import GreatBarrierReefWebp from '../assets/img/webp/great_barrier_reef.webp';
import LakeBledWebp from '../assets/img/webp/lake_bled.webp';
import MoraineLakeWebp from '../assets/img/webp/moraine_lake.webp';
import NiagaraFallsWebp from '../assets/img/webp/niagara_falls.webp';

export const places = [
  {
    id: 0,
    name: 'Grand Canyon',
    localization: 'USA',
    src: {
      jpg: GrandCanyon,
      webp: GrandCanyonWebp,
    },
  },
  {
    id: 1,
    name: 'Great Barrier Reef',
    localization: 'Australia',
    src: {
      jpg: GreatBarrierReef,
      webp: GreatBarrierReefWebp,
    },
  },
  {
    id: 2,
    name: 'Lake Bled',
    localization: 'Slovenia',
    src: {
      jpg: LakeBled,
      webp: LakeBledWebp,
    },
  },
  {
    id: 3,
    name: 'Moraine Lake',
    localization: 'Canada',
    src: {
      jpg: MoraineLake,
      webp: MoraineLakeWebp,
    },
  },
  {
    id: 4,
    name: 'Niagara Falls',
    localization: 'Canada / USA',
    src: {
      jpg: NiagaraFalls,
      webp: NiagaraFallsWebp,
    },
  },
];
