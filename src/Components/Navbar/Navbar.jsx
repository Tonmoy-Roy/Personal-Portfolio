import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><NavLink>About</NavLink></li>
        <li><NavLink>Resume</NavLink></li>
        <li><NavLink>Works</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
    </>
    return (
        <div></div>
    );
};

export default Navbar;