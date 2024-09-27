import {React, useState, useEffect} from 'react'
import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import apiInstance from '../../utils/axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Toast from '../plugin/Toast';

function CreateNewPassword() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();
  const [searchParams] = useSearchParams()

  const otp = searchParams.get("otp")
  const uuidb64 = searchParams.get("uuidb64")
  const refresh_token = searchParams.get("refresh_token")
  

  const handleCreatePassword = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (confirmPassword !== password) {
      Toast().fire({
        title: "Pwd doesnot match",
        icon: "error",
    })
      return;
    } else {
      const formdata = new FormData()
      formdata.append("password", password)
      formdata.append("otp", otp)
      formdata.append("uuidb64", uuidb64)
      formdata.append("refresh_token", refresh_token)

      try {
        await apiInstance.post(`user/password-change`, formdata).then((res)=> {
          console.log(res.data)
          Toast().fire({
            title: "Password changed successfully",
            icon: "success",
        })
          setIsLoading(false)
          navigate('/login/')

        })
      } catch (error) {
        console.log(error)
        setIsLoading(false)

      }
    }
  }

  return (
    <>
      <BaseHeader />

      <section className="container d-flex flex-column vh-100" style={{ marginTop: "150px" }}>
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
          <div className="col-lg-5 col-md-8 py-8 py-xl-0">
            <div className="card shadow">
              <div className="card-body p-6">
                <div className="mb-4">
                  <h1 className="mb-1 fw-bold">Create New Password</h1>
                  <span>
                    Choose a new password for your account
                  </span>
                </div>
                <form className="needs-validation" noValidate="" onSubmit={handleCreatePassword}>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Enter New Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="**************"
                      required=""
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">
                      Please enter valid password.
                    </div>
                  </div>


                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="**************"
                      required=""
                      onChange={(e) => setConfirmPassword(e.target.value)}

                    />
                    <div className="invalid-feedback">
                      Please enter valid password.
                    </div>
                  </div>



                  <div>
                    <div className="d-grid">
                      {isLoading === true && (
                      <button type="submit" className="btn btn-success">
                        Processing <i className='fas fa-spinner fa-spin'></i>
                      </button>
                      )}
                      {isLoading === false && (
                      <button type="submit" className="btn btn-primary">
                        Save New Password <i className='fas fa-check-circle'></i>
                      </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  )
}

export default CreateNewPassword