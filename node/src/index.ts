require('dotenv').config();
import AppInit from "./AppInit";
import MongoService from './services/MongoService'

const port: number = Number(process.env.PORT) || 5000;


try {
    const appInit = new AppInit({
        port,
        services: [new MongoService()]
    })
    
    appInit.runServer();

} catch(err:any) {
    console.log(err.message)
}
