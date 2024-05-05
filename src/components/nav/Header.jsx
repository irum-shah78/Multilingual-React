import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Header = () => {
  const { t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value);
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className="container-fluid">
        <Link to="/" className='navbar-brand ms-2'>
          {t("codingform")}
        </Link>
        <button class="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <select className='nav-link bg-dark border-0'
                value={localStorage.getItem("i18nextLng")}
                onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
              </select>
            </li>

            <li className="nav-item ms-2 me-2">
              <Link to="/profile" className='nav-link'>
                {t("profile")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
