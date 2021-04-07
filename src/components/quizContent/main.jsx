import React from "react"
import RadioGroup from '@material-ui/core/RadioGroup';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

import PollExampleRadio from "./AnswersRadioComponents"
import { dataObj } from "../../constants/index";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));


const QuizContent = ({currentStep, arrayGradesAnsweredQuestion, error}) => {

  const classes = useStyles();
  const DynamicQuestions = ({step,array}) => {    
    const [value, setValue] = React.useState();

    const handleMyChange = (event,questionNumber) => {
      setValue(event.target.value); 
      array[questionNumber-1]= event.target.value;
      localStorage.setItem("userGrade", array.reduce((a, b) => parseInt(a) + parseInt(b)));      
    }

    const arraysQuizBlocks = []
    for(let i =0; i<=dataObj.quizMaxGrade; i+=dataObj.quizMaxGrade/dataObj.quizQuestionsAmount){
      let questionNumber = 0
      if (i !==0) {
        questionNumber = i/(dataObj.quizMaxGrade/dataObj.quizQuestionsAmount);
      }
      arraysQuizBlocks.push(
        <RadioGroup aria-label="quiz" value = {value} onChange={event => handleMyChange(event,questionNumber)} name={`quiz_question#${questionNumber}`} > 
          <PollExampleRadio/> 
        </RadioGroup>)
    }
    return arraysQuizBlocks[step];
  }
  
  return (
  <>
      <FormControl component="legend"  className={classes.formControl}> 
          <FormLabel >{currentStep === dataObj.quizQuestionsAmount ? `The last Question, then go to Result by Clicking on "Done" button` :`question number ${currentStep}`}</FormLabel>
          <DynamicQuestions step = {currentStep} array ={arrayGradesAnsweredQuestion}/>

          {arrayGradesAnsweredQuestion[currentStep-1] !==0 && (<FormLabel>
            Choose another option once you changed your mind or leave it with <b style={{color: "red"}}>current value</b> ==&gt; <b>{arrayGradesAnsweredQuestion[currentStep-1]} grade</b>
          </FormLabel>)}
          {error && <FormHelperText error={error}>{"CHOOSE OPTION!!! NEXT QUESTION IS NOT ALLOWED."}</FormHelperText> }
      </FormControl>
      <footer>summary grade ==&gt; {arrayGradesAnsweredQuestion.reduce((a, b) => parseInt(a) + parseInt(b))}</footer>
  </>);
}



export default QuizContent