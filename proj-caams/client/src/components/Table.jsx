import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import useStore from "../services/store";

function Table({ rowData, columnDefs }) {
  const { colorScheme } = useStore();
  const [gridTheme, setGridTheme] = useState("ag-theme-alpine");
  const [gridApi, setGridApi] = useState(null);
  const [tableStyle] = useState({
    height: Math.round(window.innerHeight * 0.5),
  });

  useEffect(() => {
    colorScheme === "light"
      ? setGridTheme("ag-theme-alpine")
      : setGridTheme("ag-theme-alpine-dark");
  }, [colorScheme]);

  useEffect(() => {
    gridApi && gridApi.sizeColumnsToFit();
  }, [gridApi]);

  const defaultColDef = {
    resizable: true,
    sortable: true,
  };

  return (
    <div className={gridTheme} style={tableStyle}>
      <AgGridReact
        defaultColDef={defaultColDef}
        onGridReady={(params) => {
          setGridApi(params.api);
        }}
        rowData={rowData}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  );
}

export default Table;