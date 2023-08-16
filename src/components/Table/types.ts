import { LSData } from "../../pages/Login/types";

export interface TableBodyProps {
  filteredData: LSData[];
  handleDelete: (row: LSData) => void;
  onEditOpen: () => void;
  setDataRow: (row: LSData) => void;
}
