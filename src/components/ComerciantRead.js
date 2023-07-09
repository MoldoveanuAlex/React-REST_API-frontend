import { Container, Paper } from "@mui/material";
import { useEffect, useState } from "react";

export default function ComerciantRead() {
  const [comercianti, setComercianti] = useState([]);
  //   const comerciantId = null;
  //   const comerciantNume = "";
  //   const comerciantAdresa = "";
  //   const comerciantTelefon = "";

  //   const comerciant = {
  //     comerciantId,
  //     comerciantNume,
  //     comerciantAdresa,
  //     comerciantTelefon,
  //   };

  useEffect(() => {
    fetch("http://localhost:8080/comerciant/getAllComerciantDetalii")
      .then((res) => res.json())
      .then((result) => {
        setComercianti(result);
      });
  }, []);

  return (
    <Container>
      <Paper>
        <h1>Comercianti</h1>

        <Paper>
          {comercianti.map((comerciant) => (
            <Paper>
              Id: {comerciant.comerciantId}
              Nume Comerciant: {comerciant.comerciantNume}
              Adresa Comerciant: {comerciant.comerciantAdresa}
              Telefon Comerciant: {comerciant.comerciantTelefon}
            </Paper>
          ))}
        </Paper>
      </Paper>
    </Container>
  );
}
