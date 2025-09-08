import { CorsOptions } from "cors"

export const corsConfig : CorsOptions = {
    origin: function (origin, callback) {
        const whiteList = [process.env.FRONTEND_URL]
        //permite que el api se comunique con el frontend
        if (process.argv[2] == '--api') {
            whiteList.push(undefined)
        }
        if (whiteList.includes(origin)) {
            callback(null, true)
        }else{
            callback(new Error('Error de CORS'))
        }
    }
}