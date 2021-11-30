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

const Build = () => {
    return(
        <div>
            <Provider store={store}>
                <Route path={["/a9/twitter","/a9/twitter/home"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a9/twitter/explore"
                       exact={true} component={ExploreScreen}/>
            </Provider>
        </div>
)
};
export default Build;
