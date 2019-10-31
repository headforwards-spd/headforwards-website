const faker = require('faker');

export default function generateImage(square=false) {

    const width = square ? 320 : 512;
    const height = 320;
    const id = faker.random.number({min: 1, max: 1000});

    const publicURL = `https://picsum.photos/id/${id}/${width}/${height}`;

    return { publicURL };
}
