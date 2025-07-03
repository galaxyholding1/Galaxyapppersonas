// src/data/countries.js
// Aqui se llana las imagenes vectoriales de las banderas y se relacionan con el menu de creacion de usuario
import SpainFlag from '../assets/España.svg';
import USAFlag from '../assets/Estados Unidos.svg';
import UKFlag from '../assets/Reino Unido.svg';
import ColombiaFlag from '../assets/Colombia.svg';
import VenezuelaFlag from '../assets/Venezuela.svg';
import ArgentinaFlag from '../assets/Argentina.svg';
import MexicoFlag from '../assets/Mexico.svg';
import FranceFlag from '../assets/Francia.svg';
import ItalyFlag from '../assets/Italia.svg';
import RussiaFlag from '../assets/Rusia.svg';

// Aqui se llana ademas de las baderas los indicativos de cada pais y se relacionan con el menu de creacion de usuario
export const countries = [
  { label: 'España', code: '+34', value: 'ES', flag: SpainFlag },
  { label: 'Estados Unidos', code: '+1', value: 'US1', flag: USAFlag },
  { label: 'Estados Unidos', code: '+1', value: 'US2', flag: UKFlag },
  { label: 'Colombia', code: '+57', value: 'CO', flag: ColombiaFlag },
  { label: 'Venezuela', code: '+58', value: 'VE', flag: VenezuelaFlag },
  { label: 'Argentina', code: '+54', value: 'AR', flag: ArgentinaFlag },
  { label: 'México', code: '+52', value: 'MX', flag: MexicoFlag },
  { label: 'Francia', code: '+33', value: 'FR', flag: FranceFlag },
  { label: 'Italia', code: '+39', value: 'IT', flag: ItalyFlag },
  { label: 'Rusia', code: '+7', value: 'RU', flag: RussiaFlag },
];
