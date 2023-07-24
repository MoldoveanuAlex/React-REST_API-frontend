import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";


export default function ComerciantRead() {
    const [comercianti, setComercianti] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "comerciantNume", headerName: "Nume comerciant", width: 200, editable: true },
        { field: "comerciantAdresa", headerName: "Adresa comerciant", width: 200 },
        { field: "comerciantTelefon", headerName: "Telefon comerciant", width: 200 },
        {
            field: 'delete',
            headerName: '',
            width: 100,
            disableColumnMenu: true,
            sortable: false,
            renderCell: (params) => (
                <Button variant="text" onClick={() => handleDelete(params.row.id)}>Sterge</Button>
            ),
        }
    ];

    const fetchData = async () => {
        fetch("http://localhost:8080/comerciant/getAllComerciantDetalii")
            .then((res) => res.json())
            .then((result) => {
                setComercianti(result);
            });
    }

    const deleteRowWithId = (id) => {
        fetch(`http://localhost:8080/comerciant/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    fetchData();
                }
            });
    };

    const handleDelete = (id) => {
        setSelectedId(id);
        setOpenDialog(true);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ height: "100%", width: "95%", paddingLeft: 50, paddingRight: 50 }}>
            <h1>Stergere comercianti</h1>
            <DataGrid
                rows={comercianti}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                disableRowSelectionOnClick
            />
            <div>
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                    <DialogTitle>Confirmare</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Sunteti sigur ca doriti stergerea acestei inregistrari ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDialog(false)}>Anulare</Button>
                        <Button
                            onClick={() => {
                                deleteRowWithId(selectedId);
                                setOpenDialog(false);
                            }}
                        >
                            Sterge
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>


        </div>

    );
}
