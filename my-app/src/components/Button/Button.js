import Button from '@mui/material/Button';

export function WOPButton(props) {

    const { text } = props;

    return (
        <Button variant="outlined"> 
            {text}
        </Button>
    )
}