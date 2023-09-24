import mongoose, {Schema, Document, Model} from "mongoose"
import { PostsInterface, Post } from "./PostsInterface"


class PostsService {
    private singlePostSchema:Schema;
    private postsSchema: Schema;
    private model:Model<PostsInterface>;

    constructor() {
        this.singlePostSchema = new Schema({
            slug: {type: String, required: true},
            postNumber: {type: Number, required: true},
            post: {type: String, required: true},
            category: {type: String, required: true},
            styling: {type: Object, required: true},
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now },
        })

        this.postsSchema = new Schema({
            Posts: {
                type: Map,
                of: this.singlePostSchema,
            },
        })

        this.model = mongoose.model<PostsInterface>('Post', this.postsSchema);
    }

    async createPost(data: Post) : Promise<PostsInterface> {
        //there is ONE postsDocument which has all the posts stored as an object of objects
        let postsDocument = await this.model.findOne();
        
        // If no IPosts document exists, create a new one
        if (!postsDocument) {
            postsDocument = new this.model({ Posts: new Map() });
        }

        //mutate slug and data - add post number, create new object for storage
        const mutatedSlug = `${data.slug}-${postsDocument?.Posts.size}`
        const mutatedData = {...data, postNumber:postsDocument?.Posts.size, slug: mutatedSlug}

        // Set the new post in the Posts Map and save
        postsDocument.Posts.set(mutatedSlug, mutatedData);
        const savedDocument = await postsDocument.save();

        if (savedDocument) {
            return savedDocument;
        } else {
            throw new Error('MONGODB_SAVE_ERR');
        }
        
        
    }
    
}

export default PostsService;