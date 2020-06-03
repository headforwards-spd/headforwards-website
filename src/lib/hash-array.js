import hash from 'object-hash';

export default function hashArray(toHash = []) {
    return toHash.map(item => ({
        id: hash(item),
        ...item,
    }));
}
