
import React, { useEffect, useState } from 'react'
// import Layout from '../../components/Layout/Layout'
import AdminMenu from '../layout/AdminMenu'
import axios from 'axios'
import toast from 'react-hot-toast'
import CategoryFrom from '../form/CategoryForms'
import { Modal } from 'antd'



const CreateCategories = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
        const [visible, setVisible] = useState(false);

    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState(" ");



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/v1/category/create-category', { name });
            if (data?.success) {
                toast.success(`${name} Category is successfully created`);
                //for Showing  updated category
                getAllCategories();
            }
          

        } catch (error) {
            console.log("Error while creating category in createCategory.js/admin.js", error);

        }
    }

    //get all categories

    const getAllCategories = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category');
            if (data?.success) {
                setCategories(data?.category); //category controller ke line 86 par  hamne reaponse me category bheja tha is liye category ko fetch karn hai
            }

        } catch (error) {
            console.log("Error in createCategory.js/admin/page", error);
           

        }
    }

    useEffect(() => {
        getAllCategories();

    }, [])


    //Delete the category____________________________________________________________________

    const handleDelete = async (pid) => {
        

        try {
            const { data } = await axios.delete(`/api/v1/category/delete-category/${pid}`, { name: updatedName });
            if (data.success) {
                toast.success(`Category is delted successfully`);
               
               
                
                getAllCategories();
            }
            else {
                toast.error(data.message);
            }

        } catch (error) {
            console.log("Error duruing updating category", error);
            toast.error("Something went While deleting category")

        }
    }

    //update the category____________________________________________________________________

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(`/api/v1/category/update-cateogry/${selected._id}`, { name: updatedName });
            if (data.success) {
                toast.success(`${updatedName} updated successfully`);
                setSelected(null);
                setUpdatedName(" ");
                setVisible(false);
                getAllCategories();
            }
            else {
                toast.error(data.message);
            }

        } catch (error) {
            console.log("Error duruing updating category", error);
            toast.error("Something wennt wrong with updateCategory")

        }
    }


    return (
       
            <div className="container m-3 p-3">
            
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9 manage-category">
                        <h1
                          style={{marginLeft:"20px"}} 
                         className='dashboard manage-category'>Manage Category</h1>
                        <div className="p-3 w-50">
                            <CategoryFrom
                                handleSubmit={handleSubmit}
                                value={name}
                                setValue={setName} />
                        </div>

                    <h2>List of All Category</h2>
                        <div className='w-75 table-row'>                        
                            <table className="table ">
                               
                                <tbody>                     
                                 {categories?.map((c) => (
                                        <div >
                                            <tr>                                                                                               
                                                <td
                                                className='table-data'
                                                
                                                  
                                                key={c._id}>{c.name}</td>
                                                <td
                                                    className='btn btn-primary table-data2  '
                                                    onClick={() => {
                                                        setVisible(true);
                                                        setUpdatedName(c.name);
                                                        setSelected(c)
                                                    }}

                                                >Edit</td>
                                                <td
                                                    className='btn btn-danger table-data2 '
                                                    onClick={()=>handleDelete(c._id)}

                                                >Delete</td>
                                            </tr>
                                        </div>
                                    ))}


                                </tbody>
                            </table>

                        </div>
                        <Modal
                            onCancel={() => setVisible(false)}
                            footer={null}
                            visible={visible}

                        >
                            <CategoryFrom handleSubmit={handleUpdate} value={updatedName} setValue={setUpdatedName}  />



                        </Modal>
                    </div>
                </div>
       
    )
}

export default CreateCategories



