import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 320px) and (max-device-width: 480px) {
      ${props}
    }
  `;
};

export const tab = (props) => {
  return css`
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      ${props}
    }
  `;
};
