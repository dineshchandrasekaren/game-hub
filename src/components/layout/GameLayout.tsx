import games from "../../data/games";
import Card from "../common/Card";
import NavBar from "./NavBar";
import ListGroup from "../common/ListGroup";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  // Portal,
  // Select,
  // createListCollection,
} from "@chakra-ui/react";
import genres from "../../data/genres";
// import CardSkeleton from "../common/CardSkeleton";
import getResizedImage from "../../utils/ImageUrl";
import { useState } from "react";
import platforms from "../../data/platforms";
import CustomSelect from "../common/CustomSelect";

const GameLayout = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedGenre, setSelectedGenres] = useState<{
    name: string;
    image: string;
    id: number;
  }>();
  return (
    <>
      <header>
        <NavBar
          handleSearch={(text) => setSearchValue(text)}
          searchValue={searchValue}
        />
      </header>
      <main style={{ marginTop: 20 }}>
        <Flex gap={6} align="flex-start">
          <Box>
            <ListGroup
              items={genres.map(({ name, image_background, id }) => ({
                name,
                image: getResizedImage(image_background),
                id,
              }))}
              onSelectItem={(item) => {
                setSelectedGenres(item);
              }}
              title="Genres"
            />
          </Box>
          <Box flex="1">
            <div style={{ marginBottom: "15px" }}>
              <Heading size="4xl">
                {searchValue
                  ? `Search Result ${searchValue}`
                  : selectedGenre?.name
                  ? `${selectedGenre.name} Games`
                  : "Games"}
              </Heading>
              <CustomSelect
                label="Select Framework"
                placeholder="Choose one"
                items={options}
                value={selected}
                onChange={(val) => setSelected(val)}
              />
              <CustomSelect
                label="Select Platform"
                placeholder="Choose one"
                items={options}
                value={selected}
                onChange={(val) => setSelected(val)}
              />
            </div>
            <Grid
              templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
              gap="6"
            >
              {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <GridItem key={i}>
                  <CardSkeleton />
                </GridItem>
              ))} */}
              {games.map(
                ({
                  background_image,
                  name,
                  reviews_text_count,
                  parent_platforms,
                  rating,
                }) => (
                  <GridItem key={name}>
                    <Card
                      image={background_image}
                      name={name}
                      count={reviews_text_count}
                      platform={parent_platforms}
                      rating={rating}
                    />
                  </GridItem>
                )
              )}
            </Grid>
          </Box>
        </Flex>
      </main>
    </>
  );
};

export default GameLayout;
