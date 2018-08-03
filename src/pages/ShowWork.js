import React from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";
import MainImage from "../components/MainImage";
import Desc from "../components/Desc";

const ShowWork = props => {
  const { posts, dataArtists, dataArtwork, dataDocuments, language } = props;
  const items = dataArtists;

  // Chequear item
  const { link } = props.match.params;

  console.log("link: ", props.match.params);
  const key = items
    .map(element =>
      element.acf.nombre
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/á/gi, "a")
        .replace(/é/gi, "e")
        .replace(/ó/gi, "o")
        .replace(/ú/gi, "u")
        .replace(/ñ/gi, "n")
    )

    .indexOf(link);
  // if (key < 0) return <Redirect to="/" />;
  const {
    biografia,
    biography,
    fecha_de_nacimiento,
    fecha_de_fallecimiento,
    fotoartista: { url },
    nombre,
    obras,
    videomain,
    videos
  } = items[key].acf;
  console.log("element.acf.nombre :", " nombreURL: ", link);
  // const postContentData = items[key].content.rendered;

  // Sacar los Prev o nextLink
  const prevLink =
    key === 0 ? items[items.length - 1].slug : items[key - 1].slug;
  const nextLink =
    key === items.length - 1 ? items[0].slug : items[key + 1].slug;

  return (
    <div>
      <MainImage
        nombre={nombre}
        url={url}
        videoUrl={videomain}
        prevLink={prevLink}
        nextLink={nextLink}
      />

      <Desc
        title={nombre}
        desc={language === "es" ? biografia : biography}
        obras={obras}
        videomain={videomain}
        videos={videos}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.data.posts,
    dataArtwork: state.data.artwork,
    dataArtists: state.data.artists,
    dataDocuments: state.data.documents,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(ShowWork);
