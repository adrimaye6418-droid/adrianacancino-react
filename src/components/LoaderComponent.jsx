import React from "react";
import { Spinner } from "react-bootstrap";

const   LoaderComponent = ({text}) => {
    return (
        <div style={{width:"100%", height: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Spinner animation="grow" variant="dark" />
                <span>{text}</span>
        </div>

    )
}   

export default LoaderComponent