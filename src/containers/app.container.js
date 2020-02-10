import { Container } from 'unstated';

export default class App extends Container {
    state = {
        menuIsOpen: false,
    };

    setMenuIsOpen = menuIsOpen => this.setState({ menuIsOpen });
}
