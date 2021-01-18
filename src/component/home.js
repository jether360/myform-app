/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { useLocation } from "react-router-dom";


function Mainpage(props){
    const location = useLocation();
    console.log(location.pathname);
    console.log(location.state.f);
    console.log(location.state.l);
    console.log(location.state.a);
    console.log(location.state.m);
    return(
        <div>
            <h1 className = "Data">Hi im "{props.location.state.f}" "{props.location.state.l}" "{props.location.state.a}" years old, my motto in life is "{props.location.state.m}"</h1>   
        </div>
    );
}
export default Mainpage;