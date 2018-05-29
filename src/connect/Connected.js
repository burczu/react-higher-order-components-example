import React from 'react';
import connect from './custom-connect';

const Connected = (props) => {
  return <p>{props.text}</p>;
}

const mapStateToProps = (state) => {
  return { ...state, text: 'Hello from fake state!' };
};

const mapDispatchToProps = (dispatch) => {
  return {}; // no actions defined yet
};

export default connect(mapStateToProps, mapDispatchToProps)(Connected);
