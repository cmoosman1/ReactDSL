import React from "react";
import styled from "styled-components";
import CloseIconButton from './close-icon.svg';

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper>
      <img src={CloseIconButton} alt="foo"/>
  </CloseIconWrapper>
);