import React from 'react'
import { Button} from 'react-bootstrap';
export const Login = () => {
  return (
    <div>
      <form>
      <p className='id'><input type='text' className='i-id' placeholder='이메일' id='username'  /></p>
      <p className='pw'><input type='password' className='i-pw' placeholder='PASSWORD' id='password'  /></p>
      <p className='button'><Button variant="outline-secondary" id="loginbtn" >로그인</Button></p>
      </form>
    </div>
  )
}
