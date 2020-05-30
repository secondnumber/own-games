import { combineReducers, createStore } from 'redux';
import aboutPageReducer from './reducers/aboutPageReducer';
import breadcrumbsReducer from './reducers/breadcrumbsReducer';
import socialReducer from './reducers/socialReducer';
import galleryReducer from './reducers/galleryReducer';
import gamesReducer from './reducers/gamesReducer';
import notFoundPageReducer from './reducers/notFoundPageReducer';
import postsReducer from './reducers/postsReducer';
import priceListReducer from './reducers/priceListReducer';
import questionsReducer from './reducers/questionsReducer';
import sliderReducer from './reducers/sliderReducer';
import testimonialsReducer from './reducers/testimonialsReducer';
import videosReducer from './reducers/videosReducer';
import teamPageReducer from './reducers/teamPageReducer';
import navigationReducer from './reducers/navigationReducer';

let reducers = combineReducers({
  aboutPage: aboutPageReducer,
  breadcrumbs: breadcrumbsReducer,
  social: socialReducer,
  gallery: galleryReducer,
  games: gamesReducer,
  navigation: navigationReducer,
  notFoundPage: notFoundPageReducer,
  posts: postsReducer,
  priceList: priceListReducer,
  questions: questionsReducer,
  slider: sliderReducer,
  testimonials: testimonialsReducer,
  videos: videosReducer,
  teamPage: teamPageReducer,
});

let store = createStore(reducers);

export default store;
