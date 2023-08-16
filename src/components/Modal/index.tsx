import { ReactElement, useState, FormEvent } from "react";
import {
  FormControl,
  Modal as Popup,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { LSData } from "../../pages/Login/types";
import { ModalProps } from "./types";
import UMDButton from "../Button";
import UMDInput from "../Input";
import UMDSelect from "../Select";

const Modal = ({ isOpen, onClose, dataRow }: ModalProps): ReactElement => {
  const [username, setUsername] = useState(dataRow?.username ?? "");
  const [email, setEmail] = useState(dataRow?.email || "");
  const [role, setRole] = useState(dataRow?.role || "");

  const availableUsers = localStorage.getItem("UserList");
  const parseAvailableUsers = availableUsers ? JSON.parse(availableUsers) : [];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (dataRow && dataRow.id) {
      const isEmailAlreadyExists = parseAvailableUsers.find(
        (item: LSData) => item.id !== dataRow.id && item.email === email
      );

      if (!isEmailAlreadyExists) {
        const updatedValue = parseAvailableUsers.map((item: LSData) =>
          item.id === dataRow.id ? { id: item.id, username, email, role } : item
        );
        localStorage.setItem("UserList", JSON.stringify(updatedValue));
        setUsername("");
        setEmail("");
        setRole("");
        onClose();
      } else {
        alert("Email is already taken!");
      }
    } else {
      const existingEmail = parseAvailableUsers.map(
        (user: LSData) => user.email
      );
      const isEmailExists = existingEmail.includes(email);

      if (!isEmailExists) {
        const ls = JSON.stringify([
          ...parseAvailableUsers,
          {
            id: parseAvailableUsers[parseAvailableUsers.length - 1].id + 1,
            username,
            email,
            role,
          },
        ]);
        localStorage.setItem("UserList", ls);
        setUsername("");
        setEmail("");
        setRole("");
        onClose();
      } else {
        alert("Email is already taken!");
      }
    }
  };

  return (
    <>
      <Popup isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
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
                <UMDSelect
                  placeholder="Select option"
                  name="role"
                  value={role}
                  onChange={({ target }) => setRole(target.value)}
                />
              </FormControl>

              <ModalFooter>
                <FormControl>
                  <UMDButton
                    type="submit"
                    colorScheme="teal"
                    size="md"
                    text="Submit"
                  />
                </FormControl>
              </ModalFooter>
            </ModalBody>
          </form>
        </ModalContent>
      </Popup>
    </>
  );
};

export default Modal;
