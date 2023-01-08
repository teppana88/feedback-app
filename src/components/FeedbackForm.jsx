import { useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisable] = useState(true)
  const [rating, setRating] = useState(8)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    if (text === '') {
      setBtnDisable(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisable(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnDisable(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      }
      handleAdd(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleChange}
            type='text'
            placeholder='Write a comment'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled} version='primary'>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}
export default FeedbackForm
