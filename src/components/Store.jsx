import {useState,useEffect} from 'react'
import axios from 'axios'

const Store = () => {

    const [games,setGames] = useState([])
    const [store,setStore] = useState(["1"]);
    const [sort,setSort] = useState(["Deal Rating"])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=${store}&sortBy=${sort}`)
        .then(res => {
            setGames(res.data)
            console.log(res.data);
            setLoading(false)
        })
        .catch(err => console.log(err))
    },[store,sort])
    if(loading) return <div>Loading...</div>

    return (
        <div className='min-h-screen min-w-full bg-black text-white'>
            <div className='flex flex-col justify-center items-center gap-3 pt-10'>
                <h1 className='text-6xl'>Deals</h1>
                <h1 className='text-2xl'>showing deals from stores</h1>
                <div className='flex justify-between gap-5 items-center'>
                    <select className='bg-black text-center py-1' onChange={(e)=>setStore(e.target.value)}>
                        <option value="1">Steam</option>
                        <option value="2">GamersGate</option>
                        <option value="3">GreenManGaming</option>
                        <option value="4">Amazon</option>
                        <option value="5">GameStop</option>
                        <option value="6">Direct2Drive</option>
                        <option value="7">GoG</option>
                        <option value="8">Origin</option>
                        <option value="9">Get Games</option>
                        <option value="10">Shiny Loot</option>
                        <option value="11">Humble Store</option>
                        <option value="12">Desura</option>
                        <option value="13">Uplay</option>
                        <option value="14">IndieGameStand</option>
                        <option value="15">Fanatical</option>
                        <option value="16">Gamesrocket</option>
                        <option value="17">Games Republic</option>
                        <option value="18">SilaGames</option>
                        <option value="19">Playfield</option>
                        <option value="20">ImperialGames</option>
                        <option value="21">WinGameStore</option>
                        <option value="22">FunStockDigital</option>
                        <option value="23">GameBillet</option>
                        <option value="24">Voidu</option>
                    </select>
                    <select className='bg-black px-4 py-1 text-center' onChange={(e)=>setSort(e.target.value)} >
                        <option value="Deal Rating">Deal Rating</option>
                        <option value="Title">Title</option>
                        <option value="Savings">Savings</option>
                        <option value="Price">Price</option>
                        <option value="Metacritic">Metacritic</option>
                        <option value="Reviews">Reviews</option>
                        <option value="Release">Release</option>
                        <option value="Recent">Recent</option>
                    </select>
                </div>
                
                <div className='border-b-[1px] border-gray-400 w-[95%]'></div>
            </div>
        </div>
    )
}

export default Store