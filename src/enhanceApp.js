import React from 'react';

export default (Component) => {
  return (props) => (
    <div style={{ color: 'red' }}>
      <Component {...props} />
    </div>
  );
};
