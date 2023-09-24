
export interface Post {
    identifier:string,
    post: string,
    category: string,
    styling: object,
    createdAt: Date,
    updatedAt: Date,
}

export interface PostsInterface extends Document {
    Posts: Map<string, Post>;
}