import mongoose, {Schema, Document, Model} from "mongoose"
import { PostsInterface, Post } from "./PostsInterface"


class PostsSchema {
    private singlePostSchema:Schema;
    private postsSchema: Schema;
    private model:Model<PostsInterface>;

    constructor() {
        this.singlePostSchema = new Schema({
            identifier: {type: String, required: true},
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

        postsDocument.Posts.set(data.identifier, data)

        return postsDocument.save();
    }
    
}

export default PostsSchema;