import { Link } from "react-router-dom"

const Nav = () => {
    return (

        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://youthink.la/wp-content/themes/youthinkadult/assets/images/logo.svg" alt="logo" />
                </Link>
                <div className="navbar">
                    <div className="navbar-nav flex-row">
                        <Link className="nav-link active me-4" to="/">Home</Link>
                        <Link className="nav-link active  me-3" to="/posts">Blog</Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Nav