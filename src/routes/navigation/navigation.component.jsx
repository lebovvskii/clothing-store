import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo__container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav__links">
          <Link className="nav__link" to="/shop">
            SHOP   
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
