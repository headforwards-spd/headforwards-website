import { arrayOf, bool, func, shape, string } from 'prop-types';

import { CompanyInfoPropType } from '../../company-info.prop-type';
import { MenuItemPropType } from '../menu-item/menu-item.prop-type';

export const menuPropTypes = {
    menuClick: func.isRequired,
    hasBackground: bool,
    activeClass: string,
    menu: arrayOf(MenuItemPropType).isRequired,
    companyInfo: CompanyInfoPropType.isRequired,
};

export const MenuPropType = shape(menuPropTypes);
