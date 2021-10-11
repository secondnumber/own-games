import React from 'react';
import Cookies from 'js-cookie';
import HeaderContainer from '../../common/Header/HeaderContainer';
import SliderContainer from './Slider/SliderContainer';
import GamesContainer from './Games/GamesContainer';
import PostsContainer from './Posts/PostsContainer';
import TestimonialsContainer from './Testimonials/TestimonialsContainer';
import GalleryContainer from './Gallery/GalleryContainer';
import VideosContainer from './Videos/VideosContainer';
import PriceListContainer from '../../common/PriceList/PriceListContainer';
import QuestionsContainer from './Questions/QuestionsContainer';
import FormSubscribe from '../../common/Subscribe/Subscribe';
import FooterContainer from '../../common/Footer/FooterContainer';
import ScrollButtonContainer from '../../common/ScrollButton/ScrollButtonContainer';
import classes from './MainPage.module.scss';
import amplitude from 'amplitude-js';

amplitude.getInstance().logEvent('VIEW_MAIN_PAGE');

const MainPage = (props) => {
  const handleSetVisit = () => {
    Cookies.set('amp_data', 'firstTime');
  };
  return (
    <div className={classes.wrapper}>
      <button onClick={handleSetVisit}>Set visit</button>
      <ScrollButtonContainer />
      <HeaderContainer />
      <SliderContainer />
      <GamesContainer />
      <PostsContainer />
      <TestimonialsContainer />
      <GalleryContainer />
      <VideosContainer />
      <PriceListContainer />
      <QuestionsContainer />
      <FormSubscribe />
      <FooterContainer />
    </div>
  );
};

export default MainPage;
