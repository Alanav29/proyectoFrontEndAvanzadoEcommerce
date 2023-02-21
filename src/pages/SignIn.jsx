// import { useContext } from 'react'
import { useForm } from 'react-hook-form'
// import { AuthContext } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'
// import { loginUser } from '../services/userServices'

const SignIn = () => {
  // const { login } = useContext(AuthContext)
  // const navigate = useNavigate()

  // const sendData = async (data) => {
  //   try {
  //     const result = await loginUser(data)
  //     console.log(result)
  //     if (result.status === 200) {
  //       const token = result.data.token
  //       // login(token)
  //       console.log(token)
  //       navigate('/')
  //     }
  //   } catch (error) {

  //   }
  // }

  const printUser = (data) => { console.log(data) }

  const { register, handleSubmit } = useForm()

  return (
    <div className='container'>
      <h1 className='my-4'>Sign in</h1>
      <form onSubmit={handleSubmit(printUser)}>
        <div className='mb-3'>
          <label htmlFor='emailInput' className='form-label'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='emailInput'
            {...register('email')}
            placeholder='name@example.com'
          />
          <div id='emailHelp' className='form-text'>We'll never share your email with anyone else.</div>
        </div>
        <div className='mb-3'>
          <label htmlFor='passwordInput' className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            id='passwordInput'
            {...register('password')}
            placeholder='Password'
          />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>

    </div>
  )
}

export default SignIn
