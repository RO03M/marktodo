import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteGroup, editGroup } from "../../../../../actions/groupsAction";
import { DeleteButton, EditButton } from "../../../../../utils/buttons";
import EditModal from "./EditModal";

const Actions = props => {

    const {
        id,
        name,
        description
    } = props;

    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();

    return (
        <Box>
            <EditButton
                onClick={() => setModal(true)}
            />
            <DeleteButton
                onClick={() => dispatch(deleteGroup(id))}
            />
            <EditModal
                open={modal}
                onClose={() => setModal(false)}
                initialData={{
                    id,
                    name,
                    description
                }}
            />
        </Box>
    );
}

export default Actions;