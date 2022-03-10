import React, { FC } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 24px;
  width: 600px;
  margin: auto;
`;

export const Container: FC = (props) => {
  return <StyledDiv {...props} />;
};
