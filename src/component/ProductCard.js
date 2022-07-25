import React from 'react'
import { useNavigate } from 'react-router-dom'
export const ProductCard = ({ item }) => {
    const navigate =useNavigate()
    const showDetail=()=>{
        navigate(`/product/${item.id}`)

    }
    return (
        <div className='product-list' onClick={showDetail}>
            <img src={item?.img} />
            <div className='product-info'>
                <div className='choice'>{item?.choice === true ? 'Conscious choice' : '  '}</div>
                <div>{item?.title}</div>
                <div>₩{item?.price}</div>
            </div>
        </div>
    )
}
