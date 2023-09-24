import express, {Request, Response} from 'express'
import PostsService from '../../services/Posts/PostService';
import MessageService from '../../services/Error/MessageService';


class PostController  {
    public router = express.Router();
    public basePath = "/posts"
    private dbService: PostsService
    private messageService: MessageService

    constructor(ps:PostsService = new PostsService(), msgSrv: MessageService = new MessageService()) {
        this.createPost = this.createPost.bind(this)
        this.dbService = ps
        this.messageService = msgSrv
        this.initRoutes()
    }

    private initRoutes() {
        this.router.post(this.basePath + "/", this.createPost )
    }

    async createPost(req: Request, res: Response):Promise<void> {
        try {
            const postCreation = await this.dbService.createPost(req.body)
            res.json({
                success: true,
                data: postCreation
            })
        } catch(err) {
            if(err instanceof Error) {
                res.json({
                    success:false,
                    msg: this.messageService.errorMessage(err?.message)
                })
                
            }
        
        }
        
        
    }
}

export default PostController