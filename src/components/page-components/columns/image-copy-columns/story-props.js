import faker from 'faker/locale/en_GB';

import generateImage from '../../../../lib/generate-image';

export default getProps;

const type = 'markdown-component';
const titleValue = faker.lorem.sentence;
const textValue = faker.lorem.paragraph;
const linkTextValue = faker.lorem.words;
const linkValue = () => `/${faker.lorem.slug()}`;
const imageValue = () => generateImage(true);

function getProps() {
    return {
        id: faker.random.uuid(),
        title: titleValue(),
        content: [
            {
                id: faker.random.uuid(),
                type,
                text: textValue(),
            },
        ],
        image: imageValue(),
        link: {
            linkText: linkTextValue(),
            link: linkValue(),
        },
    };
}
