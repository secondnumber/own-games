import React from 'react';
import classes from './Price.module.scss';
import Button from '../../Button/Button';

const Price = (props) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>{props.name}</h1>
      <div
        className={`${
          props.color === 'cyan'
            ? classes.cyan
            : props.color === 'blue'
            ? classes.blue
            : classes.lilac
        } ${classes.value}`}
      >
        <span className={classes.currency}>{props.currency} </span>
        <span className={classes.integer}>{props.integer} </span>
        <span className={classes.fraction}>{props.fraction}</span>
        <span className={classes.period}>{props.period}</span>
      </div>
      <ul className={classes.features}>
        <li className={classes.feature}>{props.featureOne}</li>
        <li className={classes.feature}>{props.featureTwo}</li>
        <li className={classes.feature}>{props.featureThree}</li>
      </ul>
      <div className={classes.btnBlock}>
        <Button name={'Buy plan now'} style={'buttonContour'} />
      </div>
    </div>
  );
};

export default Price;
