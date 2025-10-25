import { NavLink } from "react-router-dom";

import styles from "../styles/NavBarNavLink.module.css";

// Navlink component props
interface NavLinkProps {
  title: string;
  to: string;
  contactUsLink: boolean;
}

// component to render each nav link
const NavBarNavLink: React.FC<NavLinkProps> = ({
  title,
  to,
  contactUsLink,
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive && !contactUsLink
          ? `${styles.NavLink} ${styles.Active}`
          : isActive && contactUsLink
          ? `${styles.NavLink} ${styles.NavLinkContact} ${styles.NavLinkContactActive}`
          : contactUsLink
          ? `${styles.NavLink} ${styles.NavLinkContact}`
          : styles.NavLink
      }
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default NavBarNavLink;
