import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function Questions() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "A") {
      setHelperText('You got it!');
      setError(false);
    } else if (value === "B") {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">quiz:.</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
         <FormControlLabel value="A" control={<Radio />} label="A" />
         <FormControlLabel value="B" control={<Radio />} label="B" />
         <FormControlLabel value="C" control={<Radio />} label="C" />
         <FormControlLabel value="D" control={<Radio />} label="D" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}


// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// export default function Quiz() {
//   return (
//     <FormControl>
//       <FormLabel id="demo-radio-buttons-group-label">Question One</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Two</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Three</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Four</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Five</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Six</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Seven</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Eight</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Nine</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Ten</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Eleven</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Twelve</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Thirteen</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Fourteen</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//       <FormLabel id="demo-radio-buttons-group-label">Question Fifteen</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="A" control={<Radio />} label="A" />
//         <FormControlLabel value="B" control={<Radio />} label="B" />
//         <FormControlLabel value="C" control={<Radio />} label="C" />
//         <FormControlLabel value="D" control={<Radio />} label="D" />
//       </RadioGroup>
//     </FormControl>
//   );
// }