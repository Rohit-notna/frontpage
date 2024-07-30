import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Navbar1 from './Navbar1'
import Page from './Page'
import Page1 from './Page1'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Navbar1/>
      <Page/>
      <Page1/>
      <Sidebar/>
    </div>
  )
}
