import React from "react";
import {Link} from "react-router-dom";
import Movies from "./Movies";

const Practice = () => {
    return(
        <>
            <h1>Practice A9</h1>
            <Link to="/a9/twitter/home">
                A9 Build
            </Link> |
            <Link to="/a8/practice">
                A8 Practice
            </Link> |
            <Link to="/a8/twitter/home">
                A8 Build
            </Link> |
            <Link to="/a7/practice">
                A7 Practice
            </Link> |
            <Link to="/a7/twitter">
                A7 Build
            </Link> |
            <Link to="/a6/practice">
                A6 Practice
            </Link> |
            <Link to="/a6/build">
                A6 Build
            </Link> |
            <Link to="/a6/others">
                Other Assignments
            </Link>
            <Movies/>
        </>
    )
};


export default Practice;