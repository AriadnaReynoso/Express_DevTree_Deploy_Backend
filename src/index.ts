import colors from 'colors'
import app from "./server";
import getPort from 'get-port';

const port = process.env.port || 4000 || 3000 

/* (async () => {
    const port = await getPort();  // Obtiene un puerto libre automáticamente
    app.listen(port, () => {
        console.log(colors.magenta.italic("Servidor funcionando en el puerto:"), port);
    });
  })(); */

app.listen(port, ()=>{
    console.log(colors.magenta.italic("Servidor funcionando en el puerto:"), port);
})
