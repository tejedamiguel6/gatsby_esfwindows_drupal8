import React from 'react'
import Layout from '../components/HomePage/Layout'
import Head from '../components/HomePage/Head'
import Welcome from '../components/HomePage/Welcome'
import CompanyContent from '../components/HomePage/CompanyContent'
import WindowContent from '../components/HomePage/WindowContent'
import DoorContent from '../components/HomePage/DoorContent'
import Footer from '../components//HomePage/Footer'

import Form from '../components/form'

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Welcome />
      <CompanyContent />
      <WindowContent />
      <DoorContent />

      <Form />
    </Layout>
  )
}

export default Home
