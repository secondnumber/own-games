import React, { useEffect } from 'react';
import classes from './PriceListPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import PriceListContainer from '../../common/PriceList/PriceListContainer';
import { sendAmplitudeData } from '../../../utils/amp/amplitude';

const PriceListPage = (props) => {
  useEffect(() => {
    sendAmplitudeData('VISITED_PRICE_PAGE');
  }, []);
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <PriceListContainer />
      <FooterContainer />
    </div>
  );
};

export default PriceListPage;
