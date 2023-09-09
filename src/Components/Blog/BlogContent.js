import React from 'react'
import './blog-content.css'
import './responsive-blog.css'

function BlogContent() {
  return (
    <section className='blog'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 my-4'>
                <p className='text-center portfolio'>Blog</p>
                <h1 className='text-center portfolio-title'>Read my blog!</h1>
            </div>

            <div className='col-md-12'>
                <div className='blog-box my-4'>
                    <div className='blog-desc-box'>
                        <h2 className='portfolio-title'>Here you can see my YouTube chanel</h2>
                        <p>There I post a lot of programming tutorials!</p>
                        <a href='https://www.youtube.com/channel/UC5Bbfvjb09gIPhKneSHXyEA' target='_blank'>Go to the chanel</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default BlogContent
