import { Box, Button, TextField, useTheme } from "@mui/material";

const SearchBar = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                margin: theme.spacing(2, 20)
            }}
        >
            <TextField
                label={"Pesquisar por grupos"}
                sx={{
                    flex: 1
                }}
            />
            <Button
                variant={"contained"}
            >
                Pesquisar
            </Button>
        </Box>
    );
}

export default SearchBar;