import styled from "styled-components";
import { device } from "../utils";

const Box = styled.div`
  padding: 0 20px;
  @media screen and ${device.large} {
    grid-column: 2;
  }
`;

export default Box;
