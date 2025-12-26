
import * as React from "react";
import { Link, useLocation } from "react-router-dom";

export interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children, className, activeClassName }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
};
