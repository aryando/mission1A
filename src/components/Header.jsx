import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="Header">
            <div className="logo-container">
                <img src="./public/images/Logo.png" alt="Logo" className="Logo" />
            </div>
            <div className="user-menu">
                <Link to="Kategori">Kategori</Link>
                <img src="./public/images/user.png" alt="user" className="user-img" />
                <button onClick={() => {
                    localStorage.Storage.removeItem("isLoggedIn");
                    window.location.href = "/login";
                }}
                >Logout</button>
            </div>
        </header>
    )
}

export default Header;