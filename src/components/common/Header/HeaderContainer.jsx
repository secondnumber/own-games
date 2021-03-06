import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

let mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
