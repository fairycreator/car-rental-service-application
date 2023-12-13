import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <div>
            <NavLink to='/signin'>Sign in<span> / </span></NavLink>
            <NavLink to='/signup'>Sign up</NavLink>
        </div>
    )
};