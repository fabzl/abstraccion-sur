import React from "react";
import { connect } from "react-redux";
import Grid from "../components/Grid";
import { smoothScroll } from "../components/Footer";

const Work = props => (
  <div>
    {smoothScroll()}
    <Grid data={props.data} language={props.language} link large />
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Work);
