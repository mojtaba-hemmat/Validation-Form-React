export const validata = (data,type) => {
    const errors = {};
    
    if (!data.email.trim()){
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "invalid email"
    }else {
        delete errors.email
    }

    if (!data.password.trim()){
        errors.password = "Password is required"
    }else if (data.password.length<6){
        errors.password = "Your Password is too short"
    }else {
        delete errors.password
    }

    if (type==="signup") {
        
        if (!data.name.trim()) {
            errors.name ="Username is required"
        } else if(data.name.length<6) {
            errors.name = "invalid username"
        }else {
            delete errors.name
        }
            
        if (!data.confirmPassword.trim()){
            errors.confirmPassword = "Confirm Password is required"
        }else if (data.confirmPassword!==data.password){
            errors.confirmPassword = "Password do not match"
        }else {
            delete errors.confirmPassword
        }

        if (!data.isAccepted){
            errors.isAccepted = "Accept our regulations"
        }else {
            delete errors.isAccepted
        }
    }
    return errors
}