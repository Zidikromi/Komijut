import { Link } from "react-router-dom";
import SearchInput from "./Search"

const Navbar2 = () => {

    return (
        <>
            <div className="navbar bg-[#D6A76F] md:h-[99px] shadow-md">
                <div className="navbar-start">
                    <div className="dropdown mt-2">
                        <div tabIndex={0} role="button" className="pl-4 lg:hidden text-[#FFF8F0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20">
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><Link to={'/'}>POPULAR</Link></li>
                            <li><Link to={'/'}>RECOMMENDED</Link></li>
                        </ul>
                    </div>
                    <div className="pl-[58px] lg:flex hidden">
                        <svg width="47" height="57" viewBox="0 0 57 67" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="57" height="67" fill="url(#pattern0)" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_2_9" transform="matrix(0.00314288 0 0 0.0026738 -0.00286143 0)" />
                                </pattern>
                                <image id="image0_2_9" width="320" height="374" xlinkHref="data:image/png;base64,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" />
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'} className="text-[#FFF8F0] text-[16px]" >HOME</Link></li>
                        <li><Link to={'/'} className="text-[#FFF8F0] text-[16px]" >POPULAR</Link></li>
                        <li><Link to={'/'} className="text-[#FFF8F0] text-[16px]" >RECOMMENDED</Link></li>

                    </ul>
                </div>
                <div className="navbar-end flex justify-end items-center ">
                    <SearchInput />
                </div>
            </div >
        </>
    )
}

export default Navbar2