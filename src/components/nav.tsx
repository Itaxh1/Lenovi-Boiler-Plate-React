import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  const [dropdown, setDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 w-100 d-flex align-items-center border-0">
        {/* Logo */}
        <a className="navbar-brand fw-bold me-4" href="#">
          <span className="fw-semibold">LINOVII</span>
        </a>

        {/* Right Icons */}
        <div className="d-flex align-items-center ms-auto">
          <div className="input-group border-bottom border-secondary me-3 border-0">
            <span className="input-group-text bg-transparent border-0">
              <FaSearch />
            </span>
            <input type="text" className="form-control border-0" placeholder="Search" />
          </div>
          <FaUser className="me-3" size={20} />
          <FaHeart className="me-3" size={20} />
          <FaShoppingBag size={20} />
        </div>
      </nav>

      {/* Navigation Links Below Navbar */}
      <div className="bg-white w-100 text-center py-2">
        <ul className="nav justify-content-center gap-4">
          {["WOMEN", "MEN", "KIDS", "SALE"].map((menu) => (
            <li
              className="nav-item position-relative"
              key={menu}
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
              style={{ paddingBottom: "20px" }} // Ensures hover doesn't break
            >
              <a className="nav-link text-dark fw-bold" href="#">
                {menu}
              </a>
              {dropdown === menu && (
                <div
                  className="position-absolute bg-light shadow p-3 border-0"
                  style={{
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    minWidth: "600px",
                    zIndex: 1000,
                  }}
                  onMouseEnter={() => setDropdown(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="d-flex flex-row">
                    <div className="me-4">
                      <h6 className="fw-bold">New Arrivals</h6>
                      <p>View All</p>
                      <p>Clothes</p>
                      <p>Shoes</p>
                      <p>Accessories</p>
                    </div>
                    <div className="me-4">
                      <h6 className="fw-bold">Shop By Category</h6>
                      <p>View All</p>
                      <p>Dresses</p>
                      <p>Tops</p>
                      <p>Bottoms</p>
                      <p>Outerwear</p>
                      <p>Shoes</p>
                      <p>Accessories</p>
                    </div>
                    <div>
                      <h6 className="fw-bold">Shop By Style</h6>
                      <p>To the Office</p>
                      <p>To a Wedding</p>
                      <p>For a Night Out</p>
                      <p>On a Casual Weekend</p>
                      <p>On a Vacation</p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
