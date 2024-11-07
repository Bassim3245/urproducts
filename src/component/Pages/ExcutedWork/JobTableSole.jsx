// src/components/JobTableSole.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JobTableSole.css';
import { BackendUrl } from '../api/api';
import { useTranslation } from 'react-i18next';

const JobTableSole = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/ExcutedWork/`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError("حدث خطأ أثناء جلب البيانات.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>{t("loading.loading")}</p>;
  if (error) return <p>{t("error.fetchError")}</p>;

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <table className="job-table-sole" style={{ textAlign: i18n.language === 'ar' ? 'right' : 'left' }}>
        <thead>
          <tr>
            
            <th>{t("job.Theinstitution")}</th>
            <th>{t("job.work")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{i18n.language === 'ar' ? row.title_ar : row.title}</td>
              <td>{i18n.language === 'ar' ? row.description_ar : row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTableSole;
