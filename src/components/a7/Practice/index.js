import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";

const Practice2 = () => {
    return(
        <>
            <h1>Practice A7</h1>
            <Link to="/a7/twitter">
                Build
            </Link> |
            <Link to="/a6/others">
                Other Assignments
            </Link>
            <ReduxExamples/>
        </>
    )
};


export default Practice2;