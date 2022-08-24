import { Link } from 'react-router-dom';
import { useSelector, } from "react-redux";
import { useDispatch } from "react-redux";
import {userlogout} from '../slice/authSlice'
import { useNavigate } from "react-router-dom";

function Navbar() {
    const userdata = useSelector((state) => (state.auth))
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handellogout =()=>{
    
        dispatch(userlogout());
        localStorage.clear();
        navigate("/Home");
    }
    return (

        <header id="header ">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <Link className="navbar-brand" to="" >Home</Link>

                    <button className="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='text-right'>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto " >
                                {userdata.isLoggedIn ? (
                                    <div>
                                    <button className="btn btn-md btn-success">Dashboard</button>
                                    &nbsp; 
                                    <button className="btn btn-md btn-danger"
                                     onClick={handellogout}>logout</button>
                                    </div>
                                ) : (
                                    <div>
                                        <Link className="navbar-brand" to="Login">

                                       
                                        <button className="btn btn-md btn-success m-2">Login</button>
                                        </Link>
                                        <button className="btn btn-md btn-success">Register</button>
                                       
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;