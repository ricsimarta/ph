import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Contact from './Contact'

function Layout({children}) {
  return (
    <main>
      <Header />
        <div className='content'>
          {children}
        </div>
        <Contact />
      <Footer />
    </main>
  )
}

export default Layout