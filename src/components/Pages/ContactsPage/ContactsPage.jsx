import React from 'react';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import classes from './ContactsPage.module.scss';
import Social from '../../common/SocialList/Social';
import Contact from './Contact/Contact';
import FormContact from '../../common/FormContact/FormContact';
import MapContainer from '../../common/Map/MapContainer';
import amplitude from 'amplitude-js';

const ContactsPage = (props) => {
  const submit = (values) => {
    console.log(values);
  };

  const eventProperties = {
    cont: 'test',
  };

  amplitude.getInstance().logEvent('VIEW_CONTACTS', eventProperties);

  let socialList = props.social.socialList.map((item) => (
    <Social key={item.id} icon={item.icon} link={item.link} />
  ));

  let contactList = props.contacts.contactsItems.map((item) => (
    <Contact
      key={item.id}
      icon={item.icon}
      name={item.name}
      value={item.value}
      color={item.color}
    />
  ));

  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <div className={classes.block}>
          <div className={classes.info}>
            <h1 className={classes.title}>{props.contacts.header}</h1>
            <p className={classes.description}>{props.contacts.description}</p>
            <ul className={classes.contactsList}>{contactList}</ul>
            <ul className={classes.socialList}>{socialList}</ul>
          </div>
          <div className={classes.form}>
            <FormContact onSubmit={submit} />
          </div>
        </div>
        <div className={classes.map}>
          <MapContainer />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default ContactsPage;
