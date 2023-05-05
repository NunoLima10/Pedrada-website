import './FormBox.css'

const FormBox = (props) => {
  return (
    <form className='form-container' onSubmit={props.submitHandler} >
      <h2 className='from-title'>{props.title}</h2>
      {props.children}
      <button type='submit' className='sing-in-button'>{props.submitButtonText}</button>
      <p className='from-question'>{props.questionText.question}
        <span onClick={props.questionOnClick} className='login-redirect'>{props.questionText.link}</span>
      </p>
    </form>
  )
}
export default FormBox;