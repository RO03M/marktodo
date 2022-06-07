import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { editGroup } from "../../../../../actions/groupsAction";
import { DeleteButton, EditButton } from "../../../../../utils/buttons";

const Actions = props => {

    const {
        id
    } = props;

    const dispatch = useDispatch();

    return (
        <Box>
            <EditButton
                onClick={() => dispatch(editGroup(id, "a", ""))}
            />
            <DeleteButton/>
        </Box>
    );
}

export default Actions;