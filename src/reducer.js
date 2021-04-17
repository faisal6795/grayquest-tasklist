const initialState = getData() || { mainList: [], counter: 0 };

function getData() {
    return JSON.parse(localStorage.getItem('todoList'));
}

function setData(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
}

export default function reducer(state = initialState, action) {
    function performAction(state, action) {
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

    const updatedData = performAction(state, action);
    setData(updatedData);
    return updatedData;
}