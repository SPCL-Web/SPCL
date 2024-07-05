import React, { useEffect, useRef, useState } from 'react'
import AdminMenu from '../layout/AdminMenu'
import axios from 'axios'
import toast from 'react-hot-toast';

const QuizAdmin = () => {
    const [allQuestion, setallQuestion] = useState([]);
    const [answer, setAnser] = useState([]);
    // const [quizanswer, setQuizAnswer] = useState('');



    const fetchQuizQuest = async () => {
        const questions = await axios.get('/api/v1/quiz/questions')

        setallQuestion(questions?.data[0]);
        setAnser(questions?.data[0].answers)

    }

    useEffect(() => {
        fetchQuizQuest();

    }, [])

    const [questionData, setQuestionData] = useState({
        id: '',
        question: '',
        options: ['', '', '', '']
    });
    const [Quizanswer, QuizsetAnswer] = useState('');



    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestionData({
            ...questionData,
            [name]: value
        });
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...questionData.options];
        newOptions[index] = value;
        setQuestionData({
            ...questionData,
            options: newOptions
        });
    };



    const insertQuestion = async (e) => {
        try {
            e.preventDefault();

            const insert = await axios.post('/api/v1/quiz/questions', {
                questions: questionData

            })

            await axios.put('/api/v1/quiz/addAnswer',{
                answer: parseInt(Quizanswer)
            })
            console.log("data Inserted successfully");
            toast.success("Question added successfully");
            fetchQuizQuest();


        } catch (error) {
            console.log("Error While Inserting Question", error);
            toast.error("Error while inserting Question", error);

        }
    }

 

    return (
        <>

            <AdminMenu />



            <form onSubmit={insertQuestion}>
                <div>
                    <label>Question ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={questionData.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Question:</label>
                    <input
                        type="text"
                        name="question"
                        value={questionData.question}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Option 1:</label>
                    <input
                        type="text"
                        value={questionData.options[0]}
                        onChange={(e) => handleOptionChange(0, e.target.value)}
                    />
                </div>
                <div>
                    <label>Option 2:</label>
                    <input
                        type="text"
                        value={questionData.options[1]}
                        onChange={(e) => handleOptionChange(1, e.target.value)}
                    />
                </div>
                <div>
                    <label>Option 3:</label>
                    <input
                        type="text"
                        value={questionData.options[2]}
                        onChange={(e) => handleOptionChange(2, e.target.value)}
                    />
                </div>
                <div>
                    <label>Option 4:</label>
                    <input
                        type="text"
                        value={questionData.options[3]}
                        onChange={(e) => handleOptionChange(3, e.target.value)}
                    />
                </div>



                <div>
                    <label>Answer (1-4):</label>
                    <input
                        type="number"
                        value={Quizanswer}
                        onChange={(e) => QuizsetAnswer(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {
                allQuestion?.questions?.map(q => (
                    // <h2 className='created'>Created At - {moment(q?.createdAt).fromNow()}</h2>
                    <>
                        <p>{q.id}</p>

                        <p id={q.id}>{q.
                            question
                        }</p>


                        {q.options.map(o => (
                            <p>{o}</p>
                        ))}

                    </>


                ))
            }
            <p>Answer Array</p>
            {answer}





        </>
    )
}

export default QuizAdmin