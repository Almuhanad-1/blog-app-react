import React from 'react'
import BlogPreview from '../Components/BlogPreview'
import Sidebar from '../Components/Sidebar'

const BlogListPage = () => {
    return (
        <div className='d-flex flex-column' >
            <header className='header py-5 px-5 mb-5  bg-light' style={{ width: "100%" }}>
                <h1>Our Latest Blogs</h1>
            </header>
            <div className='d-flex justify-content-center'>
                <main className='d-flex justify-content-between' style={{ width: "70%" }}>
                    <BlogPreview />
                </main>
                <Sidebar />
            </div>
        </div>
    )
}

export default BlogListPage