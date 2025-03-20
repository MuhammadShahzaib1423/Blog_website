import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
import {writeFile} from "fs/promises";
import { title } from "process";

const { NextResponse } = require("next/server")

const LoadDB= async()=>{
await ConnectDB();
}

LoadDB();

//api endpoint for get all blogs
export async function GET(request){
 

    const blogId = request.nextUrl.searchParams.get('id');
    if(blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json({blog});
    }
    else{
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs});
    }
 
  
}


// API endpoint for uploading blogs
export async function POST(request){
 const formData= await request.formData();
 const timestamp = Date.now(); 
 const image = formData.get ('image');
 const imageByteData = await image.arrayBuffer();
const imageBuffer = Buffer.from(imageByteData);
const path = `./public/${timestamp}_${image.name}`;
await writeFile(path,imageBuffer);
const imgUrl=`/${timestamp}_${image.name}`;   

const blogData={
    title:`${formData.get('title')}`,
    description:`${formData.get('description')}`,
    category:`${formData.get('category')}`,
    author:`${formData.get('author')}`,
    image:`${imgUrl}`,
    author_image:`${formData.get('author_image')}`,
    
}
await BlogModel.create(blogData);
console.log("Blog Saved")  

return NextResponse.json({success:true, msg : "Blog Added"})
}
