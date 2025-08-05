import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ADMIN_ADD_SONG_PATH,
  HOME_PATH,
  MYGIGS_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
} from "../../../constants/routes";
import Cta from "../../shared/buttons/Cta";
import Logo from "../../../assets/images/logo.png";

const navLinks = [
  { href: HOME_PATH, label: "Home" },
  { href: MYGIGS_PATH, label: "My Gigs" }, //control space to import
  { href: ADMIN_ADD_SONG_PATH, label: "Admin" }, //control space to import
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-10 px-4 py-3 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-7">
          <Link to={HOME_PATH}>
            <img
              src={Logo}
              alt="Online ICT Logo"
              className="w-[150px] rounded-md"
            />
          </Link>

          <ul className={`flex flex-col md:flex-row md:gap-10`}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  className={`hover:text-gray-900 ${
                    location.pathname === href ? "text-gray-700" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Link to={LOGIN_PATH} className="font-medium hover:text-purple-500">
            Login
          </Link>
          <Cta label="Get Started" url={REGISTER_PATH} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
