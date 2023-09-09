import React, { useEffect, useState } from 'react'
import { colRef } from '../../Firebase/firebase'
import { getDocs } from 'firebase/firestore'
import './projects.css'
import './responsive-projects.css'

function Projects() {

  const [projects,setProjects] = useState([])

  useEffect(()=>{
    let array = []
    getDocs(colRef).then(snapshot => snapshot.docs.forEach(doc=>{
      array.push({...doc.data(),id:doc.id})
      setProjects(array)
    })).catch(error=>console.log(error))
  },[])

  return (
    <section className='porjects-section'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 my-4'>
              <p className='text-center portfolio'>Portfolio</p>
              <h1 className='text-center portfolio-title'>Checkout a few of my works.</h1>
            </div>
            <div className='col-md-12'>
              <ul className='projects-list'>
                {projects.map(item=><li className='projects-list-item' key={item.id}>
                    <div className='project-list-img-box'>
                      <img src={item.imgurl} alt='Projectimg'/>
                    </div>
                    <div className='project-list-desc-box'>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <div className='link-box'>
                        <a href={item.codelink} target='_blank'>Code</a>
                        <a href={item.demolink} target='_blank'>Demo</a>
                      </div>
                    </div>
                </li>)}
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
