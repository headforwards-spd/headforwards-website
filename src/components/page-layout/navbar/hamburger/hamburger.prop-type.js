import { shape, string, func } from 'prop-types';

export const hamburgerPropTypes = { activeClass: string, onClick: func.isRequired };
export const HamburgerPropType = shape(hamburgerPropTypes);