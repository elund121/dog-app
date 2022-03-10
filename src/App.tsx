import { useEffect, useState } from "react";
import { ThumbnailList } from "./components/ThumbnailList";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { dogAPI } from "./api/dogAPI";
import styled from "styled-components";
import { Button } from "./components/Button";
import { ScaledImage } from "./components/ScaledImage";
import { useMounted } from "./hooks/useMounted";
import { Label } from "./components/Label";

const StyledDiv = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const App = () => {
  const mounted = useMounted();
  const [refreshed, setRefreshed] = useState(0);
  const [fetching, setFetching] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      setFetching(true);
      const { message, status } = await dogAPI.getRandomImage();
      if (status === "success" && mounted) {
        setImg(message);
      }
      setFetching(false);
    };

    fetchImage();
  }, [refreshed, mounted]);

  const handleClick = () => {
    setRefreshed(new Date().valueOf());
  };

  return (
    <StyledDiv>
      <Heading style={{ textAlign: "center" }}>
        Enjoy this image of a random dog!
      </Heading>
      <Container>
        <ButtonWrapper>
          <Button onClick={handleClick}>Refresh</Button>
          {refreshed > 0 && (
            <Label>
              Last refreshed {new Date(refreshed).toLocaleTimeString()}
            </Label>
          )}
        </ButtonWrapper>
        <ScaledImage img={img} size={600} />
      </Container>
      <p>
        Explore more dog breeds. Click on a thumbnail below to set it as the
        main image.
      </p>
      <ThumbnailList onSelect={setImg} />
    </StyledDiv>
  );
};

export default App;
