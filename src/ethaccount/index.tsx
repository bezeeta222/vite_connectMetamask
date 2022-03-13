import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchEthaccountRequest } from "./actions";
import {
    getErrorSelector,
    getEthaccountSelector,
    getPendingSelector
} from "./selectors";

const Ethaccount = () => {
    const ethaccount = useSelector(getEthaccountSelector);
    const pending = useSelector(getPendingSelector);
    const error = useSelector(getErrorSelector);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(fetchEthaccountRequest());
    };

    if (error)
        return <div style={{ marginTop: "27px" }}>Install Metamask!</div>;

    return (
        <div style={{ marginTop: "27px" }}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        Public key
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {ethaccount
                            ? ethaccount.publicKey
                            : "Click update button below"}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {ethaccount ? `${ethaccount.balance} ETHER` : null}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleUpdate}>
                        update {pending ? "Loading..." : null}
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Ethaccount;
