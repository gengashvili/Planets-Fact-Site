import React, { useState } from "react";
import styled from "styled-components";
import {PlanetImg, PlanetInfo, Content, Source, SwitchContent, PlanetStats, GeologyImagesWrapper} from "./StyledComponents";

function Planet({ planet, btnColor }) {
  const [handleContent, setHandleContent] = useState("overview");

  return (
    <Container>
      <Wrapper>
        <PlanetImg>
          {handleContent === "overview" ? (
            <img src={planet.images.planet} alt="" />
          ) : handleContent === "structure" ? (
            <img src={planet.images.internal} alt="" />
          ) : (
            <GeologyImagesWrapper>
              <img src={planet.images.planet} alt="" />
              <img
                className="geology_image"
                src={planet.images.geology}
                alt=""
              />
            </GeologyImagesWrapper>
          )}
        </PlanetImg>
        <PlanetInfo>
          <div>
            <h2>{planet.name}</h2>
            <Content>{planet.overview.content}</Content>

            <Source>
              Source :
              <a href={planet.overview.source} target="blank">
                Wikipedia
                <img src={`./assets/icon-source.svg`} alt="" />
              </a>
            </Source>
          </div>

          <SwitchContent handleContent={handleContent} btnColor={btnColor}>
            <div onClick={() => setHandleContent("overview")}>
              <p>01</p>
              <p>OVERVIEW</p>
            </div>
            <div onClick={() => setHandleContent("structure")}>
              <p>02</p>
              <p>Internal Structure</p>
            </div>
            <div onClick={() => setHandleContent("geology")}>
              <p>03</p>
              <p>Surface Geology</p>
            </div>
          </SwitchContent>
        </PlanetInfo>
      </Wrapper>
      <PlanetStats>
        <div>
          <p>ROTATION TIME</p>
          <p>{planet.rotation}</p>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <p>{planet.revolution}</p>
        </div>
        <div>
          <p>radius</p>
          <p>{planet.radius}</p>
        </div>
        <div>
          <p>AVERAGE TEMP.</p>
          <p>{planet.temperature}</p>
        </div>
      </PlanetStats>
    </Container>
  );
}

export default React.memo(Planet);

const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  @media (max-width: 990px) {
    display: block;
  }
`;
