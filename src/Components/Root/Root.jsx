import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <About></About>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;