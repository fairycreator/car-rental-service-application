import {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export const GoalNav = () => {
  const [value, setValue] = useState('');
  const [helperText, setHelperText] = useState('Choose wisely');
const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'lose') {
      console.log("lose")
    } else if (value === 'maintain') {
      console.log("maintain")
    } else {
      console.log("muscle")
    }
      handleClose();
  };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Goal
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <form onSubmit={handleSubmit}>
                    <FormControl sx={{ m: 3 }} variant="standard">
                        <FormLabel id="demo-error-radios">
                            Target selection<br />
                            The service will adjust your calorie intake to your goal
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-error-radios"
                            name="quiz"
                            value={value}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="lose" control={<Radio />} label="Lose fat" />
                            <FormControlLabel value="maintain" control={<Radio />} label="Maintain" />
                            <FormControlLabel value="muscle" control={<Radio />} label="Gain Muscle" />
                        </RadioGroup>
                        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                            Confirm
                        </Button>
                    </FormControl>
                </form>
            </Menu>
        </div>
    
    );
}