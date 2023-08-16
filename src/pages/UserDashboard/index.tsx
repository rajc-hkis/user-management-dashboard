import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import Header from "../../components/Header";
import { LSData } from "../Login/types";

const UserDashboard = (): ReactElement => {
  const navigate = useNavigate();
  const [data, setData] = useState<LSData>();
  const loginUser = localStorage.getItem("LoginUser");

  useEffect(() => {
    if (loginUser === null) navigate("/");
  }, [loginUser, navigate]);

  useEffect(() => {
    const loggedInUser = loginUser && JSON.parse(loginUser);
    setData(loggedInUser[0]);
  }, [loginUser]);

  return (
    <>
      <Header />

      <Card>
        <CardHeader>
          <Heading size="md">User Profile</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                UID
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.id}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Username
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.username}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Email
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.email}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                User Role
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.role}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default UserDashboard;
