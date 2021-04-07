import React from "react"
import {quizQuestionsAmount, quizMaxGrade, quizAnswersAmount} from "../../constants/index";

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));


const QuizContent2 = ({currentStep, arrayGradesAnsweredQuestion, error}) => {

  console.log("error",error)
  console.log("arrayGradesAnsweredQuestion",arrayGradesAnsweredQuestion)  

  const DynamicQuestions = ({step}) => {
    ///////////////////////////// IMPORT  ///////////////////////////// IMPORT  ///////////////////////////// IMPORT
    const PollExampleRadio = () => {
      const arrayAnswers = [];
      for(let i =0; i<=quizMaxGrade; i+=quizMaxGrade/quizAnswersAmount){
        arrayAnswers.push(<FormControlLabel value={`${i}`} control={<Radio />} label={`${i} grade aswer`}/>) /// TODO play with controled checked
      }
      return arrayAnswers
    }
    ///////////////////////////// IMPORT  ///////////////////////////// IMPORT  ///////////////////////////// IMPORT
    
    const [value, setValue] = React.useState();
    const classes = useStyles();
  
    const handleMyChange = (event,questionNumber) => {
      setValue(event.target.value); 
      console.log("questionNumber",questionNumber);
      arrayGradesAnsweredQuestion[questionNumber-1]= event.target.value;
      localStorage.setItem("userGrade", arrayGradesAnsweredQuestion.reduce((a, b) => parseInt(a) + parseInt(b)));      
    }

    const arraysQuizBlocks = []
    for(let i =0; i<=quizMaxGrade; i+=quizMaxGrade/quizQuestionsAmount){
      let questionNumber = 0
      if (i !==0) {
        questionNumber = i/(quizMaxGrade/quizQuestionsAmount);
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
          <FormLabel >{currentStep === quizQuestionsAmount ? `The last Question, then go to Result by Clicking on "Done" button` :`question number ${currentStep}`}</FormLabel>
          <DynamicQuestions step = {currentStep}/>

          {arrayGradesAnsweredQuestion[currentStep-1] !==0 && (<FormLabel>
            Choose another option once you changed your mind or leave it with <b style={{color: "red"}}>current value</b> ==&gt; <b>{arrayGradesAnsweredQuestion[currentStep-1]} grade</b>
          </FormLabel>)}
          {error && <FormHelperText error={error}>{"CHOOSE OPTION!!! NEXT QUESTION IS NOT ALLOWED."}</FormHelperText> }
      </FormControl>
      <footer>summary grade ==&gt; {arrayGradesAnsweredQuestion.reduce((a, b) => parseInt(a) + parseInt(b))}</footer>
  </>);
}



export default QuizContent2