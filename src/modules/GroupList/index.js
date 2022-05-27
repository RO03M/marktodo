import { Box } from "@mui/material";
import Header from "./Header";
import ListContainer from "./List";
import SearchBar from "./SearchBar";

const GroupList = () => {
    return (
        <Box>
            <Header/>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <SearchBar/>
                <ListContainer/>
            </Box>
        </Box>
    );
}

export default GroupList;