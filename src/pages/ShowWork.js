import React from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";
import MainImage from "../components/MainImage";
import Desc from "../components/Desc";
import styled from "styled-components";
import { colors } from "../styles/globals";
import { GridArt } from "../components/GridArt";

const Artgrid = styled.div`
}
`;

const ArtHolder = styled.ul`
    display:flex;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    transition: all 0.3s;
}
`;

const ArtImg = styled.img`
  margin-top:10vh;
  height:50vh;
  line-height: .4em;
}
`;

const ArtDescription = styled.p`
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`;

const ArtTitle = styled.p`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  color: ${colors.black};
`;

const ShowWork = props => {
  const { posts, dataArtists, dataArtwork, language } = props;
  const items = dataArtists;
  const artwork = dataArtwork;

  // Chequear item
  const { link } = props.match.params;

  const key = items
    .map(element =>
      element.acf.nombre
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/á/gi, "a")
        .replace(/é/gi, "e")
        .replace(/í/gi, "i")
        .replace(/ó/gi, "o")
        .replace(/ú/gi, "u")
        .replace(/ñ/gi, "n")
    )
    .indexOf(link);

  // if (key < 0) return <Redirect to="/artists" />;
  const {
    biografia,
    biography,
    fecha_de_nacimiento,
    fecha_de_fallecimiento,
    fotoartista: { url },
    nombre,
    videomain,
    videos
  } = items[key].acf;

  // const postContentData = items[key].content.rendered;

  ///// inject from timeline

  // const keyArt = artwork.map(element => element.acf.autor).indexOf(nombre);

  // const keyArt = artwork.map(element => element.acf.autor).indexOf(nombre);

  function isSelectedArtist(artpiece) {
    if (artpiece.acf.autor === nombre) {
      console.log("isSelectedArtist: ", artpiece.acf.autor === nombre);
      console.log(artpiece, nombre);
    }
    return artpiece.acf.autor === nombre;
  }
  var art = artwork.filter(isSelectedArtist);
  console.log(art);

  // const {
  //   // ano,
  //   autor,
  //   coleccion,
  //   collection,
  //   dimensiones,
  //   exhibition,
  //   exposicion,
  //   fotos,
  //   imagen_grande: { url_art_g },
  //   imagen_mediana: { url_art_m },
  //   imagen_pequena: { url_art_s },
  //   tecnica,
  //   tecnique,
  //   titulo,
  //   videovisita
  // } = keyArt[key].acf;

  // console.log("keyArt : ", keyArt, key, nombre);

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
        videomain={videomain}
        videos={videos}
      />
      <ArtHolder>
        {art.map(p => (
          <Artgrid key={p.id}>
            <ArtImg
              src={p.acf.imagen_grande.sizes.large}
              alt=""
              className="img-responsive"
            />
            <ArtTitle>{p.acf.titulo}</ArtTitle>
            <ArtDescription>{p.acf.ano}</ArtDescription>
            <ArtDescription>{p.acf.artista}</ArtDescription>
            <ArtDescription>{p.acf.tecnica}</ArtDescription>
            <ArtDescription>{p.acf.dimensiones}</ArtDescription>
          </Artgrid>
        ))}
      </ArtHolder>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.data.posts,
    dataArtwork: state.data.artwork,
    dataArtists: state.data.artists,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(ShowWork);
