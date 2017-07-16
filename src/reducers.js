const initialState = {
    angular: 0,
    react: 0,
    vuejs: 0
};

let mountState = {};
Object.keys(initialState).map(x => {
    return mountState[x] = Math.floor((Math.random() * 10) + 1);
});

// = initialState
export function voteReducer(state = {}, action) {
    switch (action.type) {
        case 'VOTE_INIT':
            return mountState;
        case 'VOTE_ANGULAR':
            return Object.assign({}, state, {angular: state.angular + 1});
        case 'VOTE_REACT':
            return Object.assign({}, state, {react: state.react + 1});
        case 'VOTE_VUEJS':
            return Object.assign({}, state, {vuejs: state.vuejs + 1});
        default:
            return state;

    }
}

export const todoReducer = (state = [], action) => {
    return state;
}