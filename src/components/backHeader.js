import React from "react";
import styled from "styled-components";
import { typeScale, margins } from "../utils";
import Box from "./box";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  display: flex;
  border: none;
  background: none;
  margin: ${margins.m7} 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  &:hover {
    svg {
      transform: scale(1.1);
    }
    path {
      fill: ${(props) => props.theme.backIconColorHover};
    }
    span {
      color: ${(props) => props.theme.backTextColorHover};
    }
  }
`;

const StyledIcon = styled.svg`
  outline: none;
  path {
    fill: ${(props) => props.theme.backIconColor};
  }
`;

const StyledLabel = styled.span`
  color: ${(props) => props.theme.backTextColor};
  font-family: ${(props) => props.theme.primaryFont};
  font-size: ${typeScale.header4};
  margin-left: ${margins.m3};
`;

const StyledHeader = styled(Box).attrs({ as: "header" })``;

const BackHeader = () => (
  <StyledHeader>
    <nav>
      <StyledLink to="/">
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="23"
          fill="none"
          aria-hidden="true"
          tabindex="0"
        >
          <path d="M1.178 12.6a1.633 1.633 0 010-2.31L10.512.956a1.633 1.633 0 012.31 2.31l-8.179 8.178 8.179 8.179a1.633 1.633 0 01-2.31 2.31l-9.334-9.334z" />
        </StyledIcon>
        <StyledLabel>Back</StyledLabel>
      </StyledLink>
    </nav>
  </StyledHeader>
);

export default BackHeader;
