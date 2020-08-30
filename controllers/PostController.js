const Post = require("../models/Post")
const createPost = async (req, res, next) => {
    const { title, body, auther } = req.body;
    const newPost = new Post({ title, body, auther });
    try {
        await newPost.save();
        res.send({
            message: "Yeni bir post başalıpost edildi",
            post: newPost
        });
    } catch (err) {
        const error = new Error("Post Oluşturulamadı error var");
        error.error = err;
        next(error)
    }
}

const getAllPosts = async (req, res, next)=>{
    try {
        const posts= await Post.find({});
        res.send({message:"Tüm Postlar başarılı olarak get ile getirildi", posts})
    } catch(err){
        const error = new Error("Bir hata oluştu")
        error.error=err;
        next(error)
    }
}

const getSinglePost = async (req, res, next)=>{
    try {
        const post= await Post.findOne({_id:req.body.id});
        res.send({message:`${req.body.id} li post başalı olarak get ile getirildi`, post})
    } catch(err){
        const error = new Error("Bir hata oluştu")
        error.error=err;
        next(error)
    }
}
module.exports={getAllPosts,getSinglePost,createPost}