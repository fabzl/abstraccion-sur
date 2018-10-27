import React from "react";
// import { Redirect } from "react-router";

import { connect } from "react-redux";
// import MainImage from "../components/MainImage";
import Desc from "../components/Desc";
import styled from "styled-components";
import { colors, colorRandomFromArray } from "../styles/globals";
// import { GridArt } from "../components/GridArt";
import { Link } from "react-router-dom";
// import { playVideo } from "../redux/actions";
import ReactPlayer from "react-player";
import Parser from "html-react-parser";
import ArtistArrow from "../img/artists_arrow.svg";
import BackArrow from "../img/back_arrow.svg";
import NextArrow from "../img/next_arrow.svg";

const BackArrowElement = styled.img`
  width: 4rem;
  height: 4rem;
`;

const NextArrowElement = styled.img`
  width: 4rem;
  height: 4rem;

  & svg {
    color: ${colors.black};
  }
`;

const ArtistsArrowElement = styled.img`
  width: 5rem;
  height: 5rem;
`;

const AbstractLine = styled.div`
  border-top: 3px solid ${colors.violet};
  /* margin: 10vh auto; */
  width: 66vw;
`;
const LinkTo = styled(Link)``;

let arrowSize = "4rem";

const Arrow = styled(Link)`
  color: ${colors.black};
  height: ${arrowSize};
  width: ${arrowSize};
  align-items: center;
  display: flex;
  position: fixed;
  cursor: pointer;
  justify-content: center;
  right: 4rem;
  top: 14vh;
  font-size: 1.5rem;
  text-decoration: underline;
  white-space: nowrap;
  &.arrow-artists {
    top: 22vh;
  }

  & svg {
    transition: all 0.3s;
    /* transform: translateY(38vh); */
    display: flex;
  }

  &.next {
    left: 4rem;
    right: auto;
  }
`;

const Play = styled.div`
  &:hover {
    opacity: 0.8;
  }
`;

const ShowWorkWrap = styled(Link)`
  display: flex;
  flex-direction: column;
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
  margin-top: 20vw;
  padding: 10vw;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const BlueSide = styled.div`
  padding-top: 5vh;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
`;

const BigSide = styled.div`
  /* width: 60%; */
  flex-direction: column;
  display: fleX;
`;

export const ArtHolder = styled.div`
  display: flex;
  transition: all 0.3s;
  padding-top: 10vh;
  flex-direction: column;
`;

const ArtistName = styled.h1`
  color: ${colors.black};
  opacity: 1;
  font-weight: 700;
  letter-spacing: 130%;
  /* line-height: em; */
  padding-right: 5vw;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 7rem;
  text-transform: uppercase;
  /* word-spacing: 100vw; */
  text-align: right;
`;

const ArtImg = styled.img`
  height: 60vw;
  width: auto;
  object-fit: cover;
`;

const WorkshopImage = styled.img`
  object-fit: cover;
  height: 46vw;
  width: 100vw;
`;

const ArtistImage = styled.img`
  object-fit: cover;
  height: auto;
  width: 75vw;
`;

export const ContainerCluster = styled.div`
  background: ${colors.white};
  width: 100vw;
  &.videoHolder {
    margin: 0 auto 5vh auto;
    justify-content: center;
    display: flex;
  }
`;

const ArtDescription = styled.p`
  font-size: 2rem;
  margin: 0;
  padding: 0;
  max-width: 60vw;
`;

const ArtTitle = styled.p`
  font-size: 3.2rem;
  margin: 0;
  padding: 0;
  padding-top: 3vh;
  color: ${colors.deepblack};
`;

const mainDivStyle = {
  display: "flex",
  flexDirection: "column"
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
    tallerartista,
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
      // console.log("isSelectedArtist: ", artpiece.acf.autor === nombre);
      // console.log(artpiece, nombre);
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
  //   imagen_grande: { urlart_g },
  //   imagen_mediana: { urlart_m },
  //   imagen_pequena: { urlart_s },
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
      <Arrow className="arrow-white next" to={prevLink}>
        <BackArrowElement src={BackArrow} />
        {/* {language === "es" ? Parser(biografia) : Parser(biography)} */}
        {/* <i className="fas fa-chevron-right fa-4x" /> */}
      </Arrow>
      <Arrow className="arrow-artists arrow-white next" to={"/artists"}>
        <ArtistsArrowElement src={ArtistArrow} />
        {/* {language === "es" ? Parser(biografia) : Parser(biography)} */}
        {/* <i className="fas fa-chevron-right fa-4x" /> */}
      </Arrow>

      <Arrow className="arrow-white" to={nextLink}>
        {/* <i className="fas fa-chevron-left fa-4x" /> */}
        <NextArrowElement src={NextArrow} />
      </Arrow>
      <BlueSide>
        <WorkshopImage src={tallerartista.url} alt="artist studio" />
        <ArtistName> {Parser(nombre)}</ArtistName>
      </BlueSide>
      <AbstractLine />
      {/* <Center>
          <Play onClick={() => props.playVideo(props.videomain)}>
            <i className="far fa-play-circle fa-10x" />
          </Play>
        </Center> */}
      <ContainerCluster>
        <Desc
          title={nombre}
          desc={language === "es" ? Parser(biografia) : Parser(biography)}
        />
      </ContainerCluster>
      <ContainerCluster>
        <ArtistImage src={url} alt={nombre} />
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
              <ArtTitle>{Parser(p.acf.titulo)}</ArtTitle>
              <ArtDescription>{Parser(p.acf.ano)}</ArtDescription>
              <ArtDescription>{Parser(p.acf.autor + "")}</ArtDescription>
              <ArtDescription>
                {language === "es"
                  ? Parser(p.acf.tecnica)
                  : Parser(p.acf.technique)}
              </ArtDescription>
              <ArtDescription>{Parser(p.acf.dimensiones)}</ArtDescription>
            </Artgrid>
          ))}
        </ArtHolder>
      </ContainerCluster>
      <ContainerCluster className="videoHolder">
        <ReactPlayer
          url={videomain}
          playing={false}
          controls
          width="80vw"
          height="45vw"
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
