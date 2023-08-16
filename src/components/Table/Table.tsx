import { ReactElement } from "react";
import { Tr, Td } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import { LSData } from "../../pages/Login/types";
import { TableBodyProps } from "./types";
import UMDButton from "../Button";

const TableBody = ({
  filteredData,
  handleDelete,
  onEditOpen,
  setDataRow,
}: TableBodyProps): ReactElement => {
  return (
    <>
      {filteredData.map((row: LSData) => {
        return (
          <Tr key={row.id}>
            <Td>{row.id}</Td>
            <Td>{row.username}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
            <Td isNumeric>
              <UMDButton
                colorScheme="teal"
                size="xs"
                icon={<EditIcon />}
                onClick={() => {
                  setDataRow(row);
                  onEditOpen();
                }}
                style={{ marginLeft: "5px" }}
              />
              <UMDButton
                colorScheme="red"
                size="xs"
                icon={<DeleteIcon />}
                onClick={() => handleDelete(row)}
                style={{ marginLeft: "5px" }}
              />
            </Td>
          </Tr>
        );
      })}
    </>
  );
};

export default TableBody;
