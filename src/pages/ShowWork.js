import React from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";
import MainImage from "../components/MainImage";
import Desc from "../components/Desc";
import styled from "styled-components";
import { colors, colorRandomFromArray } from "../styles/globals";
import { GridArt } from "../components/GridArt";
import { Link } from "react-router-dom";
import { playVideo } from "../redux/actions";
import ReactPlayer from "react-player";

const LinkTo = styled(Link)``;

const Arrow = styled(Link)`
  color: ${colors.white};
  height: 92vh;
  align-items: bottom;
  display: flex;
  position: fixed;
  width: 7vw;
  justify-content: center;
  background: transparent;

  & svg {
    transition: all 0.3s;
    transform: translateY(38vh);
  }
  &.next {
    right: 0;
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

const Artgrid = styled.div`
  padding-left: 20vw;
`;

const BlueSide = styled.div`
  width: 35vw;
  margin-right: 5vw;
  height: 92vh;
  display: inline-flex;
  flex-direction: column;
  background: ${colors.black};
  /* position: absolute; */
  padding-right: 2rem;
`;

const BigSide = styled.div`
  /* width: 60%; */
  display: inline-flex;
  flex-direction: row;
`;

export const ArtHolder = styled.ul`
  display: flex;
  transition: all 0.3s;
  /* border: 1px solid red; */
  padding-top: 10vh;
`;

const ArtistName = styled.h1`
  color: ${colors.white};
  font-weight: 700;
  letter-spacing: 130%;
  /* line-height: em; */
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 7rem;
  text-transform: uppercase;
  word-spacing: 100vw;
  text-align: right;
`;

const ArtImg = styled.img`
  height: 60vmin;
  width: auto;
  object-fit: cover;
`;

const ArtistImage = styled.img`
  object-fit: cover;
  width: 50vw;
  height: auto;
`;

export const ContainerCluster = styled.div`
  height: 92vh;
  padding: 0 10vw;
  background: ${colors.white};
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
  const { dataArtists, dataArtwork, language } = props;
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

  //   ano: "2016"
  // autor: "Alejandro Siña"
  // coleccion: "Colección Privada"
  // collection: "Private Collection"
  // dimensiones: "170 x 20 x 50 cm "
  // exhibition: "The forms revolution: 60 years of abstract art in Chile"
  // exposicion: "La revolución de las formas: 60 años de arte abstracto en Chile"
  // fotos: false
  // imagen_grande: {ID: 303, id: 303, title: "AlejandroSiña_Móvil-Triple_Big", filename: "AlejandroSiña_Móvil-Triple_Big.jpg", filesize: 5071720, …}
  // imagen_mediana: {ID: 304, id: 304, title: "AlejandroSiña_Móvil-Triple_Med", filename: "AlejandroSiña_Móvil-Triple_Med.jpg", filesize: 1489452, …}
  // imagen_pequena: {ID: 305, id: 305, title: "AlejandroSiña_Móvil-Triple_Small", filename: "AlejandroSiña_Móvil-Triple_Small.jpg", filesize: 122912, …}
  // tecnica: "Neón de electrodo"
  // tecnique: "Neon electrode"
  // titulo: "Móvil Triple"
  // videovisita: ""
  // __proto__: Object

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
      <Arrow className="arrow-white next" to={nextLink}>
        <i className="fas fa-chevron-right fa-4x" />
      </Arrow>
      <Arrow className="arrow-white" to={prevLink}>
        <i className="fas fa-chevron-left fa-4x" />
      </Arrow>
      <BlueSide>
        <ArtistImage src={url} alt={nombre} />
        <ArtistName>{nombre}</ArtistName>
      </BlueSide>

      {/* <Center>
          <Play onClick={() => props.playVideo(props.videomain)}>
            <i className="far fa-play-circle fa-10x" />
          </Play>
        </Center> */}
      <ContainerCluster>
        <Desc title={nombre} desc={language === "es" ? biografia : biography} />
      </ContainerCluster>

      <ContainerCluster>
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
      </ContainerCluster>
      <ContainerCluster>
        <ReactPlayer
          url={videomain}
          playing={false}
          controls
          width="auto"
          height="92vh"
          onEnded={this.videoEnd}
        />
      </ContainerCluster>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dataArtwork: state.data.artwork,
    dataArtists: state.data.artists,
    language: state.data.language
  };
};

export default connect(
  mapStateToProps,
  { ContainerCluster, ArtHolder }
)(ShowWork);
