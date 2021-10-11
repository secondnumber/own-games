import React, { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import amplitude from 'amplitude-js';
import Cookies from 'js-cookie';
import moment from 'moment';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import MainPage from './components/Pages/MainPage/MainPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import AboutPageContainer from './components/Pages/AboutPage/AboutPageContainer';
import TeamPageContainer from './components/Pages/TeamPage/TeamPageContainer';
import PriceListPageContainer from './components/Pages/PriceListPage/PriceListPageContainer';
import GalleryPageContainer from './components/Pages/GalleryPage/GalleryPageGontainer';
import SingleImagePageContainer from './components/Pages/GalleryPage/SingleImagePage/SingleImagePageGontainer';
import TestimonialsPageContainer from './components/Pages/TestimonialsPage/TestimonialsPageContainer';
import ContactsPageContainer from './components/Pages/ContactsPage/ContactsPageContainer';
import GamesPageContainer from './components/Pages/GamesPage/GamesPageContainer';
import FaqPageContainer from './components/Pages/FaqPage/FaqPageContainer';
import BlogPageContainer from './components/Pages/BlogPage/BlogPageContainer';
import SinglePostPageContainer from './components/Pages/BlogPage/SinglePostPage/SinglePostPageGontainer';
import StatisticPageContainer from './components/Pages/StatisticPage/StatisticPageContainer';

library.add(fab);

//eslint-enable @typescript-eslint/no-explicit-any

console.log(Cookies.get('amp_data'));

console.log(moment(new Date()).dayOfYear());
console.log(moment(new Date()).week());
console.log(Number(moment(new Date()).month()) + 1);
console.log(window.location.href);
const url =
  'https://own-games.netlify.app/?utm_medium=cpc&utm_source=github&utm_campaign=mycampaign';
const utmData = [...url.matchAll(/utm_([^=]+)=([^&]*)/g)].reduce(
  (acc, [, k, v]) => ((acc[k] = v), acc),
  {}
);
console.log(utmData);

const tagManagerArgs = {
  gtmId: 'GTM-5CDPBQS',
};

if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'development') {
  TagManager.initialize(tagManagerArgs);
}

const userId = '020022';
amplitude
  .getInstance()
  .init('11421c2f458d0505c29f2ccb6080d92c', userId && userId);

const App = (props) => {
  const [isFirstTime, setIsFirstTime] = useState(null);

  useEffect(() => {
    if (Cookies.get('amp_data') === 'visited') {
      setIsFirstTime(false);
    } else setIsFirstTime(true);
    Cookies.set('amp_data', 'visited');
    const userProperties = {
      city: 'Moscow',
      firstTime: isFirstTime,
      firstVisitDay: moment(new Date()).dayOfYear(),
      firstVisitWeek: moment(new Date()).week(),
      firstVisitMonth: Number(moment(new Date()).month()) + 1,
    };
    amplitude.getInstance().setUserProperties(userProperties);
  }, []);

  const eventProperties = {
    firstTime: isFirstTime,
  };

  console.log(isFirstTime);

  if (isFirstTime !== null) {
    amplitude.getInstance().logEvent('VIEW_MAIN_PAGE', eventProperties);
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/pages/about">
          <AboutPageContainer />
        </Route>
        <Route exact path="/pages/faq">
          <FaqPageContainer />
        </Route>
        <Route exact path="/pages/team">
          <TeamPageContainer />
        </Route>
        <Route exact path="/pages/price">
          <PriceListPageContainer />
        </Route>
        <Route exact path="/pages/testimonials">
          <TestimonialsPageContainer />
        </Route>
        <Route exact path="/pages/statistic">
          <StatisticPageContainer />
        </Route>
        <Route exact path="/gallery">
          <GalleryPageContainer />
        </Route>
        <Route exact path="/games">
          <GamesPageContainer />
        </Route>
        <Route exact path="/gallery/:imageId?">
          <SingleImagePageContainer />
        </Route>
        <Route exact path="/contacts">
          <ContactsPageContainer />
        </Route>
        <Route exact path="/blog">
          <BlogPageContainer />
        </Route>
        <Route exact path="/blog/:postId?">
          <SinglePostPageContainer />
        </Route>
        <Route exact path="/pages/404">
          <NotFoundPage />
        </Route>
        <Route exact path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
