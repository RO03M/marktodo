import { Box } from "@mui/material";
import { DeleteButton, EditButton } from "../../../../../utils/buttons";

const Actions = props => {
    return (
        <Box>
            <EditButton/>
            <DeleteButton/>
        </Box>
    );
}

export default Actions;