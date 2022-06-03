import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";

const AddModal = props => {

    const {
        ...others
    } = props;

    return (
        <Dialog
            {...others}
        >
            <DialogTitle>
                Adicionar grupo
            </DialogTitle>
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 300,
                    "& > *": {
                        margin: 1
                    }
                }}
            >
                <TextField
                    label={"Nome do grupo"}
                />
                <TextField
                    label={"Descrição do grupo"}
                    multiline
                    rows={3}
                />
                <Button
                    color={"primary"}
                    variant={"contained"}
                >
                    Adicionar
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default AddModal;