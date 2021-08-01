import React from 'react'
import './stylesheet.css'
import 'font-awesome/css/font-awesome.min.css'
const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-wrapper'>
        <div className='first-part'>
          <div className='logo'>
            <i className='fa fa-user fa-5x'></i>
          </div>
          <div className='name-summary'>
            <h1>Maria Fenyane</h1>
            <p className='summary'>
              Hi, I am Maria Fenyane  and I am a software developer.
            </p>
          </div>
        </div>
        <h2>CONTACT ME</h2>
      </div>
      
      <div className='email-wrapper'>
        <div className='email-logo'>
        <i className="fa fa-envelope fa-2x"></i>
        </div>
        <div className='email'>
          <h2>Email</h2>
          fenyane02@gmail.com
        </div>
      </div>
      <div className='facebook-wrapper'>
        <div className='facebook-logo'>
        <i class="fa fa-facebook fa-3x"></i>
        </div>
         <div className='facebook'>
           <h2>Facebook</h2>
            Maria Lerato
         </div>
      </div>
      <div className='linkedin-wrapper'>
        <div className='linkedin-logo'>
        <i class="fa fa-linkedin fa-3x"></i>
        </div>
         <div className='linkedin'>
           <h2>Linkedin</h2>
            Maria Fenyane
         </div>
      </div>
    </div>
  )
}

export default Profile
