export default carouselReducer;

function getPrev(length, current) {
    return (current - 1 + length) % length;
}

function getNext(length, current) {
    return (current + 1) % length;
}

function carouselReducer(state, { type, ...action }) {
    const { length } = action;
    const { active } = state;

    switch (type) {
        case 'next':
            return {
                ...state,
                desired: getNext(length, active),
            };
        case 'prev':
            return {
                ...state,
                desired: getPrev(length, active),
            };
        default:
            return state;
    }
}
