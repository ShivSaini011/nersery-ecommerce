// import { Search, ShoppingCart, User } from 'lucide-react'
// import "/styles.css";
import "./styles.css";
export default function TopNavbar() {
  return (
    <header className="navheader">
      <div id="shopify-section-static-utility-bar" className="shopify-section">
        <section className="utility-bar utility-bar--full-width">
          <div className="utility-bar__content">
            <div className="utility-bar__content-left">
              <a
                href="pages/nurserylive-loyalty-program.html#smile-home"
                className="utility-bar__menu-link"
              >
                Rewards
              </a>

              <a
                href="https://support.nurserylive.com/support/home"
                className="utility-bar__menu-link"
              >
                Help
              </a>

              <a
                href="/orders"
                className="utility-bar__menu-link"
              >
                Track Order
              </a>

              <a
                href="account/login4236.html"
                className="utility-bar__menu-link"
              >
                Orders
              </a>

              <a href="pages/offers.html" className="utility-bar__menu-link">
                Offers
              </a>

              <a
                href="pages/corporate-gifting.html"
                className="utility-bar__menu-link"
              >
                Corporate
              </a>
            </div>
            <div className="utility-bar__content-right" data-disclosure-items>
              <div className="utility-bar__social-container  utility-bar__social-list">
                <div className="social-icons">
                  <a
                    className="social-link"
                    title="Facebook"
                    href="https://facebook.com/nurserylive"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                    >
                      {" "}
                      <path
                        fill="currentColor"
                        d="M16.913 13.919h-2.17v7.907h-3.215V13.92H10v-2.794h1.528V9.316c0-1.294.601-3.316 3.245-3.316l2.38.01V8.72h-1.728c-.282 0-.68.145-.68.762v1.642h2.449l-.281 2.794z"
                      />{" "}
                    </svg>
                    <span className="visually-hidden">Find us on Facebook</span>
                  </a>
                  <a
                    className="social-link"
                    title="Twitter"
                    href="https://twitter.com/nurserylive"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                    >
                      {" "}
                      <path
                        fill="currentColor"
                        d="M20.218 9.925a3.083 3.083 0 0 0 1.351-1.7 6.156 6.156 0 0 1-1.952.746 3.074 3.074 0 0 0-5.238 2.804 8.727 8.727 0 0 1-6.336-3.212 3.073 3.073 0 0 0 .951 4.104 3.062 3.062 0 0 1-1.392-.385v.039c0 1.49 1.06 2.732 2.466 3.014a3.078 3.078 0 0 1-1.389.053 3.077 3.077 0 0 0 2.872 2.135A6.168 6.168 0 0 1 7 18.795a8.7 8.7 0 0 0 4.712 1.382c5.654 0 8.746-4.685 8.746-8.747 0-.133-.003-.265-.009-.397a6.248 6.248 0 0 0 1.534-1.592 6.146 6.146 0 0 1-1.765.484z"
                      />{" "}
                    </svg>
                    <span className="visually-hidden">Find us on Twitter</span>
                  </a>
                  <a
                    className="social-link"
                    title="Pinterest"
                    href="https://pinterest.com/nurserylive"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                    >
                      {" "}
                      <path
                        fill="currentColor"
                        d="M13.914 6a7.913 7.913 0 0 0-2.885 15.281c-.07-.626-.132-1.586.028-2.27.144-.618.928-3.933.928-3.933s-.238-.475-.238-1.175c0-1.098.64-1.922 1.433-1.922.675 0 1 .507 1 1.115 0 .68-.43 1.694-.654 2.634-.188.789.395 1.43 1.172 1.43 1.405 0 2.487-1.482 2.487-3.622 0-1.894-1.361-3.219-3.306-3.219-2.251 0-3.571 1.689-3.571 3.434 0 .68.26 1.409.587 1.805.065.08.074.149.056.228-.06.25-.194.787-.22.897-.035.144-.114.176-.266.106-.987-.46-1.606-1.905-1.606-3.066 0-2.497 1.814-4.787 5.23-4.787 2.744 0 4.878 1.955 4.878 4.57 0 2.726-1.72 4.922-4.108 4.922-.801 0-1.555-.418-1.813-.91l-.495 1.88c-.178.688-.66 1.55-.983 2.075a7.914 7.914 0 0 0 10.258-7.56 7.914 7.914 0 0 0-7.913-7.912V6z"
                      />{" "}
                    </svg>
                    <span className="visually-hidden">
                      Find us on Pinterest
                    </span>
                  </a>
                  <a
                    className="social-link"
                    title="Instagram"
                    href="https://instagram.com/nurserylive_"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                    >
                      {" "}
                      <path
                        fill="currentColor"
                        d="M11.114 7.042c-.745.034-1.254.152-1.7.326-.46.178-.85.418-1.24.807-.388.389-.628.78-.806 1.24-.174.445-.292.954-.326 1.699C7.008 11.86 7 12.099 7 14c0 1.901.008 2.14.042 2.886.034.745.152 1.254.326 1.7.178.46.418.85.807 1.24.389.388.78.628 1.24.807.445.173.954.29 1.699.325.747.034.985.042 2.886.042 1.901 0 2.14-.008 2.886-.042.745-.034 1.254-.152 1.7-.325.46-.18.85-.419 1.24-.808.388-.389.628-.78.807-1.24.173-.445.29-.954.325-1.699.034-.747.042-.985.042-2.886 0-1.901-.008-2.14-.042-2.886-.034-.745-.152-1.254-.325-1.7a3.432 3.432 0 0 0-.808-1.24c-.389-.388-.78-.628-1.24-.806-.445-.174-.954-.292-1.699-.326C16.14 7.008 15.901 7 14 7c-1.901 0-2.14.008-2.886.042zM10.405 14a3.595 3.595 0 1 0 7.19 0 3.595 3.595 0 0 0-7.19 0zM14 16.333a2.333 2.333 0 1 1 0-4.666 2.333 2.333 0 0 1 0 4.666zm4.9-6.323a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0z"
                      />{" "}
                    </svg>
                    <span className="visually-hidden">
                      Find us on Instagram
                    </span>
                  </a>
                  <a
                    className="social-link"
                    title="Youtube"
                    href="https://www.youtube.com/nurserylive"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                    >
                      {" "}
                      <path
                        fill="currentColor"
                        d="M11.958 16.23v-4.22l4.058 2.117-4.058 2.102zm8.91-4.951s-.147-1.035-.597-1.491c-.571-.598-1.211-.601-1.505-.636C16.664 9 13.512 9 13.512 9h-.006s-3.153 0-5.254.152c-.294.035-.934.038-1.505.636-.45.456-.597 1.49-.597 1.49S6 12.495 6 13.71v1.14c0 1.215.15 2.43.15 2.43s.147 1.035.597 1.49c.571.599 1.322.58 1.656.643 1.201.115 5.106.15 5.106.15s3.155-.004 5.257-.156c.294-.035.934-.038 1.505-.636.45-.456.597-1.49.597-1.49s.15-1.216.15-2.431v-1.14c0-1.215-.15-2.43-.15-2.43z"
                      />{" "}
                    </svg>
                    <span className="visually-hidden">Find us on Youtube</span>
                  </a>
                  <a
                    className="social-link"
                    title="LinkedIn"
                    href="https://www.linkedin.com/company/nurserylive/"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="28"
                      viewBox="-12 -10 50 50"
                    >
                      {" "}
                      <path
                        fill="currentColor"
                        d="M9.7 9.8h4.8v2.5c.7-1.4 2.5-2.8 5.1-2.8 5.2 0 6.4 3 6.4 8.4V28h-5.2v-8.8c0-3.1-.7-4.9-2.5-4.9-2.4 0-3.4 1.9-3.4 4.9V28H9.7V9.8zm-9 18H6V9.5H.7v18.3zm6-24.2c0 2-1.5 3.5-3.4 3.5C1.5 7.1 0 5.5 0 3.6 0 1.6 1.5 0 3.3 0c1.9 0 3.4 1.6 3.4 3.6z"
                      />{" "}
                    </svg>
                    <span className="visually-hidden">Find us on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="utility-bar__mobile"
          style={{ display: 'none' }} 
          data-utility-menu-mobile
        >
          <span className="utility-bar__mobile__border"></span>

          <div className="utility-bar__mobile-nav  utility-bar__mobile-nav--below ">
            <ul
              className="
    navmenu
    navmenu-depth-1
  "
              data-navmenu
            >
              <li className="navmenu-item navmenu-id-rewards">
                <a
                  className="
          navmenu-link
          navmenu-link-depth-1
          
        "
                  href="pages/nurserylive-loyalty-program.html#smile-home"
                >
                  Rewards
                </a>
              </li>
              <li className="navmenu-item navmenu-id-help">
                <a
                  className="
          navmenu-link
          navmenu-link-depth-1
        "
                  href="https://support.nurserylive.com/support/home"
                >
                  Help
                </a>
              </li>
              <li className="navmenu-item navmenu-id-track-order">
                <a
                  className="
          navmenu-link
          navmenu-link-depth-1
          
        "
                  href="pages/order-tracking.html"
                >
                  Track Order
                </a>
              </li>
              <li className="navmenu-item navmenu-id-orders">
                <a
                  className="
          navmenu-link
          navmenu-link-depth-1
          
        "
                  href="account/login4236.html"
                >
                  Orders
                </a>
              </li>
              <li className="navmenu-item navmenu-id-offers">
                <a
                  className="
          navmenu-link
          navmenu-link-depth-1
          
        "
                  href="pages/offers.html"
                >
                  Offers
                </a>
              </li>
              <li className="navmenu-item navmenu-id-corporate">
                <a
                  className="
          navmenu-link
          navmenu-link-depth-1
          
        "
                  href="pages/corporate-gifting.html"
                >
                  Corporate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="utility-bar__mobile-disclosure"
          style={{ display: 'none' }} 
          data-utility-bar-mobile
        >
          <div
            className="utility-bar__social-container--mobile utility-bar__social-list"
            data-utility-social-mobile
          >
            <div className="social-icons">
              <a
                className="social-link"
                title="Facebook"
                href="https://facebook.com/nurserylive"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                >
                  {" "}
                  <path
                    fill="currentColor"
                    d="M16.913 13.919h-2.17v7.907h-3.215V13.92H10v-2.794h1.528V9.316c0-1.294.601-3.316 3.245-3.316l2.38.01V8.72h-1.728c-.282 0-.68.145-.68.762v1.642h2.449l-.281 2.794z"
                  />{" "}
                </svg>
                <span className="visually-hidden">Find us on Facebook</span>
              </a>
              <a
                className="social-link"
                title="Twitter"
                href="https://twitter.com/nurserylive"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                >
                  {" "}
                  <path
                    fill="currentColor"
                    d="M20.218 9.925a3.083 3.083 0 0 0 1.351-1.7 6.156 6.156 0 0 1-1.952.746 3.074 3.074 0 0 0-5.238 2.804 8.727 8.727 0 0 1-6.336-3.212 3.073 3.073 0 0 0 .951 4.104 3.062 3.062 0 0 1-1.392-.385v.039c0 1.49 1.06 2.732 2.466 3.014a3.078 3.078 0 0 1-1.389.053 3.077 3.077 0 0 0 2.872 2.135A6.168 6.168 0 0 1 7 18.795a8.7 8.7 0 0 0 4.712 1.382c5.654 0 8.746-4.685 8.746-8.747 0-.133-.003-.265-.009-.397a6.248 6.248 0 0 0 1.534-1.592 6.146 6.146 0 0 1-1.765.484z"
                  />{" "}
                </svg>
                <span className="visually-hidden">Find us on Twitter</span>
              </a>

              <a
                className="social-link"
                title="Pinterest"
                href="https://pinterest.com/nurserylive"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                >
                  {" "}
                  <path
                    fill="currentColor"
                    d="M13.914 6a7.913 7.913 0 0 0-2.885 15.281c-.07-.626-.132-1.586.028-2.27.144-.618.928-3.933.928-3.933s-.238-.475-.238-1.175c0-1.098.64-1.922 1.433-1.922.675 0 1 .507 1 1.115 0 .68-.43 1.694-.654 2.634-.188.789.395 1.43 1.172 1.43 1.405 0 2.487-1.482 2.487-3.622 0-1.894-1.361-3.219-3.306-3.219-2.251 0-3.571 1.689-3.571 3.434 0 .68.26 1.409.587 1.805.065.08.074.149.056.228-.06.25-.194.787-.22.897-.035.144-.114.176-.266.106-.987-.46-1.606-1.905-1.606-3.066 0-2.497 1.814-4.787 5.23-4.787 2.744 0 4.878 1.955 4.878 4.57 0 2.726-1.72 4.922-4.108 4.922-.801 0-1.555-.418-1.813-.91l-.495 1.88c-.178.688-.66 1.55-.983 2.075a7.914 7.914 0 0 0 10.258-7.56 7.914 7.914 0 0 0-7.913-7.912V6z"
                  />{" "}
                </svg>
                <span className="visually-hidden">Find us on Pinterest</span>
              </a>

              <a
                className="social-link"
                title="Instagram"
                href="https://instagram.com/nurserylive_"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                >
                  {" "}
                  <path
                    fill="currentColor"
                    d="M11.114 7.042c-.745.034-1.254.152-1.7.326-.46.178-.85.418-1.24.807-.388.389-.628.78-.806 1.24-.174.445-.292.954-.326 1.699C7.008 11.86 7 12.099 7 14c0 1.901.008 2.14.042 2.886.034.745.152 1.254.326 1.7.178.46.418.85.807 1.24.389.388.78.628 1.24.807.445.173.954.29 1.699.325.747.034.985.042 2.886.042 1.901 0 2.14-.008 2.886-.042.745-.034 1.254-.152 1.7-.325.46-.18.85-.419 1.24-.808.388-.389.628-.78.807-1.24.173-.445.29-.954.325-1.699.034-.747.042-.985.042-2.886 0-1.901-.008-2.14-.042-2.886-.034-.745-.152-1.254-.325-1.7a3.432 3.432 0 0 0-.808-1.24c-.389-.388-.78-.628-1.24-.806-.445-.174-.954-.292-1.699-.326C16.14 7.008 15.901 7 14 7c-1.901 0-2.14.008-2.886.042zM10.405 14a3.595 3.595 0 1 0 7.19 0 3.595 3.595 0 0 0-7.19 0zM14 16.333a2.333 2.333 0 1 1 0-4.666 2.333 2.333 0 0 1 0 4.666zm4.9-6.323a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0z"
                  />{" "}
                </svg>
                <span className="visually-hidden">Find us on Instagram</span>
              </a>

              <a
                className="social-link"
                title="Youtube"
                href="https://www.youtube.com/nurserylive"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                >
                  {" "}
                  <path
                    fill="currentColor"
                    d="M11.958 16.23v-4.22l4.058 2.117-4.058 2.102zm8.91-4.951s-.147-1.035-.597-1.491c-.571-.598-1.211-.601-1.505-.636C16.664 9 13.512 9 13.512 9h-.006s-3.153 0-5.254.152c-.294.035-.934.038-1.505.636-.45.456-.597 1.49-.597 1.49S6 12.495 6 13.71v1.14c0 1.215.15 2.43.15 2.43s.147 1.035.597 1.49c.571.599 1.322.58 1.656.643 1.201.115 5.106.15 5.106.15s3.155-.004 5.257-.156c.294-.035.934-.038 1.505-.636.45-.456.597-1.49.597-1.49s.15-1.216.15-2.431v-1.14c0-1.215-.15-2.43-.15-2.43z"
                  />{" "}
                </svg>
                <span className="visually-hidden">Find us on Youtube</span>
              </a>
              <a
                className="social-link"
                title="LinkedIn"
                href="https://www.linkedin.com/company/nurserylive/"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="28"
                  viewBox="-12 -10 50 50"
                >
                  {" "}
                  <path
                    fill="currentColor"
                    d="M9.7 9.8h4.8v2.5c.7-1.4 2.5-2.8 5.1-2.8 5.2 0 6.4 3 6.4 8.4V28h-5.2v-8.8c0-3.1-.7-4.9-2.5-4.9-2.4 0-3.4 1.9-3.4 4.9V28H9.7V9.8zm-9 18H6V9.5H.7v18.3zm6-24.2c0 2-1.5 3.5-3.4 3.5C1.5 7.1 0 5.5 0 3.6 0 1.6 1.5 0 3.3 0c1.9 0 3.4 1.6 3.4 3.6z"
                  />{" "}
                </svg>
                <span className="visually-hidden">Find us on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
