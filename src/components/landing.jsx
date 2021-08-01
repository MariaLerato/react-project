import React from 'react'

const Landing = () => {
  return (
    <div className='home'>
      <div className='left-container'>
        <h1>Welcome To The Future</h1>

        <p>Coding is inevitably our new tomorrow. Machine learning has become a fast approaching mandatory thing to do. And this, is just the beginning.
        </p>
        <i><b>Greater things are yet to come.</b></i>
      </div>
      <form className='right-container'>
        <fieldset>
          <ul>
            <h2>Register Your Details:</h2>
            <li>
              <label>
                FullName:
                <input type='text' placeholder='Enter name'></input>
              </label>
            </li>
            <li>
              <label>
                Surname:
                <input type='text' placeholder='Enter Surname'></input>
              </label>
            </li>
            <li>
              <label>
                Password:
                <input type='password' placeholder='Create password'></input>
              </label>
            </li>
            <li>
              <label>
              <br />
                <input type='reset'></input>
                <input type='submit' onclick='validate'></input>
              </label>
            </li>
          </ul>
        </fieldset>
      </form>

    </div>
  )
}
export default Landing
