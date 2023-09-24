require('dotenv').config();
import AppInit from "./AppInit";
import * as express from 'express';
import PostController from "./controllers/Posts/PostController";
import MongoService from './services/MongoService'

const port: number = Number(process.env.PORT) || 5000;

try {
    const appInit = new AppInit({
        port,
        services: [new MongoService()],
        controllers: [new PostController],
        middlewares: [express.json()]
    })
    
    appInit.runServer();

} catch(err:any) {
    console.error(err.message)
}
