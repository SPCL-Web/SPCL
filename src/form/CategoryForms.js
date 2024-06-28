import React from 'react'
import './Category.css'
const CategoryFroms = ({ handleSubmit, value, setValue }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 categry">
                    <h3
                    style={{marginLeft:"5px"}} 
                    >                Enter New Category  </h3>
                  
                    <input type="text"

                        className="form-control"
                        placeholder='Enter new Category'
                        value={value}
                            
                        onChange={(e) => setValue(e.target.value)


                        }
                       
                    />

                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default CategoryFroms