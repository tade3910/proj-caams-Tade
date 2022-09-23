import { useState } from "react";
import Table from "../components/Table";

function ApGridDemo() {
  const [rowData] = useState([
    {
      id: 1,
      email: "user1@example.com",
      name: "User One",
    },
    {
      id: 2,
      email: "user2@example.com",
      name: "User Two",
    },
    {
      id: 3,
      email: "user3@example.com",
      name: "User Three",
    },
  ]);

  const [columnDefs] = useState([
    { field: "id", headerName: "ID", filter: "agNumberColumnFilter" },
    { field: "email", headerName: "Email", filter: "agTextColumnFilter" },
    { field: "name", headerName: "Name", filter: "agTextColumnFilter" },
  ]);

  return <Table rowData={rowData} columnDefs={columnDefs}></Table>;
}

export default ApGridDemo;