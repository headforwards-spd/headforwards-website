const faker = require('faker');

const linkValue = () => `/${faker.lorem.slug()}`;
const linkTextValue = faker.lorem.words;

export default function generateMenu() {

    const count = faker.random.number({min:2, max: 10});
    const menu = [];

    for(let i=0; i<count; i+=1) {
        menu.push(generateMenuItem());
    }

    return menu;
}

function generateMenuItem() {

    return {
        link: linkValue(),
        linkText: linkTextValue(),
        children: null
    };
}
