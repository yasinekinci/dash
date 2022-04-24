import { Box } from '@mui/material'
import { Post } from 'components'
import React from 'react'

const DashboardApp = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default DashboardApp