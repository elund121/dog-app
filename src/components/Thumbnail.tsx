import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { dogAPI } from "../api/dogAPI";
import { useMounted } from "../hooks/useMounted";
import { InlineStyles } from "../types";
import { Label } from "./Label";
import { ScaledImage } from "./ScaledImage";

const Container = styled.div`
  padding: 16px;
`;

interface Props extends InlineStyles {
  breed: string;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    img: string
  ) => void;
}

export const Thumbnail: FC<Props> = ({ breed, style, onClick = () => {} }) => {
  const mounted = useMounted();
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchImg = async () => {
      const { message, status } = await dogAPI.getRandomImage(breed);
      if (status === "success" && mounted) {
        setImg(message);
      }
    };

    fetchImg();
  }, [breed, mounted]);

  return (
    <Container style={style} onClick={(e) => onClick(e, img)}>
      <ScaledImage img={img} enableHoverEffect />
      <Label>
        <b>Breed: </b>
        {breed}
      </Label>
    </Container>
  );
};
