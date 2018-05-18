import React from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";
import MainImage from "../components/MainImage";
import Desc from "../components/Desc";

const ShowWork = props => {
  // Filtrar a solamente los que tienen avatar_picture
  // const items = props.data.filter(item => item.acf.avatar_picture);
  const { posts, language } = props;
  const items = posts;

  // Chequear item
  const { link } = props.match.params;
  const key = items.map(element => element.slug).indexOf(link);
  if (key < 0) return <Redirect to="/" />;

  const {
    avatar_picture: { url },
    nombre_del_proyecto,
    project_name,
    descripcion_del_proyecto,
    project_description,
    vimeourl,
    cliente
  } = items[key].acf;

  // const postContentData = items[key].content.rendered;

  // Sacar los Prev o nextLink
  const prevLink =
    key === 0 ? items[items.length - 1].slug : items[key - 1].slug;
  const nextLink =
    key === items.length - 1 ? items[0].slug : items[key + 1].slug;

  return (
    <div>
      <MainImage
        nombre_del_proyecto={
          language === "es" ? nombre_del_proyecto : project_name
        }
        url={url}
        videoUrl={vimeourl}
        prevLink={prevLink}
        nextLink={nextLink}
      />

      <Desc
        title={language === "es" ? nombre_del_proyecto : project_name}
        desc={
          language === "es" ? descripcion_del_proyecto : project_description
        }
        client={cliente}
        language={language}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.data.posts,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(ShowWork);
