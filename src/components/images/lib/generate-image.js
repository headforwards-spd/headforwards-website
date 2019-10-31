const faker = require('faker');

export default function generateImage(square=false) {

    const url = square ? faker.image.imageUrl(320,320) : faker.image.imageUrl(512,320);

    return {
        publicURL: `${url}?${faker.random.number()}`
    };
}
