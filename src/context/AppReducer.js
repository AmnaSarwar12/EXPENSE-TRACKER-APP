export default (state,action) =>{
    switch(action.type){
        case 'Delete_Transaction':
            return{
                ...state,
                transaction: state.transaction.filter(transactions=>transactions.id !== action.payload)
            }
        case 'add_Transaction':
                return{
                    ...state,
                    transaction: [action.payload, ...state.transaction]
                }
        default:
            return state;
    }
}