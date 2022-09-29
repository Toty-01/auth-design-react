import React, {useContext} from 'react'
import {UserContext} from '../context/userContext'
import '../App.css'

const SignUpModal = () => {
  const {modalState, toggleModals} = useContext(UserContext)
  return (
    <>
    {modalState.SignUpModal && (

    <div className='position-fixed top-0 vw-100 vh-100'>
      <div className="w-100 h-100 bg-dark bg-opacity-75">
        <div className="position-absolute top-50 start-50 translate-middle" style={{minWidth: "400px"}}>
          <div className="modal-dialog bg-light">
            <div className="modal-content">

              <div className="modal-header p-2">
                <h5 className='modal-title mt-2'>Sign Up</h5>
                <button className='btn-close mt-3'></button>
              </div>
              <hr/>
              <div className="modal-body">
                
                <form className='sign-up-form'>
                  <div className="modal-contents">
                    <label htmlFor="signUpEmail" className='form-label'>Email adress</label>
                    <input
                    name="email" 
                    type="email" 
                    className='form-control'
                    id='signUpEmail'
                    required
                    />    
                  </div>
                  <div className="modal-contents">
                    <label htmlFor="signUpPwd" className='form-label'>Password</label>
                    <input
                    name="pwd" 
                    type="password" 
                    className='form-control'
                    id='signUpPwd'
                    required
                    />    
                  </div>
                  <div className="modal-contents">
                    <label htmlFor="repeatPwd" className='form-label'>Repeat Password</label>
                    <input
                    name="pwd" 
                    type="password" 
                    className='form-control'
                    id='repeatPwd'
                    required
                    />    
                    <p className="text-danger mt-1">Validation</p>
                  </div>
                  <div className='btn-modal-foot'>
                    <button className='btn btn-primary mb-4'>Submit</button>
                  </div>
                </form>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
      )}
    </>
  )
}

export default SignUpModal