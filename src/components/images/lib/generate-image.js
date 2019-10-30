const faker = require('faker');

export default function generateImage() {
    return {publicURL: `${faker.image.imageUrl(1024,640)}?${faker.random.number()}`};
}
