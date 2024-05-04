// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Home = () => {
//   const {t} = useTranslation(["home"])
//   return (
//     <div className='container mt-5'>
//       <h1 className='text-center'>{t("home")}</h1>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const {t} = useTranslation("home");
  // console.log(t);

  return (
    <>
    <div className="container mt-5 col-9 col-md-6">
      <div className="hero-section">
        <h1 className="text-center">{t('welcometoourapp')}</h1>
        <div className="text-center">
          <button className="btn btn-primary">{t('getstarted')}</button>
        </div>
      </div>

      <div className="call-to-action mt-5">
        <h2 className="text-center">{t('joinourcommunity')}</h2>
        <div className="text-center">
          <button className="btn btn-success">{t('signup')}</button>
        </div>
      </div>
    </div>

    <footer className="footer bg-dark text-white fixed-bottom">
        <div className="container-fluid text-center pt-1 ">
          <p>&copy; 2024 Irum Shahzadi. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;

