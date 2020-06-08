const initialState = {
    mainList: [],
    counter: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_LIST':
            return { ...state, mainList: [...state.mainList, action.value] };
        case 'DELETE_LIST':
            return { ...state, mainList: state.mainList.filter(item => item.id !== action.value) };
        case 'UPDATE_LIST':
            return { ...state, mainList: state.mainList.map(item => item.id === action.value.id ? action.value : item) };
        case 'COUNTER':
            return { ...state, counter: action.value };
        default:
            return state;
    }
}