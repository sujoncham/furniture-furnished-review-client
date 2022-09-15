import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const blogQuote = async () => {
            const res = await fetch('http://localhost:5000/blog');
            const data = await res.json();
            setBlogs(data);
        }
        blogQuote();
    }, [])

    return (
        <div className='container mt-5 mb-5'>
            <h1>Blogs {blogs.length}</h1>

           <div className='row'>
            {
                blogs.map(blog => <div key={blog._id} blog={blog} className='col-md-4 mb-3'>
                    <div style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'}} className='p-2'>
                        <img style={{height: '220px'}} className='w-100 rounded' src={blog.img} alt="" />
                        <div style={{height:'180px'}}>
                            <h5 className='mt-2'>{blog.title}</h5>
                            <span style={{color:'#66f', fontSize:'12px'}} >posted by admin, {blog.published} on {blog.lastTime} ago</span>
                            <p>{blog.description.slice(0, 120)}</p>
                        </div>
                
                        <div>
                            <button className='btn btn-warning'>see details</button>
                        </div>
                    </div>
                </div>)
            }
           
    
           </div>
        </div>
    );
};

export default Blogs;