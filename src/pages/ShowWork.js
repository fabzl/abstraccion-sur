import React from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";
import MainImage from "../components/MainImage";
import Desc from "../components/Desc";
import styled from "styled-components";
import { colors } from "../styles/globals";
import { GridArt } from "../components/GridArt";
import { Link } from "react-router-dom";
import { playVideo } from "../redux/actions";
import ReactPlayer from "react-player";

const Arrow = styled(Link)`
  &.arrow-white {
    color: ${colors.white};
  }
  color: ${colors.black};
  height: 100%;
  align-items: top;
  display: flex;
  position: fixed;
  width: 10%;
  justify-content: center;
  background: transparent;
  & svg {
    transition: all 0.3s;
    transform: translateY(38vh);
  }
`;

const Play = styled.div`
  &:hover {
    opacity: 0.8;
  }
`;

const ShowWorkWrap = styled(Link)`
  display: flex;
  flex-direction: row;
`;

// const Left = styled.span`
//   &:hover {
//     padding-left: 15px;
//   }
// `;

// const Right = styled.span`
//   &:hover {
//     padding-right: 15px;
//   }
// `;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Artgrid = styled.div``;

const BlueSide = styled.div`
  width: 33%;
  height: 100vh;
  display: inline-flex;
  flex-direction: column;
  background: ${colors.black};
`;

const BigSide = styled.div`
  width: 60%;
  display: inline-flex;
`;

const ArtHolder = styled.ul`
    display:grid;
    transition: all 0.3s;
    border:1px solid red;
    padding-top: 35vh;
}
`;

const ArtImg = styled.img`
  
  height:10vh;
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

const mainDivStyle = {
  display: "flex"
};

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

  // console.log(art);

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
    <div style={mainDivStyle}>
      <BlueSide>
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

        <Arrow className="arrow-white" to={prevLink}>
          <i className="fas fa-chevron-left fa-4x" />
        </Arrow>
      </BlueSide>
      <BigSide>
        {/* <Center>
          <Play onClick={() => props.playVideo(props.videomain)}>
            <i className="far fa-play-circle fa-10x" />
          </Play>
        </Center> */}

        <ReactPlayer
          url={videomain}
          playing={false}
          controls
          width="640px"
          height="480px"
          onEnded={this.videoEnd}
        />

        <Arrow to={nextLink}>
          <i className="fas fa-chevron-right fa-4x" />
        </Arrow>

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
      </BigSide>
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
