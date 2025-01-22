import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        // ? replace para que no se pueda regresar con el boton de atras
        navigate('/login', { replace: true });
    }

    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Asociaciones</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* Si no necesitamos el isActive podemos usar Link */}
                        <NavLink
                            className={({ isActive }) => {
                                return `nav-link ${isActive ? 'active' : ''}`;
                            }}
                            to="/marvel" >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => {
                                return `nav-link ${isActive ? 'active' : ''}`;
                            }}
                            to="/dc" >
                            DC
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => {
                                return `nav-link ${isActive ? 'active' : ''}`;
                            }}
                            to="/search" >
                            Search
                        </NavLink>
                        <div className="d-flex">
                            <ul className="navbar-nav ml-auto">
                                <span className='nav-item nav-link text-primary'>{user?.name}</span>
                                <button
                                    aria-label='logout-btn'
                                    className="nav-item nav-link btn"
                                    onClick={onLogout}
                                >
                                    Logout
                                </button>
                            </ul>
                        </div>
                        {/* <NavLink
                            className={({ isActive }) => {
                                return `nav-link ${isActive ? 'active' : ''}`;
                            }}
                            to="/login" >
                            Logout
                        </NavLink> */}

                    </div>
                </div>
            </div>
        </nav>
    )
}