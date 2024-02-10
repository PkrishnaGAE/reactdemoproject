import React, {useState} from 'react';
import person_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import Button from 'react-bootstrap/Button';
import AdminDashboard from '../admin';
import { useNavigate } from 'react-router-dom';

const Content = () => {
  const navigate = useNavigate()

  return (
    <div className='container'>
      <main >
        <br></br>
        <div>
          <h2 className='text'>Let's Sign You In</h2>
          <br></br>
          <div>
            <input src={person_icon} className='text-input' type="text" placeholder='Username' />

          </div>
          <br />
          <div>
            <input src={password_icon} className='text-input2' type="passwordt" placeholder='Password' />
          </div>
          <br></br>
          <div className='check-box'>
            Rembember me
            <input type='checkbox' />

            <div className='forget-password'>
              <br></br>
              <Button variant="outline-secondary">Forget password</Button>
            </div>

            <br />
            <div className='button-color'>
              <button onClick={() => navigate("/admin")} className='button-color' variant='outline-primary' size="lg">Log In</button>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Content;