import { Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { styles } from "./styles";

const PruebaGrid = () => {
    return (
        <Grid container>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <h2 style={{ backgroundColor: "red" }}>Caja 1</h2>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <h2 style={{ backgroundColor: "blue" }}>Caja 2</h2>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <h2 style={{ backgroundColor: "green" }}>Caja 3</h2>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Button variant="contained">Sumar</Button>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h5" sx={styles.caja5} color="primary.pepe">
            Caja 4
            </Typography>
        </Grid>
        <TextField label="nombre" variant="outlined" />
        </Grid>
    );
};

export default PruebaGrid;
