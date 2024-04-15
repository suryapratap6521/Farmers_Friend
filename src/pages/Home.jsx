import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Button variant='contained' component={Link} to='/login'>Login</Button>
    </div>
  )
}

export default Home
