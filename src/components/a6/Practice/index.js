import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return(
        <>
            <h1>Practice A6</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/build">
                Build
            </Link> |
            <Link to="/a6/others">
                Other Assignments
            </Link>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoItem/>
            <TodoList/>
        </>
    )
};


export default Practice;