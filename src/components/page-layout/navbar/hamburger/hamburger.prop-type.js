import { func, shape, string } from 'prop-types';

export const hamburgerPropTypes = { activeClass: string, onClick: func.isRequired };
export const HamburgerPropType = shape(hamburgerPropTypes);
