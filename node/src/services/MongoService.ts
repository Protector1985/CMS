require('dotenv').config();
import mongoose, {ConnectOptions} from "mongoose";

class MongoService {

    constructor() {
        this.connectDatabase()
    }

    async connectDatabase(): Promise<void> {
       
        try {
            const dbUri = process.env.DB
            
            if(!dbUri) {
                throw new Error("DB URI has to be provided")
            }
            
            mongoose.connection.on('connected', () => {
                console.log('Database Connected');
            });

            mongoose.connection.on('disconnected', () => {
                console.log('Database connection lost');
            });
            mongoose.connection.on("error", () =>{
                console.error("Error connecting to db")
            })
            
            await mongoose.connect(process.env.DB as any)
            
        } catch(err) {
            throw err
           
        }
        
    }
}

export default MongoService;