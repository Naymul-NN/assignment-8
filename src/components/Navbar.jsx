import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-col flex-wrap lg:flex-row justify-between items-center py-3 ">
            <div>
                <img src="https://i.ibb.co/5rPvd2K/Logo.png" alt="" />
            </div>
            <div>
                <ul className="pt-7 sm:pt-5 lg:pt-0">
                    <Link  to='/'>Home</Link>
                    <Link className="px-7" to='/donation'>Donation</Link>
                    <Link to='/statistics'>Statistics</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;