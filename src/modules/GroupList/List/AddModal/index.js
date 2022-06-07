import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import useAddModal from "./useAddModal";

const AddModal = props => {

    const {
        ...others
    } = props;

    const {
        name,
        description,
        handleDescription,
        handleName,
        handleAdd
    } = useAddModal();

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
                        margin: "7px !important"
                    }
                }}
            >
                <TextField
                    label={"Nome do grupo"}
                    onChange={handleName}
                    value={name}
                />
                <TextField
                    label={"Descrição do grupo"}
                    onChange={handleDescription}
                    value={description}
                    multiline
                    rows={3}
                />
                <Button
                    color={"primary"}
                    variant={"contained"}
                    onClick={handleAdd}
                >
                    Adicionar
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default AddModal;