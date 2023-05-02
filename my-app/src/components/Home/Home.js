// import * as React from "react";
import { WOPButton } from "../Button/Button";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

export function Home(props) {

    return (
        <div>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <Link to="create">
                    <WOPButton text="Track"></WOPButton>
                </Link>

                    <WOPButton text="Pull Workout 1"></WOPButton>
            </Stack>

        </div>
    )
}