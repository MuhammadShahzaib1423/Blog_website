'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Technology',
    author: 'Alex Doe'
  });

  const onchangehandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onsubmitHandler = async (e) => {
    e.preventDefault();
     
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('image', image);
  
    try {
      const response = await axios.post('/api/blog', formData);
  
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(false);
  
        // ✅ Reset form fields after successful submission
        setData({
          title: '',
          description: '',
          category: 'Technology',
          author: 'Alex Doe'
        });
        setImage(null);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div>
      <ToastContainer />
      <form onSubmit={onsubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl '>Upload Thumbnail</p>
        <label htmlFor="image">
          <Image 
            src={image ? URL.createObjectURL(image) : assets.upload_area} 
            width={140} height={70} 
            alt='' className='cursor-pointer' 
          />
        </label>
        <input 
          onChange={(e) => setImage(e.target.files[0])} 
          type="file" 
          id="image" 
          hidden 
          required 
        />

        <p className='text-xl mt-4'>Blog Title</p>
        <input 
          type="text" 
          name='title' 
          value={data.title} 
          onChange={onchangehandler} 
          className='w-full sm:w-[500px] mt-4 px-4 py-3 border' 
          placeholder='Type Here' 
          required 
        />

        <p className='text-xl mt-4'>Blog Description</p>
        <textarea 
          name='description' 
          value={data.description} 
          onChange={onchangehandler} 
          className='w-full sm:w-[500px] mt-4 px-4 py-3 border' 
          placeholder='Write Content Here' 
          rows={6} 
          required 
        />   

        <p className='text-xl mt-4'>Blog Category</p>  
        <select 
          name="category" 
          value={data.category}
          onChange={onchangehandler} 
          className='w-50 mt-4 px-4 py-3 border text-gray-500 cursor-pointer'
        >
          <option value="Technology">Technology</option>
          <option value="LifeStyle">LifeStyle</option>
          <option value="Startup">Startup</option>
        </select>
        <br />

        <button 
          type="submit" 
          className="mt-8 w-80 h-12 bg-black text-white cursor-pointer active:scale-110 transition-transform"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Page;
