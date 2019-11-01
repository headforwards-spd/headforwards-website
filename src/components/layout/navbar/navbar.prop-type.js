import { arrayOf, boolean, shape } from 'prop-types';
import { MenuItemPropType } from './menu-item/menu-item.prop-type';
import { CompanyInfoPropType } from '../company-info.prop-type';

export const navbarPropTypes = {
    menu: arrayOf(MenuItemPropType).isRequired,
    hasBackground: boolean,
    companyInfo: CompanyInfoPropType.isRequired,
};

export const NavbarPropType = shape(navbarPropTypes);
