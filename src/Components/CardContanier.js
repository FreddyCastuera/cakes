import React from 'react'
import { Card } from './Card'

export const CardContanier = ({cakes}) => {
    return (
        <div className='container-xl bg-pink-3'>
            {
                cakes.map((cardInfo,key)=>(
                    <Card key={key} cake={cardInfo} />
                ))
            }
            
        </div>
    )
}
