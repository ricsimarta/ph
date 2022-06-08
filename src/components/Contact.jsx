import React, { useState } from 'react'
import CachedIcon from '@mui/icons-material/Cached';

function Contact() {
  const [number1, setNumber1] = useState(Math.floor(Math.random() * 9) + 1);
  const [number2, setNumber2] = useState(Math.floor(Math.random() * 9) + 1);
  const [captchaValue, setCaptchaValue] = useState("");
  const [operation, setOperation] = useState(Math.floor(Math.random() * 3) + 1);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  if (number2 > number1) {
    const number3 = number1;
    setNumber1(number2);
    setNumber2(number3);
  }

  return (
    <div className='contact' id='contact'>
      <div className='contactMap'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21571.4305656451!2d19.051971!3d47.481559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc4da3cd027f%3A0x58792731bd9490a7!2zQnVkYXBlc3QsIEJhcnTDs2sgQsOpbGEgw7p0IDE1YSwgMTExNCBIdW5nYXJ5!5e0!3m2!1sen!2sus!4v1654590041129!5m2!1sen!2sus" title="contactMap" width="600" height="450" loading="lazy"></iframe>
      </div>

      <div className='contactInfo'>
        <p className='contactAddress'>
          <span><strong>Our Address:</strong></span>
          <span>Hungarian Head Office</span>
          <span>Bartók Béla út 15a</span>
          <span>1114 Budapest</span>
          <span>Hungary</span>
        </p>

        <p className='contactTel'>
          <span><strong>Business Development:</strong></span>
          <span>+36 1 209 5927</span>
        </p>

        <form className='contactForm'>
          <div className='typeOfMessage'>
            <div className='type'>
              <input type='radio' id='typeContact' name='type' defaultChecked />
              <label htmlFor='typeContact'>Contact</label>
            </div>

            <div className='type'>
              <input type='radio' id='typeSideEffect' name='type' />
              <label htmlFor='typeSideEffect'>Adverse event / Side effect</label>
            </div>
          </div>

          <input type='text' name='name' placeholder='Name'/>

          <input type='email' name='email' placeholder='E-mail address'/>

          <textarea name='message' placeholder='Message'></textarea>

          <div className='captchaContainer'>
            <div className='captcha'>
              <p>{number1} {operation === 1 ? "+" : operation === 2 ? "-" : "*"} {number2} = </p>
            </div>
            <input type='number' name='captchaInput' className='captchaInput' value={captchaValue} onChange={e => {
              if (e.target.value.length > 2) {
                e.target.value = e.target.value.substring(0, 2);
                setCaptchaValue(e.target.value);
              } else setCaptchaValue(e.target.value);
            }} />
            <button className='newCaptcha' onClick={_ => { 
              setNumber1(Math.floor(Math.random() * 9) + 1);
              setNumber2(Math.floor(Math.random() * 9) + 1);
              setOperation(Math.floor(Math.random() * 3) + 1);
            }}><CachedIcon /></button>
          </div>

          <button className='sendButton' type='submit' name='contactSend' onClick={e => {
            e.preventDefault();
            let result = 0;
            operation === 1 ? result = number1 + number2 : operation === 2 ? result = number1 - number2 : result = number1 * number2;
            if (parseInt(captchaValue) === result) {
              setShowErrorMessage(false)
            } else {
              setShowErrorMessage(true)
              setNumber1(Math.floor(Math.random() * 9) + 1);
              setNumber2(Math.floor(Math.random() * 9) + 1);
              setOperation(Math.floor(Math.random() * 3) + 1);
              setCaptchaValue("");
            };
          }}>Send</button>


          {showErrorMessage && <p className='captchaError'><strong>The entered number does not match!</strong></p>}
        </form>
      </div>
    </div>
  )
}

export default Contact