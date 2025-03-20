"use client";

import { blog_data } from '@/Assets/assets'
import React from 'react'
import Blogitem from './Blogitem'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Bloglist = () => {
            const [menu,setMenu] = useState('All')
            
const [blogs, setBlogs] = useState([]);

const fetchBlogs=async()=>{
 const response =await axios.get('/api/blog');    
  setBlogs(response.data.blogs);
  console.log (response.data.blogs);

}

useEffect(()=>{
  fetchBlogs();
},[])



  return (
    <div>
      <div className='flex justify-center gap-6 my-10'> {/* Removed cursor here */}
  <button 
    onClick={() => setMenu('All')} 
    className={`py-1 px-4 rounded-sm ${menu === "All" ? 'bg-black text-white cursor-pointer' : 'cursor-pointer'}`}
  >
    All
  </button>
  <button 
    onClick={() => setMenu('Technology')} 
    className={`py-1 px-4 rounded-sm ${menu === "Technology" ? 'bg-black text-white cursor-pointer' : 'cursor-pointer'}`}
  >
    Technology
  </button>
  <button 
    onClick={() => setMenu('Startup')} 
    className={`py-1 px-4 rounded-sm ${menu === "Startup" ? 'bg-black text-white cursor-pointer' : 'cursor-pointer'}`}
  >
    Startup
  </button>
  <button 
    onClick={() => setMenu('LifeStyle')} 
    className={`py-1 px-4 rounded-sm ${menu === "LifeStyle" ? 'bg-black text-white cursor-pointer' : 'cursor-pointer'}`}
  >
    LifeStyle
  </button>
</div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {
            blogs.filter((item)=>menu==="All"?true:item.category===menu ).map((item,index)=>{
                return <Blogitem  key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })
        }
      </div>
    </div>
  )
}

export default Bloglist
