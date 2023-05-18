import React from 'react'
import { Link } from 'react-router-dom'

const GameCard = ({game}) => {
    return (
        <Link className='border-[1px] border-gray-400 flex flex-col justify-between gap-3 pb-5' to={`/game/${game.dealID}`}>
            <img src={game.thumb} alt="" className='w-full h-[50%] '/>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl text-center '>{game.title}</h1>
                <h1 className='text-xl text-center text-green-500 '>{game.savings.slice(0,5)}%</h1>
                <div className='flex  w-[80%] gap-2 mx-auto items-center'>
                    <div className="flex gap-2 items-center">
                        <h1 className='text-xl text-center '>{game.salePrice}$</h1>
                        <h1 className='text-sm text-center line-through'>{game.normalPrice}$</h1>
                    </div>
                </div>
                
            </div>
        </Link>
    )
}

export default GameCard