import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // trigger fetch when context loaded the first time
  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch feedback items from backend
  const fetchFeedback = async () => {
    // Set delay to view spinner
    const delayLoad = false
    if (delayLoad) {
      await timeout(1000)
    }

    fetch('/feedback?_sort=id&_order=desc')
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok) {
          const error = (data && data.message) || response.statusText
          return Promise.reject(error)
        }
        setFeedback(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Fetch error!', error)
      })
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('do you want to delete')) {
      //   await fetch(`/feedback/${id}`, { method: 'DELETE' })
      await fetch(`/feedback/${id}`, { method: 'DELETE' })
        .then(async (response) => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }
          setFeedback(feedback.filter((item) => item.id !== id))
        })
        .catch((error) => {
          console.error('Delete error!', error)
        })
    }
  }

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok) {
          const error = (data && data.message) || response.statusText
          return Promise.reject(error)
        }

        setFeedback(
          feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
        )
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Update error!', error)
      })

    console.log(id, updItem)
  }

  // Set item to updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    })
  }

  // Add new feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback,
        updateFeedback: updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

// Test to delay fetch
function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay))
}

export default FeedbackContext
