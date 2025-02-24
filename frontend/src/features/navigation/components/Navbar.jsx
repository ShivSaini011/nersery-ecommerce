import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '../../user/UserSlice';
import { selectCartItems } from '../../cart/CartSlice';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { selectWishlistItems } from '../../wishlist/WishlistSlice';
import { selectProductIsFilterOpen, toggleFilters } from '../../products/ProductSlice';
import './Navbar.css';

export const Navbar = ({ isProductList = false }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const userInfo = useSelector(selectUserInfo);
  const cartItems = useSelector(selectCartItems);
  const loggedInUser = useSelector(selectLoggedInUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const isProductFilterOpen = useSelector(selectProductIsFilterOpen);

  const settings = [
    { name: "Home", to: "/" },
    { name: 'Profile', to: loggedInUser?.isAdmin ? "/admin/profile" : "/profile" },
    { name: loggedInUser?.isAdmin ? 'Orders' : 'My orders', to: loggedInUser?.isAdmin ? "/admin/orders" : "/orders" },
    { name: 'Logout', to: "/logout" },
  ];

  return (
    <header className="navbar">
      <nav className="nav-container">
        <h1 className="logo">
        <Link to="/" className="logo">
              <span className="logo-green">nursery</span>
              <span className="logo-black">live</span>
            </Link>
        </h1>

        <div className="nav-right">
          <div className="user-menu">
            <button 
              className="avatar-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="avatar">{userInfo?.name[0]}</div>
            </button>
            
            {isMenuOpen && (
              <div className="menu-dropdown">
                {loggedInUser?.isAdmin && (
                  <Link to="/admin/add-product" className="menu-item">
                    Add new Product
                  </Link>
                )}
                {settings.map((setting) => (
                  <Link
                    key={setting.name}
                    to={setting.to}
                    className="menu-item"
                  >
                    {setting.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="user-greeting">
            {userInfo?.name ? `Hey👋, ${userInfo.name}` : 'Welcome'}
          </div>

          <div className="nav-icons">
            {cartItems?.length > 0 && (
              <button className="icon-button" onClick={() => navigate("/cart")}>
                <span className="badge">{cartItems.length}</span>
                🛒
              </button>
            )}

            {!loggedInUser?.isAdmin && (
              <Link to="/wishlist" className="icon-button">
                <span className="badge">{wishlistItems?.length || 0}</span>
                ❤️
              </Link>
            )}

            {isProductList && (
              <button 
                className="filter-button"
                onClick={() => dispatch(toggleFilters())}
              >
                ⚙️
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};