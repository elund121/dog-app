import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  img: string;
  size?: number;
  enableHoverEffect?: boolean;
}

// use div background image rather than img tag to normalize aspect ratio
const Image = styled.div<Props>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  &: hover
    ${(props) =>
      props.enableHoverEffect
        ? `{
    cursor: pointer;
    transform: scale(1.1);
  }`
        : ""};
`;

export const ScaledImage: FC<Props> = ({
  img,
  size = 150,
  enableHoverEffect = false,
}) => (
  <Image
    img={img}
    size={size}
    enableHoverEffect={enableHoverEffect}
    data-testid={"random-img"}
  />
);
