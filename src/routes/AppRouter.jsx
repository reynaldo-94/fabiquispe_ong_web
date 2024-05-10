import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { BasicLayout } from '../layouts/BasicLayout';
import { HomePage } from '../pages/HomePage';
import { ErrorPage } from '../pages/ErrorPage';
import { UsPage } from '../pages/UsPage';
import { Staff } from '../pages/Staff';
import { ContactUs } from '../pages/ContactUs';
import { AreaInfantilPage } from '../pages/areas/AreaInfantilPage';
import { Loading } from '../components/Loading/Loading';
import { TerapiaLenguajePage } from '../pages/services/TerapiaLenguajePage';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<BasicLayout />}>
      <Route index element={<HomePage />} />
      <Route path="nosotros" element={<UsPage />} />
      <Route path="staff" element={<Staff />} />
      <Route path="contactanos" element={<ContactUs />} />
      <Route path="area-infantil-adolescentes" element={<AreaInfantilPage />} /> 
      <Route path="terapia-lenguaje" element={<TerapiaLenguajePage />} />      
      <Route path="loading" element={<Loading />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
)

