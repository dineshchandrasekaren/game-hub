import {
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Stack gap="6" maxW="xs">
      <Skeleton height="200px" />
      <HStack>
        <SkeletonCircle width={20} /> <SkeletonCircle width={20} />{" "}
        <SkeletonCircle width={20} /> <SkeletonCircle width={20} />{" "}
      </HStack>

      <SkeletonText noOfLines={2} />
    </Stack>
  );
};

export default CardSkeleton;
