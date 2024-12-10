'use client';

import { useParams } from 'next/navigation';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import img from '../../../public/blogimg.jpg'
import SampleBlogs from '@/app/config/sampleblogs';


function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  const blogItem = SampleBlogs.find(item => item.slug === slug);
  console.log(blogItem);
  
  
  return (
    <MaxWidthWrapper className=''>
      <div className=''>
        <h1 className='text-2xl font-bold text-center mb-5'>{blogItem?.title}</h1>
        <Image alt='blog-image' className='rounded-lg my-5 mx-auto' width={500} height={500} src={blogItem?.imageUrl ? blogItem.imageUrl : img}></Image>
        <div className="max-w-[700px] my-0 mx-auto">
          <p className='my-3 font-bold '>{blogItem?.description}</p>
          <p className='text-justify'>{blogItem?.content}</p>
        </div>
        
      </div>
    </MaxWidthWrapper>
    
  )
}

export default BlogPost