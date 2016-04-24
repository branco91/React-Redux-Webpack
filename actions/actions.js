const LIST_ADD_ITEM = 'LIST_ADD_ACTION'
const LIST_REMOVE_ITEM = 'LIST_REMOVE_ITEM'

export function addItem(fields)
{
    return{
        type:LIST_ADD_ITEM,
        fields
    }
}
export function removeItem(index)
{
    return{
        type:LIST_REMOVE_ITEM,
        index
    }
}