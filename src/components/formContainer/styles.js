import styled from "styled-components";

export const StyledFormContainer = styled.div`
  max-width: 850px;
  display: flex;
  font-family: Roboto;
  #left {
    background: #252525;
    padding: 70px 86.5px;
    text-align: center;
    color: rgba(255, 255, 255, 0.74);
    #top-spacer {
      background: #252525;
      width: 310px;
      height: 112px;
      left: 70px;
      top: 70px;
    }
    img {
      display: block;
    }
    #bottom-spacer {
      background: #252525;
      width: 310px;
      height: 56px;
      left: 70px;
      top: 435px;
    }
    div {
      width: 277px;
      margin: 0 auto;
      h1 {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
        font-style: normal;
        font-weight: 400;
        margin-top: 16px;
      }
    }
  }
  #right {
    background: #ffffff;
    width: 400px;
    position: relative;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 60px 0px 0px;
      position: static;
      width: 400px;
      height: 701px;
      left: 450px;
      top: 126px;
      img {
        width: 199px;
        height: 42px;
        left: 40.5px;
        top: 0px;
      }
      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.76);
        width: 280px;
        height: 24px;
        left: 0px;
        text-align: center;
        margin-top: 24px;
      }
    }
    footer {
      background: rgba(37, 37, 37, 0.9);
      padding: 16px 0;
      text-align: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      span {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: rgba(255, 255, 255, 0.87);
        a {
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          color: #4285f4;
          text-decoration: none;
        }
      }
    }
  }
`;
