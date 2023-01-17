import './Popup.css'
import Button from './Button'

function Popup({ title, message, closePopup }) {
  return (
    <div className='popup-container'>
      <div className='popup-body'>
        <h2>{title}</h2>
        <p style={{ marginTop: '20px', marginBottom: '20px' }}>{message}</p>
        <Button
          type='button'
          isDisabled={false}
          version='primary'
          onClick={closePopup}
        >
          Close
        </Button>
      </div>
    </div>
  )
}
export default Popup
