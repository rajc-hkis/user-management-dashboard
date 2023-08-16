import { LSData } from "../../pages/Login/types";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  dataRow?: LSData;
}
