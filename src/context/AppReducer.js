//App Reducer determines how the state of the application should change in response to the action. A reducer takes in
//current state and action, and returns a new state
export default (state, action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction=>
                    transaction.id!==action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case 'SET_BASE_CURRENCY':
            return{
                ...state,
                transactions: action.payload,
            }
        
        case 'SET_TARGET_CURRENCY':
            return{
                    ...state,
                    transactions: action.payload,
            }
        case 'SET_EXCHANGE_RATES':
            return{
                ...state,
                exchangeRates: action.payload,
            }

        default:
            return state;
    }
        
}