import { arrayOf, bool, instanceOf, shape } from 'prop-types';

import AppContainer from '../../../containers/app.container';
import { CompanyInfoPropType } from '../company-info.prop-type';
import { MenuItemPropType } from './menu-item/menu-item.prop-type';

export const navbarPropTypes = {
    appContainer: instanceOf(AppContainer).isRequired,
    menu: arrayOf(MenuItemPropType).isRequired,
    hasBackground: bool,
    companyInfo: CompanyInfoPropType.isRequired,
};

export const NavbarPropType = shape(navbarPropTypes);
