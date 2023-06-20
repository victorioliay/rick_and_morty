import style from "./Form.module.css"
import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({ login }) => {
    
    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            }) 
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div className={style.formContainer}>
            <div className={style.title}>
                <h1>Fill Your Credentials</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={style.user}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={userData.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className={style.user}>
                    <label htmlFor=" password">Password</label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <button className={style.submit}>Submit</button>
                </div>
            </form> 
        </div>
    )
}

export default Form;