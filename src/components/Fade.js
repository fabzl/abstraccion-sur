import React from "react";
import Transition from "react-transition-group/Transition";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={300} mountOnEnter unmountOnExit>
    {state =>
      React.cloneElement(children, {
        style: { ...defaultStyle, ...transitionStyles[state] }
      })
    }
  </Transition>
);

export default Fade;
