import { ReactElement, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FormControl,
  Card,
  CardHeader,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { LSData } from "./types";
import UMDButton from "../../components/Button";
import UMDInput from "../../components/Input";

const Login = (): ReactElement => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginUser = localStorage.getItem("LoginUser");
    if (loginUser !== null) navigate("/dashboard");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LSDataList: string = localStorage.getItem("UserList") ?? "";
  const LSData = LSDataList.length !== 0 ? JSON.parse(LSDataList) : [];

  const handleSubmit = async () => {
    const isLSDataMatch = LSData.some(
      (el: LSData) => el.email === email && el.password === password
    );

    const userRole = LSData.filter(
      (data: LSData) => data.email === email && data.role
    );

    if (isLSDataMatch) {
      localStorage.setItem("LoginUser", JSON.stringify(userRole));
      if (userRole[0].role.toLowerCase() === "admin") {
        navigate("/dashboard", { state: { user: userRole } });
      } else {
        navigate("/user", { state: { user: userRole } });
      }
    } else {
      alert("User does not found");
    }
  };

  return (
    <>
      <Card width="100%" maxW="420px" margin="0 auto" background="white">
        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>

        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired marginBottom={8}>
              <UMDInput
                label="Email"
                type="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </FormControl>

            <FormControl isRequired marginBottom={8}>
              <UMDInput
                label="Password"
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </FormControl>

            <FormControl>
              <UMDButton
                type="submit"
                colorScheme="teal"
                size="md"
                text="Login"
              />
            </FormControl>

            <Link
              to={"/registration"}
              style={{ marginTop: "5px", display: "inline-block" }}
            >
              New user?
            </Link>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default Login;
