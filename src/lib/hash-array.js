import hash from 'object-hash';

export default function hashArray(toHash = []) {
    return toHash.map(item => ({
        ...item,
        id: hash(JSON.stringify(item)),
    }));
}
