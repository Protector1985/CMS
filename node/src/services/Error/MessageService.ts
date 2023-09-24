

class MessageService {
    
    
    errorMessage(errorMessage:string) {
        if (/Mongoose maps only support string keys, got undefined/.test(errorMessage)) {
            return "Slug is missing";
        } else if (/Post validation failed: Posts\..+\.post: Path `post` is required\./.test(errorMessage)) {
            return "Post is missing";
        } else if (/Post validation failed: Posts\..+\.category: Path `category` is required\./.test(errorMessage)) {
            return "Category is missing" ;
        } else if("MONGODB_SAVE_ERR") {
            return "Error saving to DB"
        } else {
            return `An unexpected error occurred: ${errorMessage}`;
        }
    }

}

export default MessageService;