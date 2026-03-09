import { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
  // We did not put it in Search component because we want to use it in App component as well, for example to display the search term in the header or to pass it to other
  // We will pass the searchTerm and setSearchTerm as props to the Search component so that it can update the search term when the user types in the search input

  return (
    <main>
      <div className='pattern'>
        <div className='wrapper'>
          <header>
            <img src="/hero.png" alt="Hero Banner" />
            <h1>Find <span className='text-gradient'>Great</span> Movies You'll Enjoy Without the Hassle</h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </main>
  )
}

export default App