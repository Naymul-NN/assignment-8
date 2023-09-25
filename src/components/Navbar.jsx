import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-3 ">
            <div>
                <img src="https://i.ibb.co/5rPvd2K/Logo.png" alt="" />
            </div>
            <div>
                <ul>
                    <Link  to='/'>Home</Link>
                    <Link className="px-7" to='/donation'>Donation</Link>
                    <Link to='/statistics'>Statistics</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;