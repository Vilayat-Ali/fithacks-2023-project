// lib
import { Box, SimpleGrid } from "@chakra-ui/react";

// components
import Banner from "@/components/Banner";
import ProfileCard from "@/components/Cards/ProfileCard";
import PageWrapper from "@/components/PageWrapper";

type Props = {};

const Profile = (props: Props) => {
  return (
    <PageWrapper
      title="Profile"
      description=""
      keywords={[]}
      isProtected={true}
    >
      <Box w={{ base: "95%", md: "90%" }} mx={"auto"}>
        <Banner pageStack={["Profile"]} />
        <Box my={10}>
          <ProfileCard />
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default Profile;
