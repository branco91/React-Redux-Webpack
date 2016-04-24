const initialState={
    items:[]
}

export default function listItems(state = initialState, action) {
    switch (action.type) {
        case 'LIST_ADD_ACTION':
            return {
                ...state,
                items: [
                    ...state.items, {
                        text: action.fields,
                        id:state.items.length+1
                    },
                ],
            };

        case 'LIST_REMOVE_ITEM':
            return {
                ...state,

                items: [
                    ...state.items.slice(0, action.index),
                    ...state.items.slice(+action.index + 1),
                ],
            };

        default:
            return state;
    }
}