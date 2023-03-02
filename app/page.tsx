import React from 'react'
import DarkModeSwitch from 'ui/Buttons/DarkModeSwitch'
import Home from 'ui/Sections/NFTPage'
import { getServerSession } from "next-auth/next"
import HomePage from 'ui/Sections/HomePage'
async function Main() {
  return (
    <div className='bg-gray-100 dark:bg-black'>
  <HomePage/>
    </div>
  )
}

export default Main