import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export const Login = ({setAuth}) => {
  const navigate=useNavigate();
  const loginUser = (e) => {
    e.preventDefault(); //form쓰면 이걸 꼭사용 -> 리프레쉬 안됨.
    setAuth(true)
    navigate('/');
  }
  return (
    <Container>
      <Form onSubmit={(e) => loginUser(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="danger" type="submit">Login</Button>
      </Form>
    </Container>
  )
}
