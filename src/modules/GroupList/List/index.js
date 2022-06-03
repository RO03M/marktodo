import { Box, List, Fab, useTheme } from "@mui/material";
import { listData } from "./data";

import Board from "./Board";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import AddModal from "./AddModal";

const ListContainer = () => {

    const [modal, setModal] = useState(false);

    const theme = useTheme();

    return (
        <Box
            component={List}
            sx={{
                margin: theme.spacing(2, 20)
            }}
        >
            {listData?.map((item, itemKey) => (
                <Board
                    key={itemKey}
                    itemKey={itemKey}
                    {...item}
                />
            ))}
            <Fab
                color={"primary"}
                onClick={() => setModal(true)}
                sx={{
                    position: "fixed",
                    right: 10,
                    bottom: 10
                }}
            >
                <AddIcon/>
            </Fab>
            <AddModal
                open={modal}
                onClose={() => setModal(false)}
            />
        </Box>
    );
}

export default ListContainer;