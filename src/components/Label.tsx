import React, { FC } from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  margin-top: 8px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  margin-bottom: 0.35em;
  display: block;
`;

export const Label: FC = (props) => <StyledSpan {...props} />;
