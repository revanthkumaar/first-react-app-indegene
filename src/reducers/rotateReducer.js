//reducer function

export default (state,action) => {
        switch(action.type) {
            case "start":
                return{
                    rotate: action.payload
                };
            case "stop":
                return{
                    rotate: action.payload
                };
            default:
                return state;
          
        }
}