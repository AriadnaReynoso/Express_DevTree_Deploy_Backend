import bcrypt from "bcrypt";

export const hashPassword = async (password:string) =>{
    const salt = await bcrypt.genSalt(10) // genera cadena de caracteres aleatores qe toma 0 rondas
    //las rondas son el numero de veces que se aplica el hash
    return await bcrypt.hash(password, salt)
}

export const checkPassword = async (enteredPassword:string, hash:string)=>{
    return await bcrypt.compare(enteredPassword, hash)
}