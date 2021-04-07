import React from "react"
import {quizQuestionsAmount, quizMaxGrade, quizAnswersAmount} from "../../constants/index";

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

// const QuizContent = ({currentStep, currentGrade, setGrade, gradeSummary}) => {
//     console.log("gradeSummary",gradeSummary)
//     React.useEffect(()=>{
//         var sum = 0;
//         for(var i = 0; i < gradeSummary.length; i++){
//             sum += gradeSummary[i];
//         }
//         setGrade(sum)
//     },[currentStep])

//     const elements = []
  
//     for(let i =0; i<=100; i+=20){
//         elements.push(<li>
//         <span>{i} grade</span>
//         <input type={"checkbox"} selected = {false} onClick={()=>gradeSummary[currentStep] = i}></input>
//      </li>)
//     }
//     return (
//     <>
//         <header>{currentStep === quizQuestionsAmount ? `The last Question, then go to Result by Clicking on "Done" button` : `question number ${currentStep}`}</header>
//         <ul>
//             {elements.map(element=>element)}
//         </ul>
//         <footer>{currentGrade}</footer>
//     </>);
// }

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(3),
//     },
//     button: {
//       margin: theme.spacing(1, 1, 0, 0),
//     },
//   }));



const QuizContent2 = ({currentStep, arrayGradesAnsweredQuestion}) => {
  console.log("arrayGradesAnsweredQuestion",arrayGradesAnsweredQuestion)

  ///////////////////////////// IMPORT  ///////////////////////////// IMPORT  ///////////////////////////// IMPORT
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////
    ///////////////////////////// IMPORT  ///////////////////////////// IMPORT  ///////////////////////////// IMPORT

  const DynamicQuestions = ({step}) => {
    const PollExampleRadio = () => {
      const arrayAnswers = [];
      for(let i =0; i<=quizMaxGrade; i+=quizMaxGrade/quizAnswersAmount){
        arrayAnswers.push(<FormControlLabel value={`${i}`} control={<Radio />} label={`${i} grade aswer`}/>) /// TODO play with controled checked
      }
      return arrayAnswers
    }
    
    const [value, setValue] = React.useState();
  
    const handleMyChange = (event,questionNumber) =>{
      setValue(event.target.value); 
      console.log("questionNumber",questionNumber);
      arrayGradesAnsweredQuestion[questionNumber-1]= event.target.value;

      
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

    console.log("step",step)
    return arraysQuizBlocks[step];
  }
  ///////////////////////////// IMPORT  ///////////////////////////// IMPORT  ///////////////////////////// IMPORT
      
        const classes = useStyles();

        const handleSubmit = (event) => {
          event.preventDefault();
      
        };

        return (
        <>
            <FormControl component="fieldset"  className={classes.formControl}> {/*error={error}*/}
                <FormLabel >{currentStep === quizQuestionsAmount ? `The last Question, then go to Result by Clicking on "Done" button` :`question number ${currentStep}`}</FormLabel>
                <DynamicQuestions step = {currentStep}/>

                {arrayGradesAnsweredQuestion[currentStep-1] && (<FormLabel>
                  Choose another option once you changed your mind or leave it with current value ==> <b>{arrayGradesAnsweredQuestion[currentStep-1]} grade</b>
                </FormLabel>)}
            </FormControl>
            <footer>{"grade"}</footer>
        </>);


}



export default QuizContent2