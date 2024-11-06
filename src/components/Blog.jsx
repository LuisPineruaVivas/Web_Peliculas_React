import React, {useState} from 'react'
import './blog.css'
import BlogCard from './blogComponents/BlogCard';
import blogData from '../data/blogData';

function Blog() {
  const [blogs] = useState(blogData);
  return (
    <section id='blogs' className='blogs'>
      <div className="container-fluid">
        <div className="row">
          <h4 className='section-title'>Reseñas</h4>
        </div>
        <div className="row mt-5">
            {blogs && 
              blogs.length > 0 && blogs.map(blog => 
                <BlogCard key={blog._id} blog={blog}/>
              )
            }
        </div>
      </div>
    </section>
  )
}

export default Blog