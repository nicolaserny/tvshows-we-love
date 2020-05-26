import styled from "styled-components";
import { device } from "../utils";

const Box = styled.div`
  padding: 0 20px;
  @media screen and (min-width: ${device.medium}) {
    grid-column: 2;
  }
`;

export default Box;
