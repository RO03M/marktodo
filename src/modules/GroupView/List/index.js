import { Box, List, Fab, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Board from "./Board";
import AddIcon from '@mui/icons-material/Add';
import AddModal from "./AddModal";
import { useParams } from "react-router-dom";

const ListContainer = () => {

    const [modal, setModal] = useState(false);

    const { groupId } = useParams();

    const theme = useTheme();
    const lessons = useSelector(store => store.lessons.lessonsList.filter(x => x?.groupId === groupId));

    return (
        <Box
            component={List}
            sx={{
                margin: {
                    xs: theme.spacing(2, 4),
                    md: theme.spacing(2, 20)
                }
            }}
        >
            {lessons?.map((item, itemKey) => (
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