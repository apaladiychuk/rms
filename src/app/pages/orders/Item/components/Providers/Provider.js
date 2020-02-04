import React from 'react';
import {
    Grid,
    Paper,
    Typography,
    Divider,
    Button,
} from "@material-ui/core";
import Resources from "../Resources/Resources";
import DeleteIcon from "@material-ui/icons/Delete";
import * as Actions from "../../store/actions";
import {useDispatch} from "react-redux";

function Provider({ item, isNewProvider }) {

    const dispatch = useDispatch();

    const deleteProvider = () => {
        isNewProvider
            ? dispatch(Actions.deleteProvider())
            : console.log('del')
    };

    return (
        <Grid item xs={12}>
            <Paper className="p-15">
                <div className="flex justify-between items-center pb-15">
                    <Typography variant="body1" className="font-normal">
                        {item.provider_name || 'Провайдер'}
                    </Typography>
                    <Button
                        style={{
                            color: '#e53935',
                            borderColor: '#e53935'
                        }}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={deleteProvider}
                    >
                        Удалить
                    </Button>
                </div>
                <Divider />

                <Resources provider={item} isNewProvider={isNewProvider} />
            </Paper>
        </Grid>
    );
}

export default Provider;