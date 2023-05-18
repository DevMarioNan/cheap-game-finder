import React from 'react'
import { Link } from 'react-router-dom'

const GameCard = ({game}) => {
    return (
        <div className='border-[0.2em] border-gray-200 flex flex-col justify-between gap-3 pb-5 rounded-xl hover:shadow-blue-600 hover:m-2 transition-all shadow-xl ' >
            <img src={game.thumb} alt="" className='w-full h-auto rounded-xl'/>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl text-center '>{game.title}</h1>
                <h1 className='text-xl text-center text-green-500 '>{game.savings.slice(0,5)}%</h1>
                <div className='flex w-[80%] gap-2 mx-auto items-center'>
                    <div className="flex gap-2 items-center">
                        <h1 className='text-xl text-center '>{game.salePrice}$</h1>
                        <h1 className='text-sm text-center line-through'>{game.normalPrice}$</h1>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default GameCard