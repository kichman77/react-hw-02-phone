import React from 'react';
import './Form.css'

const Form = () => {
  return (

    <form className='contactForm'>
      <label>Name
        <input name    ='name' className='inputName' />
      </label>
      <button className='formBtn' type='submit'>Add contact</button>
    </form>

  );
};

export default Form;