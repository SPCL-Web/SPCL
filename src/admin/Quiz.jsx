import React, { useEffect, useRef, useState } from 'react'
import Questions from './Question'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import './QuizStyle.css'
import { setUserId } from '../redux/resultReducer';
import toast from 'react-hot-toast';

export default function Quiz() {
    const[username , setUsername] = useState('');


    const [check, setChecked] = useState(undefined)
    const navigate = useNavigate();

    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    console.log(queue, trace);
    const dispatch = useDispatch()

    /** next button event handler */
    function onNext() {
        if (trace < queue.length) {
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
            if (result.length <= trace) {
                dispatch(PushAnswer(check))
            }
        }

        /** reset the value of the checked variable */
        setChecked(undefined)
    }

    /** Prev button event handler */
    function onPrev() {
        if (trace > 0) {
            /** decrease the trace value by one using MovePrevQuestion */
            dispatch(MovePrevQuestion());
        }
    }

    function onChecked(check) {
        setChecked(check)
    }

    /** finished exam after the last question */
    if (result.length && result.length >= queue.length) {
        return <Navigate to={'/result'} replace={true}></Navigate>
    }
    // const inputRef = useRef(null)


    // function startQuiz(){
    //     if(inputRef.current?.value){
    //         dispatch(setUserId(inputRef.current?.value))
    //     }
    // }

  

    dispatch(setUserId(username))

    return (
        <div className='qcontainer'>


            <form id="form">
                <input  value={username} onChange={(e)=>setUsername(e.target.value)}     className="userid" type="text" placeholder='Username*' />
            </form>

        


            <h1 className='qtitle text-light'>SPCL Quiz</h1>

            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>10 points is awarded for the correct answer.</li>
                <li>Each question has three options. You can choose only one options.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>


            {/* <h1 className='qtitle text-light'>Quiz Application</h1> */}

            {/* display questions */}
            <Questions onChecked={onChecked} />

            <div className='qgrid'>
                {trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}
