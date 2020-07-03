import React from 'react';
import classes from './BlogPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import InstaWidget from './InstaWidget/InstaWidget';
import BlogNewsletter from './BlogNewsletter/BlogNewsletter';
import Categories from './Categories/Categories';
import Twitter from './Twitter/Twitter';
import LatestPosts from './LatestPosts/LatestPosts';
import Calendar from './Calendar/Calendar';
import BlogSearch from './BlogSearch/BlogSearch';

const BlogPage = (props) => {
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <div className={classes.block}>
          <div className={classes.sidebar}>
            <InstaWidget />
            <BlogNewsletter />
            <Categories />
            <Twitter />
            <LatestPosts />
            <Calendar />
            <BlogSearch />
          </div>
          <div className={classes.content}>Content</div>
        </div>
        <FooterContainer />
      </div>
    </div>
  );
};

export default BlogPage;
