import { Link, NavLink } from "react-router";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">useContext</Link>
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
                                to="/" >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => {
                                    return `nav-link ${isActive ? 'active' : ''}`;
                                }}
                                to="/about" >
                                About
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => {
                                    return `nav-link ${isActive ? 'active' : ''}`;
                                }}
                                to="/login" >
                                Login
                            </NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
