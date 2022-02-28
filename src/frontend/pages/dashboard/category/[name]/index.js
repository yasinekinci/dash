import { useRouter } from 'next/router'
import React from 'react'

const CategoryName = () => {
    const router = useRouter();
    console.log(router);

    const takeMeHome = () => {
        router.push('/');
    }

    return (
        <div onClick={takeMeHome}>Category Name</div>
    )
}

export default CategoryName