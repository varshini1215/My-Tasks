import React from 'react';
import '../Styles/CompositionComponent.css'; 

const CompositionComponent = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="composition-wrapper">
       <WrappedComponent {...props} />
      </div>
    );
  };
};

export default CompositionComponent;
