import React from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../reducers/userReducer'



const Home = () => {
    const users = useSelector((state) => state.users)      // console.log(users)

    const dispatch = useDispatch();



    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }

    return (
        <>

            <div className='container'>
                <h2> Crud App with Redux </h2>
                <div className='top_button_container'>
                    <div className='top_button_left'>
                        <Link to="/create">
                            <button className='btn btn-success my-3'> Create++</button>
                        </Link>
                    </div>

                    <div className='top_button_right'>
                        <Link to="/product">
                            <button className='btn btn-success my-3'> Go to Products </button>
                        </Link>
                    </div>

                </div>



                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`}> <button className='btn btn-sm btn-primary'> Edit </button> </Link>

                                    <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'> Delete </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default Home