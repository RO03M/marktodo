import { ListItem, Typography } from "@mui/material";

import Actions from "./Actions";

const Board = props => {

    const {
        name,
        itemKey
    } = props;

    return (
        <ListItem
            sx={{
                backgroundColor: itemKey % 2 == 0 ? "#fff" : "#F0F0F0",
                padding: 2,
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            <Typography>
                {name}
            </Typography>
            <Actions/>
        </ListItem>
    );
}

export default Board;