/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import '../css/style.css';


export default function App() {
    let history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit (({firstName, lastName, age,motto}) => {
        if(firstName!==0 && lastName !==0 && age!==0 && motto!==0){
            alert(`You are submitting the data (${firstName} ${lastName} ${age})`);
            history.push({pathname: "/homepage", state:{f:firstName, l:lastName , a:age , m:motto}});
        }
    });
    return (
    <div>
        <div className = "h1"><h1><a className= "h1_User">User</a> <a className= "h1_Registration">Registration</a></h1></div>
            <div className = "Limiter">
                <div className="container">
                    <div className = "Wrap_Container">
                    <form>
                        <div className= "BORDER_Header"></div>
                        <span className = "label">First Name</span><br/>
                        <input placeholder = "First Name" name="firstName" ref={register({ required: true, maxLength: 20 })} />
                        <span className = "label">Last Name</span><br/>
                        <input placeholder = "Last Name" name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i , required:true})} />
                        <span className = "label">Age</span><br/>
                        <input placeholder = "Age" name="age" type="number" ref={register({ min: 18, max: 99, required:true })} />
                        <textarea placeholder = "Your motto in life.." name = "motto" className="textarea" type="textarea" ref={register({required:true})}/>
                        <button className="btn" type="button" onClick = {onSubmit}><span>SIGN UP</span></button>
                    </form>
                    </div>
                </div>
            </div>
    </div>
    );   
}

