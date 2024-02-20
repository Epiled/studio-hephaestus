import styled from "styled-components";
import React from "react";

interface StyledIconProps {
  as?: React.ElementType;
}

const StyledIcon = styled.svg<StyledIconProps>`
  fill: black;
  transition: fill .5s ease-in-out;

  &:hover {
    fill: #ffffff;
  }
`;

export default StyledIcon;