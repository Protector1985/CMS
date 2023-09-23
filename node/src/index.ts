require('dotenv').config();
import AppInit from "./AppInit";

const port:number = Number(process.env.PORT) || 5000;

const appInit = new AppInit({
    port
})

appInit.runServer();