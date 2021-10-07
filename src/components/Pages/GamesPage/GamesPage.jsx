import React from 'react';
import classes from './GamesPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import Game from './Game/Game';
import amplitude from 'amplitude-js';

amplitude.getInstance().logEvent('VIEW_GAMES_PAGE');

const GamesPage = (props) => {
  let gamesList = props.games.gamesList.map((el) => (
    <Game
      key={el.id}
      tag={el.tag}
      name={el.name}
      date={el.date}
      description={el.description}
      image={el.image}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <ul className={classes.block}>{gamesList}</ul>
      <FooterContainer />
    </div>
  );
};
export default GamesPage;
