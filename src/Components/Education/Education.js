import React from 'react'

function Education() {
  return (
    <section className='education'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-9 mx-auto'>
                    <div className='education-box'>
                    <h1>Education</h1>
                      <ul className='education-box_list'>
                        <li className='education-box_list_item'>
                          <div className='desc'>
                            <h4>
                              Bachelor of Computer Science
                              <span> - SamTUIT</span>
                            </h4>
                            <p className='location'>
                              Uzbekistan - Samarkand
                            </p>
                          </div>

                          <div className='year'>
                            <p>
                              2020 - present
                            </p>
                          </div>
                        </li>

                        <li className='education-box_list_item'>
                          <div className='desc'>
                            <h4>
                              Frontend development
                              <span> - PDP IT Academy</span>
                            </h4>
                            <p className='location'>
                              Online lessons
                            </p>
                          </div>

                          <div className='year'>
                            <p>
                              2021 - 2022
                            </p>
                          </div>
                        </li>

                        <li className='education-box_list_item'>
                          <div className='desc'>
                            <h4>
                              Frontend self based program
                              <span> - EPAM Systems</span>
                            </h4>
                            <p className='location'>
                              Ukraine
                            </p>
                          </div>

                          <div className='year'>
                            <p>
                              2023, 3 months
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default Education
