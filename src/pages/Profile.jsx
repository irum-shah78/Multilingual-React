import React from 'react';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const {t} = useTranslation(["common", "profile"]);


  return (
    <div className='container mt-5 col-9 col-md-6'>
      <h1 className='text-center fw-bold'>{t("common:profile")}</h1>

      <div className="form-group">
        <label htmlFor="" className="fw-bold">{t("profile:name")}:</label>
        <input type="text" className='form-control mt-1' placeholder='Enter name' />
      </div>

      <div className="form-group mt-2">
        <label htmlFor="" className="fw-bold">{t("profile:age")}:</label>
        <input type="text" className='form-control mt-1' placeholder='Enter age' />
      </div>

      <div className="form-group mt-2">
        <label htmlFor="" className="fw-bold">{t("profile:email")}:</label>
        <input type="text" className='form-control mt-1' placeholder='Enter email' />
      </div>
       <br />
      <div className="text-center">
        <button className='btn btn-dark'>
        {t("common:submit")}
        </button>
      </div>
    </div>
  );
};

export default Profile;
