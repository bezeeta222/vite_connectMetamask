import { combineReducers } from "redux";
import ethaccountReducer from "./ethaccount/reducer";

const rootReducer = combineReducers({
    ethaccount: ethaccountReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
