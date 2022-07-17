import React,{useState,useEffect} from 'react';
import { validata } from './validata';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./SignUp.module.css"
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [data,setdata] = useState({
        name:"",
        email:"",
        password:"",    
        confirmPassword:"",
        isAccepted:false,
    })
    const [errors,seterrors] = useState({});
    const [touched,settouced] = useState({});

    useEffect(()=>{
        seterrors(validata(data,"signup"))
    },[data,touched])

    const changehandler = (event) => {
        if (event.target.name==="isAccepted"){
            setdata({...data,[event.target.name]:event.target.checked})
        }else {
            setdata({...data,[event.target.name]:event.target.value})
        }
    }
    const focushandler = event => {
        settouced({...touched,[event.target.name]:true})
    }

    const submithandler = event => {
        event.preventDefault()
        if (!Object.keys(errors).length){
            notify("You Signed Up succesfully!","succes")
        } else {
            notify("Invalid data!","error")
            settouced({
                name:true,
                email:true,
                password:true,    
                confirmPassword:true,
                isAccepted:true,    
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submithandler} className={styles.formContainer}>
                    <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.formField}>
                    <label>Username</label>
                    <input 
                        className={(errors.name && touched.name)?styles.uncompleted:styles.formInput}
                        type="text" 
                        name='name' 
                        value={data.name} 
                        onChange={changehandler} 
                        onFocus={focushandler}
                        />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input 
                        className={(errors.confirmPassword && touched.confirmPassword)?styles.uncompleted:styles.formInput}
                        type="password" 
                        name='confirmPassword' 
                        value={data.confirmPassword} 
                        onChange={changehandler} 
                        onFocus={focushandler}
                        />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I Accept terms of privacy policy</label>
                        <input 
                            type="checkbox" 
                            name='isAccepted' 
                            value={data.isAccepted} 
                            onChange={changehandler} 
                            onFocus={focushandler}
                            />
                    </div>
                        {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/login" className={styles.linkS}>Login</Link>
                    <button>Signup</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;