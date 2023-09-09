import React from 'react'
import './home.css'
import './responsive-home.css'

function MainSection() {
  return (
    <section className='main-section'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h2 className='text-center'>I'm a </h2>
                <h1 className='text-center job-text mt-4'>Frontend developer.</h1>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection
