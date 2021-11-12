import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen";
import "./ExploreScreen/explore.css"
import {Route} from "react-router-dom";
import who from "../reducers/who";
import tweets from "../reducers/tweets"

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);

const Build2 = () => {
    return(
        <div>
            <Provider store={store}>
                <Route path={["/", "/a7/twitter","/a7/twitter/home"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a7/twitter/explore"
                       exact={true} component={ExploreScreen}/>
            </Provider>
        </div>
)
};
export default Build2;
