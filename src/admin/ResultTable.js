import React, { useEffect, useState } from 'react'
import { earnPoints_Number, flagResult, getServerData } from '../helper/helper'
import { useSelector } from 'react-redux';
import './QuizStyle.css'
export default function ResultTable() {
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)


    const totalPoints = queue.length * 10; 
    // const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const [data, setData] = useState([])

    console.log("data", data);
    const flag = flagResult(totalPoints, earnPoints)


    useEffect(() => {
        getServerData(`/api/v1/quiz/result`, (res) => {
            setData(res)
        })
    },[])

  return (
    <div>
        <table>
            <thead className='qtable-header'>
                <tr className='qtable-row'>
                    <td>Name</td>
                    <td>Total Attemps Question</td>
                    <td>Earn Points</td>
                    {/* <td>Result</td> */}
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        

                        <tr className='qtable-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            {/* <td>{flag ? "Passed" : "Failed"|| ""}</td> */}
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}
