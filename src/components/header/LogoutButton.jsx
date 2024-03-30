import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() =>
            dispatch(logout())
        )
    }
    return (
        <div
            onClick={logoutHandler}
        >
        Logout
        </div>
    )
}

export default LogoutButton
