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
                blogs.map(blog => <div key={blog._id} blog={blog} className='col-md-4'>
                    <img className='w-100 h-50' src={blog.img} alt="" />
                <h5>{blog.title}</h5>
                <span style={{color:'#66f', fontSize:'12px'}} >Posted by admin, {blog.published} on {blog.lastTime} ago</span>
                <p>{blog.description.slice(0, 120)}</p>
                
                <div>
                    <button className='btn btn-warning'>see details</button>
                </div>
            </div>)
            }
           
    
           </div>
        </div>
    );
};

export default Blogs;