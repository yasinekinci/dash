import { Box } from '@mui/material'
import { Post } from 'components'
import React, { useEffect, useState } from 'react'
import api from 'utils/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const getAllProduct = async () => {
    const { success, data } = await api.post('Products');
    if (success) {
      setProducts(data);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <Box flex={4} p={2}>
      <Post />
      {
        products.map(x => {
          return <Post />
        })
      }
    </Box>
  )
}

export default Home