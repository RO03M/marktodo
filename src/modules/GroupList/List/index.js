import { Box, List, Fab, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Board from "./Board";
import AddIcon from '@mui/icons-material/Add';
import AddModal from "./AddModal";

const ListContainer = () => {

    const [modal, setModal] = useState(false);

    const theme = useTheme();
    const groups = useSelector(store => store.groups.groupList);

    console.log(groups);

    return (
        <Box
            component={List}
            sx={{
                margin: theme.spacing(2, 20)
            }}
        >
            {groups?.map((item, itemKey) => (
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