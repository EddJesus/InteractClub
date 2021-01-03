import { createStore, combineReducers } from "redux";
import navigationReducer from "./Navigation/Navigation.reducer";

const rootReducer = combineReducers({
    navigation: navigationReducer
})

const store = createStore(rootReducer);

export default store;