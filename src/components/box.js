import styled from "styled-components";
import { device } from "../utils";

const Box = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  @media screen and ${device.large} {
    grid-column: 2;
  }
`;

export default Box;
