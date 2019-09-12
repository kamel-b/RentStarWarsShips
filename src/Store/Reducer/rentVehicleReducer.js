const intialState = {
    vehiclesToRent : []
}


const toggleRent = (state = intialState, action ) => {

    let nextState
    
    const rentIndex = state.vehiclesToRent.findIndex(item => item.name === action.value.name)
    
    
    switch(action.type){
        case 'ADD_RENT':

            if(rentIndex === -1) {
                nextState = {
                    ...state,
                    vehiclesToRent : [...state.vehiclesToRent, action.value]
                }
                
                return nextState || state

            }
            else{
                return state
                
            }
            

        case 'CANCEL_RENT':
            
            if(rentIndex !== -1) {
                nextState = {
                    ...state,
                    vehiclesToRent: state.vehiclesToRent.filter((item, index) => index !== rentIndex)
                }
                return nextState || state

            }
            else{
                return state;
            }
        

        default:
            return state
    }
}


export default toggleRent