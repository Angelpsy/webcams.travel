import {createBrowserHistory, createHashHistory} from "history";
import {applyMiddleware, createStore, Store} from "redux";
import {routerMiddleware} from "connected-react-router";
import createRootReducer from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/logOnlyInProduction";
import {RootState} from "./types";
import {middlewareFetchWebCamsAfterChangeBounds} from "./modules/web-cams/middleware";

import {TypeHistory} from "../types/app-config";

const TYPE_HISTORY: TypeHistory = process.env.TYPE_HISTORY as TypeHistory;

export const history = TYPE_HISTORY === TypeHistory.HASH ? createHashHistory() :
    createBrowserHistory();

const composeEnhancers = composeWithDevTools({});
const middleware = [
    routerMiddleware(history),
    thunk,
    middlewareFetchWebCamsAfterChangeBounds,
];

export default function configureStore(preloadedState?: RootState): Store<RootState> {
    return createStore(
        createRootReducer({history}),
        preloadedState,
        composeEnhancers(applyMiddleware(...middleware)),
    )
}
