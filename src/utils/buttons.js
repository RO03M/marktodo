import { ButtonBase } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { red, yellow } from "@mui/material/colors";

export const EditButton = props => {

    const {
        ...others
    } = props;

    return (
        <ButtonBase
            {...others}
            sx={{
                padding: .5,
                bgcolor: yellow[600],
                color: "#fff",
                borderRadius: 1,
                margin: 0.5
            }}
        >
            <EditIcon
                fontSize={"small"}
            />
        </ButtonBase>
    );
}

export const DeleteButton = props => {

    const {
        ...others
    } = props;

    return (
        <ButtonBase
            {...others}
            sx={{
                padding: .5,
                bgcolor: red[600],
                color: "#fff",
                borderRadius: 1
            }}
        >
            <DeleteIcon
                fontSize={"small"}
            />
        </ButtonBase>
    );
}