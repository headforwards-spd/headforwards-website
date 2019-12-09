import { Container } from 'unstated';

export default class AppContainer extends Container {
    state = {
        menuIsOpen: false,
    };

    setMenuIsOpen = menuIsOpen => this.setState({ menuIsOpen });
}
