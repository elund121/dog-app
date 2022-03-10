import React, { FC } from "react";
import styled from "styled-components";
import { InlineStyles } from "../types";

const StyledHeading = styled.h3`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.167;
  letter-spacing: 0em;
  margin-bottom: 0.35em;
`;
export const Heading: FC<InlineStyles> = (props) => {
  return <StyledHeading {...props} />;
};
