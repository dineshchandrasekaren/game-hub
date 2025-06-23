import { Badge, Card as C, Code, Flex, HStack, Image } from "@chakra-ui/react";
import getResizedImage from "../../utils/ImageUrl";
import getEmojiByRating from "../../utils/getEmoji";
import PlatformIcon from "./PlatformIcon";

const Card = ({
  image,
  name,
  platform = [],
  count,
  rating,
}: {
  image: string;
  name: string;
  platform: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  count: number;
  rating: number;
}) => {
  const emoji = getEmojiByRating(rating);
  return (
    <C.Root
      maxW="xs"
      overflow="hidden"
      cursor="pointer"
      shadow="lg"
      _hover={{ shadow: "sm" }}
      shadowColor={{ base: "gray.700", _dark: "blackAlpha.200" }}
    >
      <Image src={getResizedImage(image)} alt={name} />
      <C.Header padding={4}>
        <Flex justifyContent="space-between">
          <HStack>
            {platform.map(({ platform: { slug } }) => (
              <PlatformIcon key={slug} name={slug} />
            ))}
          </HStack>
          <Badge
            bg={{ base: "blackAlpha.200", _dark: "whiteAlpha.200" }}
            fontWeight="bold"
          >
            {count}
          </Badge>
        </Flex>
        <C.Title marginTop={15}>{name}</C.Title>
      </C.Header>
      <C.Footer gap="2" margin={4} marginTop={0}>
        {emoji && <Image src={emoji} alt="emoji review" boxSize="50px" />}
      </C.Footer>
    </C.Root>
  );
};

export default Card;
