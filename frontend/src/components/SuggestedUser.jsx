import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUnfollow from "../hooks/useFollowUnfollow";

const SuggestedUser = ({ user }) => {
<<<<<<< HEAD
	const { handleFollowUnfollow, following, updating } = useFollowUnfollow(user);

	return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={2}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {/* left side */}
      <Flex gap={2} as={Link} to={`${user.username}`} alignItems={center}>
        <Avatar src={user.profilePic} />
        <Box>
          <Text fontSize={{ base: "sm", md: "md" }} fontWeight={"bold"}>
            {user.username}
          </Text>
          <Text color={"gray.light"} fontSize={{ base: "xs", md: "sm" }}>
=======
  const { handleFollowUnfollow, following, updating } = useFollowUnfollow(user);

  return (
    <Flex gap={2} justifyContent={"space-between"} alignItems={"center"}>
      {/* left side */}
      <Flex gap={2} as={Link} to={`${user.username}`}>
        <Avatar src={user.profilePic} />
        <Box>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {user.username}
          </Text>
          <Text color={"gray.light"} fontSize={"sm"}>
>>>>>>> 132e7e072fb205b63eecd0cd77b13f2b07172b23
            {user.name}
          </Text>
        </Box>
      </Flex>
      {/* right side */}
      <Button
        size={"sm"}
        color={following ? "black" : "white"}
        bg={following ? "white" : "blue.400"}
        onClick={handleFollowUnfollow}
        isLoading={updating}
        _hover={{
          color: following ? "black" : "white",
          opacity: ".8",
<<<<<<< HEAD
        }}
      >
=======
        }}>
>>>>>>> 132e7e072fb205b63eecd0cd77b13f2b07172b23
        {following ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
<<<<<<< HEAD

=======
>>>>>>> 132e7e072fb205b63eecd0cd77b13f2b07172b23
