import { useContext, useState } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import { Spinner2 } from './shared/Spinner'
import Popup from './shared/Popup'
import Button from './shared/Button'

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)
  const [openPopup, setOpenPopup] = useState(false)

  const popupTitle = 'Feedback status content'
  const popupMessage =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est 3.'

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>"No feedback"</p>
  }
  return isLoading ? (
    <Spinner2 />
  ) : (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
      <div>
        <Button
          type='button'
          isDisabled={false}
          version='secondary'
          onClick={() => {
            setOpenPopup(true)
          }}
        >
          Check status
        </Button>
      </div>
      {openPopup ? (
        <Popup
          title={popupTitle}
          message={popupMessage}
          closePopup={() => setOpenPopup(false)}
        />
      ) : null}
    </div>
  )
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }
export default FeedbackList
