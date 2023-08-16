import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TableContainer } from "@chakra-ui/react";

import DataTable from "../../components/Table";
import Header from "../../components/Header";

const Dashboard = (): ReactElement => {
  const navigate = useNavigate();
  const loginUser = localStorage.getItem("LoginUser");

  useEffect(() => {
    if (loginUser === null) navigate("/");
  }, [loginUser, navigate]);

  return (
    <>
      <Header />

      <TableContainer>
        <DataTable />
      </TableContainer>
    </>
  );
};

export default Dashboard;
