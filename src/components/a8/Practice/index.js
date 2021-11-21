import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";

const Practice3 = () => {
    return(
        <>
            <h1>Practice A8</h1>
            <Link to="/a8/twitter/home">
                Build
            </Link> |
            <Link to="/a6/others">
                Other Assignments
            </Link>
            <APIExamples/>
            <ReduxExamples/>
        </>
    )
};


export default Practice3;