import React from 'react'
import { useRouter } from 'next/router';

const ProductName = () => {
    const router = useRouter();
    console.log(router.query.name)

    return (
        <div>ProductName</div>
    )
}

export default ProductName