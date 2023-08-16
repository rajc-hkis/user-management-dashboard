import { ReactElement, useState, useEffect, useCallback, useMemo } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  useDisclosure,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { LSData } from "../../pages/Login/types";
import Modal from "../Modal";
import TableBody from "./Table";
import UMDButton from "../Button";
import UMDInput from "../Input";

const DataTable = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    onClose: () => {
      setData(localStorage.getItem("UserList"));
    },
  });

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure({
    onClose: () => {
      setData(localStorage.getItem("UserList"));
      setDataRow(undefined);
    },
  });

  const [data, setData] = useState(localStorage.getItem("UserList"));
  const [dataRow, setDataRow] = useState<LSData>();

  const getLSUserList = localStorage.getItem("UserList");
  const LSUserList = getLSUserList && JSON.parse(getLSUserList);

  const handleDelete = useCallback(
    (data: LSData) => {
      const a = LSUserList.filter((el: LSData) => el.id !== data.id);
      localStorage.setItem("UserList", JSON.stringify(a));
      setData(localStorage.getItem("UserList"));
    },
    [LSUserList]
  );

  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    const getData = setTimeout(() => {}, 2000);

    return () => clearTimeout(getData);
  }, []);

  const filteredData = useMemo(() => {
    return data
      ? JSON.parse(data).filter(
          (item: LSData) =>
            item.username.toLowerCase().includes(filterText) ||
            item.email.toLowerCase().includes(filterText) ||
            item.role.toLowerCase().includes(filterText)
        )
      : [];
  }, [filterText, data]);

  return (
    <>
      <Grid templateColumns="repeat(7, 1fr)" gap={4} marginBottom="25px">
        <GridItem colSpan={2} h="10">
          <UMDInput
            type="text"
            placeholder="Search Input.."
            onChange={(event) => setFilterText(event.target.value)}
          />
        </GridItem>
        <GridItem colStart={7} colEnd={7} h="10">
          <UMDButton
            colorScheme="teal"
            size="sm"
            icon={<AddIcon marginRight={3} />}
            text="Add New User"
            style={{
              float: "right",
              marginBottom: "10px",
              marginLeft: "auto",
            }}
            onClick={onOpen}
          />
        </GridItem>
      </Grid>

      <Table variant="striped" size="sm">
        <Thead>
          <Tr>
            <Th>#UID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th isNumeric>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableBody
            filteredData={filteredData}
            handleDelete={handleDelete}
            onEditOpen={onEditOpen}
            setDataRow={setDataRow}
          />
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} dataRow={dataRow} />
      {dataRow && (
        <Modal isOpen={isEditOpen} onClose={onEditClose} dataRow={dataRow} />
      )}
    </>
  );
};

export default DataTable;
