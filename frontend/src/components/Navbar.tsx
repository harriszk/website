import { Link } from "react-router-dom";

interface NavItem {
    label: string;
    path: string;
}

const navConfig: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
];

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
            <ul className="flex space-x-6">
                {navConfig.map((item) => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            className="hover:text-yellow-400 transition-colors"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
