import React from "react"
import quizQuestionsAmount from "../constants/index";

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const QuizContent = ({currentStep, currentGrade, setGrade, gradeSummary}) => {
    console.log("gradeSummary",gradeSummary)
    React.useEffect(()=>{
        var sum = 0;
        for(var i = 0; i < gradeSummary.length; i++){
            sum += gradeSummary[i];
        }
        setGrade(sum)
    },[currentStep])

    const elements = []
  
    for(let i =0; i<=100; i+=20){
        elements.push(<li>
        <span>{i} grade</span>
        <input type={"checkbox"} selected = {false} onClick={()=>gradeSummary[currentStep] = i}></input>
     </li>)
    }
    return (
    <>
        <header>{currentStep === quizQuestionsAmount ? `The last Question, then go to Result by Clicking on "Done" button` : `question number ${currentStep}`}</header>
        <ul>
            {elements.map(element=>element)}
        </ul>
        <footer>{currentGrade}</footer>
    </>);
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
  }));

const QuizContent2 = ({currentStep, currentGrade, setGrade, gradeSummary}) => {
      
        const classes = useStyles();
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
      
          if (value === 'best') {
            setHelperText('You got it!');
            setError(false);
          } else if (value === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
          } else {
            setHelperText('Please select an option.');
            setError(true);
          }
        };

        const elements = [];

        for(let i =0; i<=100; i+=20){
            elements.push(<form onSubmit={handleSubmit}>
                   <FormControl component="fieldset" error={error} className={classes.formControl}>
                     <FormLabel component="legend">Pop quiz: Material-UI is...</FormLabel>
                     <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                       <FormControlLabel value="20" control={<Radio />} label="grade" onClick={()=>console.log('asdf')}/>
                     </RadioGroup>
                     <FormHelperText>{helperText}</FormHelperText>
                     <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                       Check Answer
                     </Button>
                   </FormControl>
                 </form>)
        }
        return (
        <>
            <header>{currentStep === quizQuestionsAmount ? `The last Question, then go to Result by Clicking on "Done" button` : `question number ${currentStep}`}</header>
            <ul>
                {elements.map(element=>element)}
            </ul>
            <footer>{currentGrade}</footer>
        </>);


}



export default QuizContent2