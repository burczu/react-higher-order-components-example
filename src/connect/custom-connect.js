import React from 'react';

// fake Redux stuff for the example purposes
const fakeState = {};
const fakeDispatch = () => {};

export default (mapStateToProps, mapDispatchToProps) => (Component) => {
  return (props) => {
    // the main purpose of this HOC - add Redux stuff to the Component's props
    const newProps = {
      ...props,
      ...mapStateToProps(fakeState),
      ...mapDispatchToProps(fakeDispatch)
    };

    return <Component {...newProps} />;
  };
};
