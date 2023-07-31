import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../reducers/userReducer';


const Edit = () => {
    const {id} = useParams();

    const users = useSelector((state) => state.users);
    
    const existingUser = users.filter(f => f.id == id);
    const {name, email} = existingUser[0];
    const [editname, setName] = useState(name);                     //jo id match kr ke user ka purana data isi state me stor ekr diya
    const [editemail, setEmail] = useState(email);


    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleEdit = (event) => {
        event.preventDefault();

        dispatch(editUser({
            id: id,
            name: editname,
            email: editemail
        }))
        navigate('/')
    }



  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
     <div className='w-50 border bg-secondary text-white p-5'>
         <h3> Edit the User Detail </h3>
         <form onSubmit={handleEdit}>
             <div>
                 <label htmlFor='name'>Name:</label>
                 <input type='text' name='name' className='form-control' placeholder='Enter the name'  value={editname}
                 onChange={(e) => setName(e.target.value)}/>
             </div>
             <div>
                 <label htmlFor='email'>Email:</label>
                 <input type='email' name='email' className='form-control'  placeholder='Enter the email' value={editemail}
                  onChange={(e) => setEmail(e.target.value)}/>
             </div> <br />
             <button className='btn btn-info'>Update</button>
         </form>
     </div>
    </div>
 </>
  )
}

export default Edit