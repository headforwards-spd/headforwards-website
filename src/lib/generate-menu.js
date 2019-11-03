const faker = require('faker');

const linkValue = () => `/${faker.lorem.slug()}`;
const linkTextValue = faker.lorem.words;

export default function generateMenu(isChildMenu = false) {
    const count = faker.random.number({ min: 2, max: 10 });
    const menu = [];

    for (let i = 0; i < count; i += 1) {
        menu.push(generateMenuItem(!isChildMenu));
    }

    return menu;
}

function generateMenuItem(hasChildren = false) {
    return {
        link: linkValue(),
        linkText: linkTextValue(),
        children: hasChildren ? generateMenu(true) : null,
    };
}
