import React, {useState} from 'react'
import { addUser } from '../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users);   // this to access the users data


    const dispatch = useDispatch();
    const navigate = useNavigate();    



   const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addUser({
        id :users.length > 0 ? users[users.length - 1].id + 1 : 0 && users[users.length - 1].id + 1,                        //array value 0,1,2,3 {4} so lenght=4  then lenght-1 =3 then  id = lenght+1  =>{4}   so id=4 
        name,
        email,
    }))
    navigate('/')                                            //it will naviaget us to home page because its routing (empty url) matches with the home page (empty url)

   }
  return (
    <>
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control' placeholder='Enter the name'
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' className='form-control'  placeholder='Enter the email'
                    onChange={(e) => setEmail(e.target.value)}/>
                </div> <br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
       </div>
    </>
  )
}

export default Create