import ErrorIcon from '../../assets/react-icons/Error'
import './FormError.css'

const FormError = (props) => {
  return (
    <div className={props.errorMessage ? "box-has-erroMessage" : "no-erroMessage"}>
        <p className='register-erro-message'>{props.errorMessage}</p>
        <ErrorIcon onClose={props.onClose} className={"error-icon"} />
      </div>
  )
}

export default FormError