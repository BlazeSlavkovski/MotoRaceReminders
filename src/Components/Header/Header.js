import "./Header.scss";
import logo from "../../Assets/logo-no-background.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="background">
      <div className="header">
        <img className="header__logo" src={logo} />

        <div className="header__nav">
          <NavLink
            className={({ isActive }) =>
            "header__link " +
            (isActive ? "header__link--active" : null)
            }
            to="/raceseries"
          >
            <div>Series</div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
            "header__link " +
            (isActive ? "header__link--active" : null)
            }
            to="/following"
          >
            <div>Following</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
