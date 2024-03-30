import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Logo, Container, LogoutButton } from '../index'
import { IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status);
    const [openMenu, setOpenMenu] = useState(true)
    // console.log(authStatus);

    const naveItems = [
        {
            name: 'Home',
            slug: '/',
            active: true,
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Posts',
            slug: '/add-posts',
            active: authStatus,
        },
    ]

    return (
        <header className="h-[60px] flex items-center w-full shadow-md sticky top-0 z-30 border-b border-gray-600 bg-[#19191d]">
            <Container>
                <nav className="flex flex-wrap items-center justify-between">
                    <div className="sm:mr-4 w-14">
                        <Link>
                            <Logo width="100px" />
                        </Link>
                    </div>
                    <div className="ml-auto sm:flex items-center justify-between hidden">
                        <ul className="flex md:mr-3">
                            {naveItems.map((item) =>
                                item.active ? (
                                    <div key={item.name}>
                                        <NavLink to={item.slug}
                                            className={({ isActive }) => `${isActive ? "text-violet-600" : "text-white"} hover:text-violet-600 font-semibold text-lg px-4 py-2 `}
                                            onClick={() => navigate(item.slug)}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </div>
                                ) : null
                            )}
                        </ul>
                        {authStatus && (
                            <button className=' px-4 py-2 duration-200 hover:bg-violet-500 rounded-full font-semibold text-lg text-white'>
                                <LogoutButton />
                            </button>
                        )}
                    </div>

                    <div className=' text-white block sm:hidden'>
                        {openMenu ?
                            <IoMenu
                                size={25}
                                onClick={() => setOpenMenu(false)}
                            /> :
                            <IoClose
                                size={25}
                                onClick={() => setOpenMenu(true)}
                            />
                        }
                    </div>

                    {/* for small devices */}
                    {!openMenu && (
                        <div className=' fixed top-[60px] right-0 w-1/2 h-screen bg-[#19191d] flex sm:hidden flex-col items-center gap-6 pt-10'>
                            {naveItems.map((item) =>
                                item.active ? (
                                    <div key={item.name}>
                                        <NavLink to={item.slug}
                                            className={({ isActive }) => `${isActive ? "text-violet-600" : "text-white"} hover:text-violet-600 font-semibold text-lg py-6 `}
                                            onClick={() => navigate(item.slug)}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </div>
                                ) : null
                            )}
                            {authStatus && (
                                <div className='mt-10 flex justify-center items-center gap-2 text-white border border-blue-600 text-lg rounded-md px-4 py-1.5 font-semibold'>
                                    <MdOutlineLogout size={20} />
                                    <LogoutButton />
                                </div>
                            )}
                        </div>
                    )}
                </nav>
            </Container>
        </header>
    )
}

export default Header
