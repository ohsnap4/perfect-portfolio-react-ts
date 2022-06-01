import React from 'react'
import FilteredItem from './components/FilteredItem'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className='px-12'>
      {/* header section */}
      <Header />
      {/* FilteredItem section  */}
      <FilteredItem />
      {/* services section  */}
      {/* testimonials section  */}
      {/* footer  */}
      <Footer />

    </div>
  )
}

export default App