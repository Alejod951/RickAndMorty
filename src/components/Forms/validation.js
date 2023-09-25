const validator = (input)=>{
    const errors={}
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(input.username)) {
      errors.username = "no es un correo valido"
      
    }

    if(input.password.length < 1){
        errors.username = "debe tener + de 8 digitos"
    }
    return errors;

}
export default validator
