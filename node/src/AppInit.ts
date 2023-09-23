import express, { Application } from "express";


class AppInit {
    public port:number;
    private app: Application;

    constructor(applicationInit:{port:number}) {
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