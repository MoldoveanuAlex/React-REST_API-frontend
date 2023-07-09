import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "comerciantNume", headerName: "Nume comerciant", width: 200 },
  { field: "comerciantAdresa", headerName: "Adresa comerciant", width: 200 },
  { field: "comerciantTelefon", headerName: "Telefon comerciant", width: 200 },
];

export default function ComerciantRead() {
  const [comercianti, setComercianti] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/comerciant/getAllComerciantDetalii")
      .then((res) => res.json())
      .then((result) => {
        setComercianti(result);
      });
  }, []);
  //console.log(comercianti);

  return (
      <div style={{ height: "100%", width: "95%", paddingLeft:50, paddingRight:50}}>
              <h1>Vizualizare comercianti</h1>
        <DataGrid
          rows={comercianti}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
  );
}
