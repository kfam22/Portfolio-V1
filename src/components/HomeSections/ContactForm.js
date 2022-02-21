import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mgedknkk");
  if (state.succeeded) {
      return <section><h1>Thanks for your message!</h1></section>;
  }
  return (
  <section className="five" id='five'>
    <div className="pageFiveBox">
      <div className='contact-container'>
            <div className='contact-title'>
            <h1>Contact Me</h1>
            <h3>Got a question, proposal, or just want
              to say hello? Go ahead.</h3>
            </div>
    
            <form className='contact-form' onSubmit={handleSubmit}>

                <div className='contact-info'>
                  <div className='contact-left'>
                  <label className='contact' htmlFor='name'>Name</label>
                  <input className='contact' id='name' name='name' placeholder='enter your name'/>
                  </div>

                  <div className='contact-right'>
                  <label className='contact' htmlFor='email' >Email</label>
                  <input className='contact' id='email' type='email' name='email'placeholder='enter your email address'/>
                  <ValidationError prefix="Email" field="email" errors={state.errors}/>
                  </div>
                </div>

                <div className='contact-message'>
                <label className='contact' htmlFor='message' >Your Message</label>
                <input className='contact' id='message' name='message' placeholder='Hi, we would love to work with you on project X'/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                </div>

                <div className='contactBtnCase'>
                <button type='submit' disabled={state.submitting} className='contact-btn hvr-sweep-to-right'>send</button>
                </div>
              
            </form>

          </div>
        </div>
  </section>

  );
}

export default ContactForm;

/* //           <form className='contact-form' onSubmit={handleSubmit}>

//               <div className='contact-info'>
//                 <div className='contact-left'>
//                 <label className='contact' htmlFor='name'>Name</label>
//                 <input className='contact' id='name' name='name' placeholder='enter your name'/>
//                 </div>

//                 <div className='contact-right'>
//                 <label className='contact' htmlFor='email' >Email</label>
//                 <input className='contact' id='email' type='email' name='email'placeholder='enter your email address'/>
//                 <ValidationError prefix="Email" field="email" errors={state.errors}/>
//                 </div>
//               </div>

//               <div className='contact-message'>
//               <label className='contact' htmlFor='message' >Your Message</label>
//               <textarea className='contact' id='message' name='message' placeholder='Hi, we would love to work with you on project X'/>
//               <ValidationError prefix="Message" field="message" errors={state.errors}/>
//               </div>

//               <div className='contactBtnCase'>
//               <button type='submit' disabled={state.submitting} className='contact-btn hvr-sweep-to-right'>contact</button>
//               </div>
              
//           </form>


          // changed message from input to textarea, changed id from msg to message */