import { ReactElement, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  Card,
  CardHeader,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { LSData } from "../Login/types";
import UMDButton from "../../components/Button";
import UMDInput from "../../components/Input";
import UMDSelect from "../../components/Select";

const Registration = (): ReactElement => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [dataLength, setDataLength] = useState(1);

  const availableUsers = localStorage.getItem("UserList");
  const parseAvailableUsers = availableUsers ? JSON.parse(availableUsers) : [];

  useEffect(() => {
    setDataLength(parseAvailableUsers.length);
  }, []);

  const handleSubmit = async () => {
    const existingEmail = parseAvailableUsers.map((user: LSData) => user.email);

    if (!existingEmail.includes(email)) {
      const ls = JSON.stringify([
        ...parseAvailableUsers,
        { id: dataLength + 1, username, email, password, role },
      ]);
      localStorage.setItem("UserList", ls);
      navigate("/");
    } else {
      alert("Email already exist");
    }
  };

  return (
    <>
      <Card width="100%" maxW="420px" margin="0 auto">
        <CardHeader>
          <Link to="/">Back to Login</Link>
          <Heading size="md">Registration Form</Heading>
        </CardHeader>

        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired marginBottom={8}>
              <UMDInput
                label="Name"
                type="text"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </FormControl>

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

            <FormControl isRequired marginBottom={8}>
              <UMDSelect
                label="Role"
                placeholder="Select option"
                name="role"
                onChange={({ target }) => setRole(target.value)}
              />
            </FormControl>

            <FormControl>
              <UMDButton
                type="submit"
                colorScheme="teal"
                size="md"
                text="Sign Up"
              />
            </FormControl>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default Registration;
