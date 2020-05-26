import companyInfo from './company-info';
import homePage from './home-page';
import mainMenu from './main-menu';

const settings = {
    name: 'settings',
    label: 'Site Settings',
    description: 'Website settings & meta data',
    files: [homePage, mainMenu, companyInfo],
};

export default settings;
