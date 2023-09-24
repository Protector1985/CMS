import express, { Application, application } from "express";
import MongoService from "./services/MongoService";
import PostController from "./controllers/Posts/PostController";

class AppInit {
    public port:number;
    public app: Application;

    constructor(applicationInit:{port:number, services:[MongoService], controllers:any, middlewares:any}) {
        this.port = applicationInit.port
        this.app = express()
        this.initMiddlewares(applicationInit.middlewares)
        this.routes(applicationInit.controllers)

    }

    private initMiddlewares(middlewares:{forEach:(arg0:(middleware:any) => void) => void}) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        })
    }

    private routes(controllers: {forEach:(arg0: (controller:any) => void) => void}) {
        controllers.forEach((controller) => {
            this.app.use("/cms", controller.router)
        })
    }

   

    public runServer() {
        this.app.listen(this.port, () => {
            console.log(`Server running on ${this.port}`)
        })
    }
}

export default AppInit;