import React from 'react'
import './stylesheet.css';
import 'font-awesome/css/font-awesome.min.css'
const About = () => {
  return (
    <div className='about-container'>
      <div className='left'>
        <img src='me.jpg' alt='me' />

        <h1>Maria   <br />Fenyane </h1>
        <h3>Software Developer</h3>
        <br />
        <h4>INFO</h4>
        <i className='fa fa-user-circle fa-2x'> Name </i>
        <br />
        <p>Maria Fenyane</p>  <br />
        <i class='fa fa-map-marker fa-2x'> Address</i><br />
        <p>287 Zone Q<br />
          Lebowakgomo,Limpopo<br />
          South Africa<br />
        </p>
        <i className='fa fa-phone fa-alt fa-2x'> Phone </i><br />
        <p>  0793879978</p><br />
        <i className='fa fa-envelope fa-2x'>Email</i><br />
        <p> fenyane02@gmail.com</p><br />

        <h3>SOCIAL</h3>
        <i className='fa fa-linkedin fa-2x'>Linkedin</i>
        <p>mariafenyane.com</p>
        <i className='fa fa-facebook fa-2x'>Facebook</i>
        <p> Maria_Lerato</p>
      </div>
      <div className='right'>
        <div className='profile'>
          <i className="fa fa-user"></i><h3>PROFILE</h3>
        </div>
        <p className='AboutMe'>
          Enthusiastic IT Programmer with 6 months of experience in software development.Skilled in html5,css3 and javascript.Seeking to boost my accumulated knowledge about pro,
          so i can boost other companies with proven programming skills.Have knowledge of python programming language. Always looking to enhance my skills in programming languages.
        </p>
        <div className='work-exp'>
          <i className='fa fa-pencil'></i><h3>WORK EXPERIENCE</h3>
        </div>
        <div className='work'>
          <div className='left-work'>
            June 2021 - December 2021
          </div>
          <div className='right-work'>
            <h4>Software Developer Trainee</h4>
            <h5>  CodeTribe mlab South Africa</h5>
            <p className='work-detail'>
              Trained in creating web applications and mobile software development. Working with websites and creating web pages using JS,html5,css.Creating software using ReactJs
            </p>
          </div>

        </div>
        <div className='wrapper-edu'>
          <i className="fa fa-book"></i><h3>EDUCATION</h3>
        </div>
        <div className='Education'>
          <div className='left-Education'>
            2013-2017<br />
            Lebowakgomo
            <br /><br /><br />
            2018-2020
            Polokwane
          </div>
          <div className='right-Education'>
            <h5>Derek Kobe Senior Secondary School</h5>
            Grade 12 in Maths and Science
            <br />
            <h5>Capricorn Tvet College, Polokwane Campus</h5>
            NC(V) Level 4 in Information Technology And Computer Science
          </div>
        </div>
        <div className='wrapper-skills'>
          <i className='fa fa-arrow-circle-down'></i><h3>SKILLS AND EXPERIENCE</h3>
        </div>
        <br />
        <div className='skills_expertise'>
          <div className='skill'>
            <ul>
              <li> <i className='fa fa-css3'>CSS3</i></li>
              <li> <i className='fa fa-html5'>HTML5</i></li>
              <li> <i className='fa fa-file'>Ms Word</i></li>
              <li> <i className='fa fa-code'>JavaScript</i></li>
            </ul>
          </div>
          <div className='expertise'>
            <ul>
              <li>Flexibility</li>
              <li>Work in group</li>
              <li>Personality</li>
              <li>Ms Word</li>
              <li>Ms Excel</li>
              <li>Ms Access</li>

            </ul>
          </div>
        </div>
        <div className='hobby'>
          <h3>HOBBY & INTERESTS</h3>
          <ul>
            <i className="fa fa-book"></i>
            <i className="fa fa-microphone"></i>
            <i class="fa fa-tv"></i>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default About
