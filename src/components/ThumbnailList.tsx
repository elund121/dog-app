import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { dogAPI } from "../api/dogAPI";
import { useMounted } from "../hooks/useMounted";
import { Button } from "./Button";
import { Thumbnail } from "./Thumbnail";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  onSelect?: (img: string) => void;
}

export const ThumbnailList: FC<Props> = ({ onSelect = () => {} }) => {
  const mounted = useMounted();
  const [breeds, setBreeds] = useState<string[]>([]);
  const [refreshed, setRefreshed] = useState(0);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchBreeds = async () => {
      setFetching(true);
      const { message, status } = await dogAPI.getRandomBreeds();
      if (status === "success" && mounted) {
        setBreeds(message);
      }
      setFetching(false);
    };

    fetchBreeds();
  }, [refreshed, mounted]);

  const handleClick = () => {
    setRefreshed(new Date().valueOf());
  };

  return (
    <>
      <div>
        <Button size={"small"} onClick={handleClick}>
          Refresh Thumbnails
        </Button>
      </div>
      <Container>
        {breeds.map((b, idx) => (
          <Thumbnail key={b} breed={b} onClick={(_, tn) => onSelect(tn)} />
        ))}
      </Container>
    </>
  );
};
