import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import { useSignupMutation } from '../hooks/userHooks';
import { ApiError } from '../types/ApiError';
import { getError } from '../utils';
import { Container, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function SignupPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [captchaInput, setCaptchaInput] = useState(''); 

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const { mutateAsync: signup } = useSignupMutation();

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas.');
      return;
    }
    if (!acceptedTerms) {
      toast.error('Vous devez accepter les conditions générales d\'utilisation.');
      return;
    }
  
    const passwordRegex = /^(?=.*[A-Z])(?!.*[^!?A-Za-z0-9]).{12,}$/;
    const nameRegex = /^(?!.*(.)\1\1\1)[A-Za-z]{3,15}$/;
    const emailRegex = /@/; // Vérifier que l'e-mail contient @
  
    if (!passwordRegex.test(password)) {
      toast.error('Le mot de passe doit contenir au moins 12 caractères avec au moins une majuscule et ne doit contenir aucun caractère spécial hormis ! et ?.');
      return;
    }
  
    if (!nameRegex.test(name)) {
      toast.error('Le nom doit contenir entre 3 et 15 caractères et ne doit jamais contenir plus de 3 fois le même caractère d\'affilée.');
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }
  
    if (!emailRegex.test(email)) {
      toast.error('L\'adresse e-mail doit contenir le caractère "@"');
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (!captchaInput) {
      toast.error('Veuillez saisir le captcha.');
      setCaptchaError(true);
      return;
    } else {
      setCaptchaError(false);
    }
  
    try {
      const data = await signup({
        name,
        email,
        password,
        captcha: captchaInput,
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
        <title>Sign Up</title>
      </Helmet>
      <h1 className="my-3">Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} required style={{ borderColor: nameError ? 'red' : '' }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} required style={{ borderColor: emailError ? 'red' : '' }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="acceptTerms">
          <Form.Check
            type="checkbox"
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
            id="acceptTermsCheckbox"
            label={
              <>
                En vous inscrivant vous devez acceptez les{' '}
                <a href="/cgu" target="_blank" rel="noopener noreferrer">
                  Conditions générales d'utilisation
                </a>
              </>
            }
          />
        </Form.Group>

        <div>
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
            style={{ borderColor: captchaError ? 'red' : '' }}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit" disabled={!acceptedTerms}>Sign Up</Button>
        </div>

        <div className="mb-3">
          Already have an account?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div>
      </Form>
    </Container>
  );
}
