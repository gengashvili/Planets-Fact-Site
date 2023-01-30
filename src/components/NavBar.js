import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import arrow from '.public/assets/arrow.png'
// import t from "../../public/assets/planet-earth.svg";

function NavBar({ showBurgerMenu, setShowBurgerMenu, screenWidth }) {
  return (
    <Header>
      <Heading>THE PLANETS</Heading>
      {screenWidth > 500 ? (
        <Navigation>
          <NavLinkWrapper bgColor="#419EBB">
            <NavLink to="/">mercury</NavLink>
          </NavLinkWrapper>

          <NavLinkWrapper bgColor="#EDA249">
            <NavLink to="/venus">venus</NavLink>
          </NavLinkWrapper>

          <NavLinkWrapper bgColor="#6D2ED5">
            <NavLink to="/earth">earth</NavLink>
          </NavLinkWrapper>

          <NavLinkWrapper bgColor="#D14C32">
            <NavLink to="/mars">mars</NavLink>
          </NavLinkWrapper>

          <NavLinkWrapper bgColor="#D83A34">
            <NavLink to="/jupiter">jupiter</NavLink>
          </NavLinkWrapper>

          <NavLinkWrapper bgColor="#CD5120">
            <NavLink to="/saturn">saturn</NavLink>
          </NavLinkWrapper>

          <NavLinkWrapper bgColor="#1EC1A2">
            <NavLink to="/uranus">uranus</NavLink>
          </NavLinkWrapper>

          <NavLinkWrapper bgColor="#2D68F0">
            <NavLink to="/neptune">neptune</NavLink>
          </NavLinkWrapper>
        </Navigation>
      ) : (
        <div>
          <BurgerIcon
            onClick={() => setShowBurgerMenu(!showBurgerMenu)}
            src="./assets/icon-hamburger.svg"
          />
          {showBurgerMenu ? (
            <Navigation>
              <div className="nav_link_wrapper">
                <Oval background="#DEF4FC" />
                <NavLink
                  to="/"
                  onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                >
                  mercury
                </NavLink>
                <img src={`./assets/arrow.png`} alt="" />
              </div>
              <div className="nav_link_wrapper">
                <Oval background="#F7CC7F" />
                <NavLink
                  to="/venus"
                  onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                >
                  venus
                </NavLink>
                <img src={`./assets/arrow.png`} alt="" />
              </div>
              <div className="nav_link_wrapper">
                <Oval background="#545BFE" />
                <NavLink
                  to="/earth"
                  onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                >
                  earth
                </NavLink>
                <img src={`./assets/arrow.png`} alt="" />
              </div>
              <div className="nav_link_wrapper">
                <Oval background="#FF6A45" />
                <NavLink
                  to="/mars"
                  onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                >
                  mars
                </NavLink>
                <img src={`./assets/arrow.png`} alt="" />
              </div>
              <div className="nav_link_wrapper">
                <Oval background="#ECAD7A" />
                <NavLink
                  to="/jupiter"
                  onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                >
                  jupiter
                </NavLink>
                <img src={`./assets/arrow.png`} alt="" />
              </div>
              <div className="nav_link_wrapper">
                <Oval background="#FCCB6B" />
                <NavLink
                  to="/saturn"
                  onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                >
                  saturn
                </NavLink>
                <img src={`./assets/arrow.png`} alt="" />
              </div>
              <div className="nav_link_wrapper">
                <Oval background="#65F0D5" />
                <NavLink
                  to="/uranus"
                  onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                >
                  uranus
                </NavLink>
                <img src={`./assets/arrow.png`} alt="" />
              </div>
              <div className="nav_link_wrapper">
                <Oval background="#497EFA" />
                <NavLink
                  to="/neptune"
                  onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                >
                  neptune
                </NavLink>
                <img src={`./assets/arrow.png`} alt="" />
              </div>
            </Navigation>
          ) : (
            ""
          )}
        </div>
      )}
    </Header>
  );
}
export default React.memo(NavBar);

const Header = styled.header`
  height: 80px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 41px 0 32px;
  @media (max-width: 990px) {
    display: block;
    justify-content: center;
    text-align: center;
    height: fit-content;
  }
  @media (max-width: 500px) {
    display: flex;
    height: 68px;
    padding: 0 24px;
    justify-content: space-between;
  }
`;
const Heading = styled.h1`
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  color: #ffffff;
  @media (max-width: 990px) {
    margin: 34px 0 39px 0;
  }
`;

const Navigation = styled.nav`
  color: #ffffff;
  display: flex;
  height: 100%;
  align-items: center;
  @media (max-width: 990px) {
    justify-content: space-between;
    margin-bottom: 27px;
  }
  @media (max-width: 500px) {
    position: absolute;
    display: block;
    top: 580px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .nav_link_wrapper {
    margin: auto;
    width: 327px;
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    @media (max-width: 370px) {
      width: 260px;
    }
    img {
      position: absolute;
      right: 0;
    }
  }
  a {
    border-top: 4px solid #070724;
    padding: 27px 0 30px 0;
    margin: 0 16px;
    text-decoration: none;
    font-family: "Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #ffffff;
    @media (max-width: 720px) {
      margin: 0 5px;
    }
    @media (max-width: 500px) {
      font-size: 15px;
      padding: 0;
    }
  }
`;

const BurgerIcon = styled.img`
  cursor: pointer;
`;

const Oval = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background: ${(props) => props.background};
`;

const NavLinkWrapper = styled.span`
  .active {
    border-top: 4px solid ${(props) => props.bgColor};
  }
`;
