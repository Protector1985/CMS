import express, { Application } from "express";
import MongoService from "./services/MongoService";

class AppInit {
    public port:number;
    public app: Application;

    constructor(applicationInit:{port:number, services:[MongoService]}) {
        this.port = applicationInit.port
        this.app = express()
        
    }

   

    public runServer() {
        this.app.listen(this.port, () => {
            console.log(`Server running on ${this.port}`)
        })
    }
}

export default AppInit;