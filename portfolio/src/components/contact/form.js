
import './form.css';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("mjvjldgq");

  if (state.succeeded) {
      return <p className="contact__message contact__message--success">Thanks for Contacting !</p>;
  }
  return (

      <form  className='contact__form' onSubmit={handleSubmit}>

        <input className='contact__input' 
        type="text" name="username" 
        required={true} placeholder="Name" /> 

        <input className='contact__input' 
        type="email" name="email" 
        required={true} placeholder="Email"/>  
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        /> 

        <textarea className='contact__input' 
        name="message"  rows='7' 
        required={true} placeholder="Message"
        ></textarea>  
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />

        <button className='contact__button' type="submit" disabled={state.submitting}>
            Submit
        </button>

        </form>
   
  );
}

export default Form;