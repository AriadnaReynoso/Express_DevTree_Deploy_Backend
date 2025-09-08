import type {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken';
import User, { IUser } from "../models/User";

//para mandar user tomando la interfaz de user sobre el request de express ya que no conoce esa propiedad
declare global {
    namespace Express{
        interface Request{
            user?:IUser
        }
    }
}

export const authenticate = async (req:Request, res:Response, next:NextFunction)=>{
    const bearer = req.headers.authorization

    if (!bearer || !bearer.startsWith('Bearer ')) {
        const error = new Error('No autorizado');
        res.status(401).json({error: error.message});
        return 

    }

    //para que tome la parte de la derecha del token despues del bearer y se le asigne a la constante token y lo de la izquierda se deja vac[io para que no tome nada
    /* const [, token] = bearer.split(' ') */
    const token = bearer.split(' ')[1]

    if (!token) {
        const error = new Error('No autorizado');
        res.status(401).json({error: error.message});
        return 
    }

    try {
        const result = jwt.verify(token, process.env.JWT_SECRET)
        //validar que result es un objeto y que tiene la propiedad id
        if (typeof result == 'object' && result.id) {
            const user = await User.findById(result.id).select('-password') //traer todo menos el password
            if (!user) {
                const error = new Error('El usuario no existe');
                res.status(404).json({error: error.message});
                return 
            }
            req.user = user
            next()
        }
    } catch (error) {
        res.status(500).json({error: 'Token no válido'});
        return

    }
}