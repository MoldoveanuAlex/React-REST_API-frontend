import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";

export default function ComerciantAdd() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [comerciantNume, setName] = React.useState("");
  const [comerciantAdresa, setAdress] = React.useState("");
  const [comerciantTelefon, setPhone] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const comerciant = {
      comerciantNume,
      comerciantAdresa,
      comerciantTelefon,
    };
    console.log(comerciant);
    fetch("http://localhost:8080/comerciant/createComerciant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comerciant),
    }).then(() => {
      console.log("Nou comerciant adaugat!");
    });
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Adauga comerciant</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Nume comerciant"
            variant="filled"
            fullWidth
            value={comerciantNume}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Adresa comerciant"
            variant="filled"
            fullWidth
            value={comerciantAdresa}
            onChange={(e) => setAdress(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Telefon comerciant"
            variant="filled"
            fullWidth
            value={comerciantTelefon}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Box>
        <br></br>
        <Button variant="contained" onClick={handleClick}>
          Adauga
        </Button>
      </Paper>
    </Container>
  );
}
