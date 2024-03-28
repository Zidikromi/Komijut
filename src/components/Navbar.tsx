import Logo from "../assets/logo";
import SearchInput from "./Search"

interface NavbarProps {
    onNavItemClick: (sectionId: string) => void;
}

const Navbar = ({ onNavItemClick }: NavbarProps) => {

    return (
        <>
            <div className="navbar bg-[#D6A76F] md:h-[99px] shadow-md">
                <div className="navbar-start">
                    <div className="dropdown mt-2">
                        <div tabIndex={0} role="button" className="pl-4 lg:hidden text-[#FFF8F0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20">
                            <li><a onClick={() => onNavItemClick('top')}>HOME</a></li>
                            <li><a onClick={() => onNavItemClick('popular')}>POPULAR</a></li>
                            <li><a onClick={() => onNavItemClick('recommended')}>RECOMMENDED</a></li>
                        </ul>
                    </div>
                    <div className="pl-[58px] lg:flex hidden">
                        <Logo/>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-[#FFF8F0] text-[16px]" onClick={() => onNavItemClick('top')}>HOME</a></li>
                        <li><a className="text-[#FFF8F0] text-[16px]" onClick={() => onNavItemClick('popular')}>POPULAR</a></li>
                        <li><a className="text-[#FFF8F0] text-[16px]" onClick={() => onNavItemClick('recommended')}>RECOMMENDED</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex justify-end items-center ">
                    <SearchInput />
                </div>
            </div >
        </>
    )
}

export default Navbar