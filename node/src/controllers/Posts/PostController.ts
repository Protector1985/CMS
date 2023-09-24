import express, {Request, Response} from 'express'


class PostController  {
    public router = express.Router();
    public basePath = "/posts"

    constructor() {
        this.router.post(this.basePath + "/", this.createPost )
    }

    async createPost(req: Request, res: Response):Promise<void> {
        console.log(req.body)
        
    }
}

export default PostController