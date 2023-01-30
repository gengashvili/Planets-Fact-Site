import styled from "styled-components";

export const PlanetImg = styled.div`
  width: 60%;
  height: 754px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media (max-width: 1440px) {
    width: 63%;
  }
  @media (max-width: 990px) {
    width: 100%;
    height: 470px;
  }
  @media (max-width: 500px) {
    height: 410px;
  }

  img {
    @media (max-width: 990px) {
      width: 184px;
      height: 184px;
    }
    @media (max-width: 500px) {
      width: 111px;
      height: 111px;
    }
  }
`;

export const PlanetInfo = styled.div`
  margin-top: 126px;

  @media (max-width: 990px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 40px;
    margin: 0 0 27px 0;
  }
  @media (max-width: 680px) {
    padding: 0 20px;
  }

  h2 {
    font-family: "Antonio";
    font-weight: 400;
    font-size: 80px;
    color: #ffffff;
    text-transform: uppercase;

    @media (max-width: 990px) {
      font-size: 48px;
    }
    @media (max-width: 680px) {
      font-size: 44px;
    }
    @media (max-width: 500px) {
      font-size: 40px;
      text-align: center;
    }
  }
`;

export const Content = styled.p`
  font-family: "Spartan";
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  opacity: 0.8;
  width: 350px;
  margin: 23px 0 24px 0;

  @media (max-width: 990px) {
    width: 339px;
    height: 110px;
    font-size: 11px;
  }
  @media (max-width: 680px) {
    width: 300px;
  }
  @media (max-width: 500px) {
    width: 327px;
    height: 110px;
    margin: 16px 0 0 0;
    text-align: center;
  }
`;

export const Source = styled.p`
  font-family: "Spartan";
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.5;
  @media (max-width: 990px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
  a {
    margin: 0 5px;
    opacity: 1;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    img {
      margin-left: 5px;
    }
  }
`;

export const SwitchContent = styled.div`
  margin-top: 39px;
  @media (max-width: 990px) {
    margin-top: 0;
  }
  @media (max-width: 500px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0 24px;
    height: 50px;
  }
  div {
    display: flex;
    width: 350px;
    height: 48px;
    margin-bottom: 16px;
    align-items: center;
    font-family: "Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 2.57143px;
    text-transform: uppercase;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    @media (max-width: 990px) {
      width: 281px;
      height: 40px;
      font-size: 9px;
    }
    @media (max-width: 500px) {
      border: none;
      width: 80px;
      height: 50px;
    }
    :hover {
      background-color: #838391;
    }

    :first-child {
      background-color: ${(props) =>
        props.handleContent === "overview" ? `${props.btnColor}` : ""};
      @media (max-width: 500px) {
        background: none;
        border-bottom: ${(props) =>
          props.handleContent === "overview"
            ? `4px solid ${props.btnColor}`
            : ""};
      }
    }
    :nth-child(2) {
      background-color: ${(props) =>
        props.handleContent === "structure" ? `${props.btnColor}` : ""};
      @media (max-width: 500px) {
        background: none;
        border-bottom: ${(props) =>
          props.handleContent === "structure"
            ? `4px solid ${props.btnColor}`
            : ""};
      }
    }
    :last-child {
      background-color: ${(props) =>
        props.handleContent === "geology" ? `${props.btnColor}` : ""};
      @media (max-width: 500px) {
        background: none;
        border-bottom: ${(props) =>
          props.handleContent === "geology"
            ? `4px solid ${props.btnColor}`
            : ""};
      }
    }

    p {
      :first-child {
        margin: 0 28px;
        opacity: 0.5;
        @media (max-width: 990px) {
          margin: 0 17px 0 20px;
        }
        @media (max-width: 500px) {
          display: none;
        }
      }
    }
  }
`;

export const PlanetStats = styled.div`
  clear: both;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  @media (max-width: 500px) {
    display: block;
  }
  div {
    width: 255px;
    height: 128px;
    margin-right: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px 23px;

    @media (max-width: 1180px) {
      width: 200px;
      height: 100px;
      padding: 16px 15px;
    }
    @media (max-width: 990px) {
      width: 164px;
      height: 88px;
      margin-right: 11px;
    }
    @media (max-width: 720px) {
      width: 144px;
      height: 78px;
      margin-right: 6px;
    }
    @media (max-width: 500px) {
      width: 327px;
      height: 48px;
      margin: 0 0 8px 0;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p {
      :first-child {
        font-family: "Spartan";
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #ffffff;
        mix-blend-mode: normal;
        opacity: 0.5;
        @media (max-width: 990px) {
          font-size: 8px;
          margin-bottom: 8px;
        }
      }
      :last-child {
        font-family: "Antonio";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        letter-spacing: -1.5px;
        text-transform: uppercase;
        color: #ffffff;
        @media (max-width: 1180px) {
          font-size: 30px;
        }
        @media (max-width: 990px) {
          font-size: 24px;
        }
        @media (max-width: 720px) {
          font-size: 20px;
        }
      }
    }
  }
`;

export const GeologyImagesWrapper = styled.div`
  .geology_image {
    height: 200px;
    width: 163px;
    position: absolute;
    top: 65%;
    left: 30%;
    transform: translate(-50%, -50%);
    @media (max-width: 1440px) {
      top: 68%;
      left: 31.5%;
    }
    @media (max-width: 990px) {
      height: 100px;
      width: 81px;
      top: 40%;
      left: 50%;
    }
    @media (max-width: 500px) {
      width: 50px;
      height: 40px;
      top: 30%;
    }
  }
`;