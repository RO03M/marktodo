import { Box, ButtonBase, Card, CardContent, TextField, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Card
                raised
            >
                <CardContent
                    sx={{
                        minWidth: 350,
                        display: "flex",
                        flexDirection: "column",
                        padding: 5,
                        "& > *": {
                            m: 1
                        }
                    }}
                >
                    <Typography
                        variant={"h5"}
                    >
                        Login
                    </Typography>
                    <TextField
                        placeholder={"example@email.com"}
                        label={"E-mail"}
                    />
                    <TextField
                        placeholder={"Senha"}
                        label={"Senha"}
                        type={"password"}
                    />
                    <Typography
                        sx={{
                            m: theme.spacing(0, 1)
                        }}
                    >
                        Não tem conta? <Link to={"/register"}>Crie uma</Link>
                    </Typography>
                    <ButtonBase
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            padding: theme.spacing(1.2, 5),
                            alignSelf: "flex-end"
                        }}
                    >
                        Entrar
                    </ButtonBase>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Login;