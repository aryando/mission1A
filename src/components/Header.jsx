import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="Header">
            <div className="logo-container">
                <img src="/images/Logo.png" alt="Logo" className="Logo" />
            </div>
            <div className="user-menu">
                <Link to="Katergori">Kategori</Link>
                <img src="/images/user.png" alt="user" className="user-ing" />
            </div>
        </header>
    )
}

export default Header;