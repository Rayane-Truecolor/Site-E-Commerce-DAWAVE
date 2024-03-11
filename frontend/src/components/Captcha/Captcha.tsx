import { useState, ChangeEvent } from 'react';
import { Button, Form } from 'react-bootstrap'; // Import du bouton depuis react-bootstrap
import ReCAPTCHA from 'react-google-recaptcha';
import LoadingBox from '../LoadingBox';
import { useSigninMutation } from '../../hooks/userHooks';

export default function Captcha() {
  const key = '6Ldzd5IpAAAAACVQMKca-Yr1JVATmPh7kRImWfrF';
  const { isPending } = useSigninMutation();
  const [captchaIsDone, setCaptchaDone] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  function onCaptchaChange() {
    console.log('Captcha changed');
    setCaptchaDone(true);
  }

  function onCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    console.log('Checkbox changed');
    setAcceptedTerms(e.target.checked);
  }

  return (
    <div>
      <Form.Group className="mb-3" controlId="acceptTerms">
        <Form.Check
          type="checkbox"
          onChange={onCheckboxChange}
          required
          id="acceptTermsCheckbox"
          label={
            <>
              Acceptez-vous les{" "}
              <a href="/cgu" target="_blank" rel="noopener noreferrer">Conditions générales d'utilisation</a> ?
            </>
          }
        />
      </Form.Group>

      <ReCAPTCHA
        sitekey={key}
        onChange={onCaptchaChange}
      />
      <br></br>

      <div className="mb-3">
        <Button disabled={!captchaIsDone || !acceptedTerms || isPending} type="submit">
          Sign In
        </Button>
        {isPending && <LoadingBox />}
      </div>
    </div>
  );
}