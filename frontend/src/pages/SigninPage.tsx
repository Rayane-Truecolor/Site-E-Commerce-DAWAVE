import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSigninMutation } from '../hooks/userHooks';
import { Store } from '../Store';
import { ApiError } from '../types/ApiError';
import { getError } from '../utils';

export default function SigninPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const { mutateAsync: signin } = useSigninMutation();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await signin({
        email,
        password,
        captcha: captchaInput, // Inclure la valeur du captcha
      });
      dispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect);
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);


 
    const [captchaSvg, setCaptchaSvg] = useState('');
  
    useEffect(() => {
      fetchCaptcha();
    }, []);
  
    async function fetchCaptcha() {
      try {
        const response = await fetch('http://localhost:4000/captcha');
        const captchaSvg = await response.text();
        setCaptchaSvg(captchaSvg);
      } catch (error) {
        console.error('Error fetching captcha:', error);
      }
    }
  
  

  return (
    <Container>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div>
        {/* Affichage du captcha SVG */}
        <div dangerouslySetInnerHTML={{ __html: captchaSvg }} />
      </div>
        <Form.Group className="mb-3" controlId="captchaInput">
          <Form.Label>Saisissez le captcha</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez le captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            required
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}
