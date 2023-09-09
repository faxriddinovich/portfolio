import React from 'react'
import './profile.css'
import './responsive-profile.css'

function Profile() {
  return (
    <section className='profile-section'>
      
      <div className='container'>
        <div className='row'>
            <div className='col-md-10 mx-auto'>
                <h1>Profile</h1>
                <p>
                    As a frontend developer, I have a passion for creating visually appealing and user-friendly websites. With a strong background in HTML, CSS, and JavaScript, I specialize in developing interactive and responsive interfaces that provide an optimal user experience.

                    I have always been fascinated by the intersection of design and technology, and have honed my skills to bridge that gap. Through my attention to detail and knack for problem-solving, I thrive on turning complex concepts into tangible, visually stunning websites.

                    My experience includes working with various frontend frameworks such as React and Angular, as well as utilizing tools like SASS and Bootstrap to streamline the development process. I am constantly keeping up with the latest industry trends and strive to implement best practices in all my projects.

                    In addition to my technical expertise, I possess effective communication and collaboration skills, enabling me to work seamlessly with designers, backend developers, and stakeholders. I excel in a fast-paced, dynamic environment and adapt quickly to new technologies and frameworks.

                    Overall, I am a dedicated and enthusiastic frontend developer committed to creating captivating and functional websites that leave a lasting impression on users.
                </p>
            </div>

            <div className='col-md-10 mx-auto my-3 information-box'>
                <label>Name:</label> <p>Asliddin Eliboev</p><b/>
                <label>Adress:</label> <p>Temir yol street,Pakhtachi region, Samarkand, Uzbekistan</p><b/>
                <label>Phone:</label> <p>+998 (90) - 505-5211</p><b/>
            </div>

            <div className='col-md-9 mx-auto experience-box'>
                <h1>Experience:</h1>
                <ul className='experience-list'>
                    <li className='experience-list-item'>
                        <div className='desc'>
                            <h4>
                                Mentor
                                <span> - New Star learning center</span>
                            </h4>
                            <p className='location'>
                                Narpay, Samarkand
                            </p>
                        </div>
                        <div className='year'>
                            <p>2021, 1 month</p>
                        </div>
                    </li>

                    <li className='experience-list-item'>
                        <div className='desc'>
                            <h4>
                                Developer
                                <span> - SSU (SamDU)</span>
                            </h4>
                            <p className='location'>
                                Samarkand city
                            </p>
                        </div>
                        <div className='year'>
                            <p>2023 - Present</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      
    </section>
  )
}

export default Profile
