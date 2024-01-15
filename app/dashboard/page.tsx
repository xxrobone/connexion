import Header from '@/components/ui/header/Header'
import Sidebar from '@/components/ui/sidebar/Sidebar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex w-full min-h-screen'>
      <Sidebar />
      <Header />
    </div>
  )
}

export default Dashboard