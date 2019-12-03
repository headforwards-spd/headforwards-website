import { bool, arrayOf, shape, func, instanceOf } from 'prop-types'
import AppContainer                               from '../../../containers/app.container'
import { MenuItemPropType }           from './menu-item/menu-item.prop-type';
import { CompanyInfoPropType }        from '../company-info.prop-type';

export const navbarPropTypes = {
    appContainer: instanceOf(AppContainer).isRequired,
    menu: arrayOf(MenuItemPropType).isRequired,
    hasBackground: bool,
    companyInfo: CompanyInfoPropType.isRequired,
};

export const NavbarPropType = shape(navbarPropTypes);
