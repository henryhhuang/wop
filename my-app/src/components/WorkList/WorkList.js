import data from "../../mock/workout.json";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ExerciseTable } from "../ExerciseTable/ExerciseTable";

export function WorkList(props) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container direction="column" alignItems="center" justifyContent="flex-start" spacing={1}>
                    {data[0].exercises.map((exercise) => (
                        <Grid item key={"grid-" + exercise.name}>
                        <ExerciseTable key={"et-" + exercise.name} name={exercise.name} sets={exercise.sets} > </ExerciseTable>
                        </Grid>
                    ))}
            </Grid>
        </Box>
    )
}
