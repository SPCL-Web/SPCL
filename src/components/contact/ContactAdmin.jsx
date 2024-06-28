import React, { useEffect, useState } from 'react';


import axios from 'axios';
import './ContactAdmin.css'
const ContactAdmin = () => {





    const [data, setData] = useState([]);
    const [feedback, setfeedback] = useState([]);


    const options = [
        { label: "Not Seen", value: "Not Seen" },
        { label: "Seen", value: "Seen" },
        { label: "Resolved", value: "Resolved" },
        { label: "Resolving", value: "Resolving" },
        { label: "Ongoing", value: "Ongoing" },
    ];


    const FeedBackoptions = [
        {label:"Positive FeddBack", value:"Positive FeddBack"},
        {label:"Negative FeddBack", value:"Negative FeddBack"},
        {label:"Inprove Blog", value:"Inprove Blog"},
        {label:"Wrong Content", value:"Wrong Content"},
    ]
    const [statuses, setStatuses] = useState([]);
    const [feedBackstatuses, setfeedBackStatuses] = useState([]);

    const handleSelect = (index, e) => {
        const newStatuses = [...statuses];
        newStatuses[index] = e.target.value;
        setStatuses(newStatuses);
        localStorage.setItem('statuses', JSON.stringify(newStatuses)); // Save to localStorage
    };
    const feedbackhandleSelect = (index, e) => {
        const newStatuses = [...feedBackstatuses];
        console.log(newStatuses);
        newStatuses[index] = e.target.value;
        setStatuses(newStatuses);
        localStorage.setItem('feedbackstatuses', JSON.stringify(newStatuses)); // Save to localStorage
    };

    const getUserDetails = async () => {
        try {
            const responseData = await axios.get('/api/v1/get-contact');
            setData(responseData.data.response);
            // Initialize statuses based on fetched data
            const savedStatuses = JSON.parse(localStorage.getItem('statuses')) || [];
            const initialStatuses = responseData.data.response.map((user, index) => savedStatuses[index] || options[0].value);
            setStatuses(initialStatuses);
        } catch (error) {
            console.log("Error in getting user Details");
        }
    };


    const getFeedback = async () => {
        const data = await axios.get('/api/v1/blog/get-feedback');
        // console.log(data?.data?.data);

        setfeedback(data?.data?.data)

        const savedStatuses = JSON.parse(localStorage.getItem('feedbackstatuses')) || [];
        const initialStatuses = data?.data?.data.map((user, index) => savedStatuses[index] || options[0].value);
        setfeedBackStatuses(initialStatuses);
    }

    useEffect(() => {
        getFeedback();

    }, [])





    useEffect(() => {
        getUserDetails();
    }, []);







    return (
        <div>
            <h1 className=''>All User List here</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Query</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.query}</td>
                            <td>
                                <select value={statuses[index]} onChange={(e) => handleSelect(index, e)}>
                                    {options.map(option => (
                                        <option value={option.value} key={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>





            <h1>Blog FeedBack</h1>

           



            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>FeedBack Messages</th>
                        
                        <th>Take Action</th>
                    </tr>
                </thead>
                <tbody>
                    {feedback?.map((feedbk, index) => (
                        <tr key={feedbk._id}>
                            <td>{feedbk?.name}</td>
                            <td>{feedbk?.email}</td>
                            <td>{feedbk?.message}</td>
                         
                            <td>
                                <select value={feedBackstatuses[index]} onChange={(e) => feedbackhandleSelect(index, e)}>
                                    {FeedBackoptions.map(option => (
                                        <option value={option.value} key={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>











        </div>



    )
}

export default ContactAdmin