const faker = require('faker');

export default function generateImage() {
    return {publicURL: `${faker.image.imageUrl(512,320)}?${faker.random.number()}`};
}
