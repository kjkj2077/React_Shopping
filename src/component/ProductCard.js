import React from 'react'

export const ProductCard = ({ item }) => {
    return (
        <div className='product-list' >
            <img src={item?.img} />
            <div className='product-info'>
                <div className='choice'>{item?.choice == true ? 'Conscious choice' : '  '}</div>
                <div>{item?.title}</div>
                <div>{item?.price}</div>
                <div>{item?.new == true ? '신제품' : ''}</div>
            </div>
        </div>
    )
}
