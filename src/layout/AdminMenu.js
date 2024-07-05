import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminMenu = () => {
    return (
        <div className='dashboard-color'>
    
            <div className="text-center admin-menu">
                <div className="list-group">
                    <h4 className='dashboard'>Admin Panel</h4>

                    <NavLink to="/dashboard/create-category" className="list-group-item list-group-item-action dashboard-item">Create Category</NavLink>
                    <NavLink to="/dashboard/create-blog" className="list-group-item list-group-item-action dashboard-item">Manage Blog</NavLink>
                    <NavLink to="/all-blog" className="list-group-item list-group-item-action dashboard-item">All Blog</NavLink>
                    <NavLink to="/contact-admin" className="list-group-item list-group-item-action dashboard-item">Contact Info</NavLink>
                    <NavLink to="/quiz-admin" className="list-group-item list-group-item-action dashboard-item ">Manage Quiz</NavLink>
                    <NavLink to="/result" className="list-group-item list-group-item-action dashboard-item">Quiz Result</NavLink>

                </div>

            </div>


        </ div>
    )
}

export default AdminMenu