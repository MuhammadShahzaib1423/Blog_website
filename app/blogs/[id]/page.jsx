'use client';
import { assets, blog_data } from '@/Assets/assets';
import React, { useEffect, useState, use } from 'react';
import Image from 'next/image';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

import Link from 'next/link';

const page = ({ params: paramsPromise }) => {
    const params = use(paramsPromise); 
    const [data, setData] = useState(null);
    const fetchblogdata = () => {
            const blogItem = blog_data.find(item => item.id === Number(params.id));
            if (blogItem) {
                setData(blogItem);
                console.log(blogItem);
            }
        };

    useEffect(() => {
        

        fetchblogdata();
    }, [params.id]);

    return (data ? <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
     <div className='flex justify-between items-center'>
        <Link href='/' >
                 <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
                 </Link>
                 <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3  sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] cursor-[pointer] '>Get Started <Image src={assets.arrow}/> </button>
             </div> 
     
            <div className='text-center my-24'>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60} alt=''/>
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto '>{data.author}</p>
            </div>
            
                   </div>
                   <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                    <Image src={data.image} alt=''  width={1200} height={680} className='border-4 border-white'/>
                    <h1 className='my-8 text-[26px] font-semibold '> Introduction: </h1>
                    <p>{data.description}</p>
                    <h3 className='my-5 text-[18px] font-semibold'> Step 1: Self-Reflection and Goal </h3>
<p className='my-3'>
    Before setting any goal, it's crucial to take time for self-reflection. Understand your strengths, weaknesses, and aspirations.  
    Identify what truly matters to you and what you want to achieve in the short and long term.  
    Writing down your thoughts and ambitions can help you gain clarity and motivation.  
</p>
<h3 className='my-5 text-[18px] font-semibold'> Step 2: Create a Clear Plan </h3>
<p className='my-3'>
    Once you have a clear goal in mind, it's time to break it down into actionable steps.  
    Define specific, measurable, and realistic objectives that will help you move forward.  
    Setting deadlines and creating a structured plan will keep you accountable and motivated.  
</p>

<h3 className='my-5 text-[18px] font-semibold'> Step 3: Take Consistent Action </h3>
<p className='my-3'>
    A plan is only effective if you take action. Stay disciplined and work towards your goal consistently.  
    Overcome challenges by staying adaptable and learning from setbacks.  
    Celebrate small achievements along the way to maintain motivation and keep progressing.  
</p>
<h3 className='my-5 text-[18px] font-semibold'> Step 4: Track Progress and Adjust </h3>
<p className='my-3'>
    Regularly review your progress to see how far you’ve come and where you need improvement.  
    Keep a journal or use productivity tools to track milestones and setbacks.  
    If necessary, adjust your plan to stay on course and overcome challenges.  
</p>

<h3 className='my-5 text-[18px] font-semibold'> Step 5: Stay Motivated and Keep Learning </h3>
<p className='my-3'>
    Staying motivated is key to long-term success. Surround yourself with positive influences,  
    seek continuous learning, and stay committed to personal growth.  
    Embrace challenges as opportunities to learn and refine your approach.  
</p>
<h3 className='my-5 text-[18px] font-semibold'> Conclusion </h3>
<p className='my-3'>
    Achieving success is a journey that requires self-reflection, planning, consistency, and adaptability.  
    By setting clear goals, creating a structured plan, tracking progress, and staying motivated,  
    you can turn your aspirations into reality. Remember, growth is a continuous process,  
    so embrace every challenge as an opportunity to learn and improve. Stay committed,  
    stay focused, and keep moving forward toward your dreams.  
</p>
<div className='my-24 '>
    <p className='text-black font font-semibold my-4'>Share this article on social media</p>
    <div className='flex'>
        <Image src={assets.facebook_icon} width={50} alt=''/>
        <Image src={assets.twitter_icon} width={50} alt=''/>
        <Image src={assets.googleplus_icon} width={50} alt=''/>

    </div>
</div>

     </div>
     <Footer/>
        </> :<></>
    );
};

export default page;
