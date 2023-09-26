import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <p className=" text-center test-3xl font-bold">opss! you made a mistake</p>
            <Link className="text-center test-3xl font-bold" to='/'>GO HOME</Link>
        </div>
    );
};

export default ErrorPage;