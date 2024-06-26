import { Link } from "react-router-dom"
import SearchInput from "./Search"

const Navbar = () => {
    return (
        <>
            <div className='flex shadow-lg h-14'>
                <Link to={'/'} className='flex gap-2 px-5 py-2'>
                    <img className='w-full' src="https://play-lh.googleusercontent.com/4QdiqfgqEoIdHAWmMe6m9VKVhfw94E8zUluQ-KmtAwEnUijT2Tbb6lApzyqbQlAKH88" alt="" />
                    <h2 className='text-blue-800 font-bold items-center flex'>KOMIJUT</h2>
                </Link>
                <SearchInput/>
            </div>
        </>
    )
}

export default Navbar