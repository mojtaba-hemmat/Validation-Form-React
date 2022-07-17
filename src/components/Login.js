import React,{useState,useEffect} from 'react';
import { validata } from './validata';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./SignUp.module.css"
import { Link } from 'react-router-dom';

const Login = () => {
    const [data,setdata] = useState({
        email:"",
        password:"",    
    })
    const [errors,seterrors] = useState({});
    const [touched,settouced] = useState({});

    useEffect(()=>{
        seterrors(validata(data,"login"))
    },[data,touched])

    const changehandler = (event) => {
            setdata({...data,[event.target.name]:event.target.value})
    }
    const focushandler = event => {
        settouced({...touched,[event.target.name]:true})
    }

    const submithandler = event => {
        event.preventDefault()
        if (!Object.keys(errors).length){
            notify("You Loged in succesfully!","succes")
        } else {
            notify("Invalid data!","error")
            settouced({
                email:true,
                password:true,    
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submithandler} className={styles.formContainer}>
                    <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input 
                        className={(errors.email && touched.email)?styles.uncompleted:styles.formInput}
                        type="email" 
                        name='email' 
                        value={data.email} 
                        onChange={changehandler} 
                        onFocus={focushandler}
                        />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input 
                        className={(errors.password && touched.password)?styles.uncompleted:styles.formInput}
                        type="password" 
                        name='password' 
                        value={data.password} 
                        onChange={changehandler} 
                        onFocus={focushandler}
                        />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div> 
                <div className={styles.formButtons}>
                    <label>You don't have an account?</label>
                    <Link className={styles.link} to="/signup"> SignUp</Link>
                    <button>Login</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Login;