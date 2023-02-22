import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/userServices'

const SignUp = () => {
  const navigate = useNavigate()
  const { handleSubmit, register } = useForm()

  const sendData = async (data) => {
    try {
      const result = await registerUser(data)
      console.log(result)
      if (result.status === 201) {
        navigate('/signIn')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='container'>
      <h1 className='my-3'>Sign Up</h1>
      <form className='d-block' onSubmit={handleSubmit(sendData)}>
        <label className='form-label' htmlFor='signUpFirstNameInput'>First Name</label>
        <input {...register('first_name')} className='form-control' type='text' placeholder='Name' id='signUpFirstNameInput' required />
        <label className='form-label' htmlFor='signUpLastNameInput'>Last Name</label>
        <input {...register('last_name')} className='form-control' type='text' placeholder='Last Name' id='signUpLastNameInput' required />
        <label className='form-label' htmlFor='signUpGenderSelect'>Gender</label>
        <select {...register('gender')} className='form-select' id='signUpGenderSelect' required>
          <option value=''>Choose...</option>
          <option value='M'>Male</option>
          <option value='F'>Female</option>
        </select>
        <label className='form-label' htmlFor='signUpEmailInput'>Email</label>
        <input {...register('email')} className='form-control' type='email' placeholder='Email address' id='signUpEmailInput' pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?" />
        <label className='form-label' htmlFor='signUpPasswordInput'>Password</label>
        <input {...register('password')} className='form-control' type='password' placeholder='Password' id='signUpPasswordInput' required />
        <label className='form-label' htmlFor='signUpRoleSelect'>Role</label>
        <select {...register('role')} className='form-select' id='signUpRoleSelect' required>
          <option value=''>Choose...</option>
          <option value='COSTUMER'>Costumer</option>
          <option value='ADMIN'>Admin</option>
        </select>
        <button className='btn btn-success mt-3' type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
