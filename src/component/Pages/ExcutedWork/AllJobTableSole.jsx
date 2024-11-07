// src/App.js
import React from 'react';
import JobTableSole from './JobTableSole';
import { useTranslation } from "react-i18next";

function AllJobTableSole() {

  const { t } = useTranslation();
  

  return (
    <div className="App">
       <div className="section-title ">
        <div className="d-flex justify-content-center">
          <h2>
            <a href="#" className="">
            {t("header.CompletedWorks")}
            </a>
          </h2>
        </div>
      </div>
      <JobTableSole  />
    </div>
  );
}

export default AllJobTableSole;
