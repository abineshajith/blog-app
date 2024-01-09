import connectMongoose from "../../../../utils/connectmongo";
import PostModel from "../../../../models/postModels";

export async function GET(){
    try {
        await connectMongoose();
        const postDatas= await PostModel.find({})
        return Response.json(postDatas)
    } catch (error) {
        return Response.json({
            message:error.message
        })
    }
  
}