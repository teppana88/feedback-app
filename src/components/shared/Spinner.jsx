import spinner from '../assets/spinner.gif'

// Spinner from .gif image
function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '50px', margin: 'auto', display: 'block' }}
    />
  )
}

// Spinner with code generated
function Spinner2() {
  return <div className='spinner2'></div>
}

export { Spinner2, Spinner }
