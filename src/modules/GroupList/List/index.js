import { Box, List, ListItem, useTheme } from "@mui/material";
import { listData } from "./data";

const ListContainer = () => {

    const theme = useTheme();

    return (
        <Box
            component={List}
            sx={{
                margin: theme.spacing(2, 20)
            }}
        >
            {listData?.map((item, itemKey) => (
                <ListItem
                    key={itemKey}
                    sx={{
                        backgroundColor: itemKey % 2 == 0 ? "#fff" : "#F0F0F0",
                        padding: 2
                    }}
                >
                    {item?.name}
                </ListItem>
            ))}
        </Box>
    );
}

export default ListContainer;