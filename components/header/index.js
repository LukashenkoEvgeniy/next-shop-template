import Link from 'next/link';
import './index.scss'
import Cart from "./cart";

const links = [
    {
        label: 'Home',
        link: '/'
    },
 {
        label: 'About',
        link: '/about'
    },
 {
        label: 'Blog',
        link: '/blog'
    },
];

const Header = () => (
    <header className="header">

        <div className="header__logo">
            <img src="/img/logo.png" alt="beautyProfi"/>
        </div>

        <nav className="header__nav nav">
            {links.map(({label, link}) => (
                <div
                    key={link}
                    className="nav__link"
                >
                    <Link
                        href={link}
                    >
                        <a>{label}</a>
                    </Link>
                </div>
            ))}
        </nav>

        <Cart/>

        Lang
    </header>
);

export default Header;