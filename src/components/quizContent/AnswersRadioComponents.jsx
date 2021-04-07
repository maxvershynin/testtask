import React from "react"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import { quizMaxGrade, quizAnswersAmount } from "../../constants/index";

const PollExampleRadio = () => {
    const arrayAnswers = [];
    for(let i = 0; i <= quizMaxGrade; i+= quizMaxGrade/quizAnswersAmount){
      arrayAnswers.push(<FormControlLabel value={`${i}`} control={<Radio />} label={`${i} grade aswer`}/>) /// TODO play with controled checked
    }
    return arrayAnswers
}

export default PollExampleRadio;