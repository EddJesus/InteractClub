export default (state:any=0, action:any) => {
    switch(action.type){
        case "home":
            return action.payload = true;

        default:
            return state;
    }
}