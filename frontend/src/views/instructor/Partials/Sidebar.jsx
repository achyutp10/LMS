import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="col-lg-3 col-md-4 col-12">
            <nav className="navbar navbar-expand-md shadow-sm mb-4 mb-lg-0 sidenav">
                <a className="d-xl-none d-lg-none d-md-none text-inherit fw-bold text-decoration-none text-dark p-3" href="#">Menu</a>
                <button className="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light m-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidenav" aria-controls="sidenav" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="bi bi-grid" />
                </button>
                <div className="collapse navbar-collapse p-3" id="sidenav">
                    <div className="navbar-nav flex-column">
                        <ul className="list-unstyled ms-n2 mb-4">
                            <li className="nav-item">
                                <Link className="nav-link " to={`/instructor/dashboard/`}> <i className='bi bi-grid-fill me-2'></i> Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={`/instructor/courses/`}> <i className='fas fa-shopping-cart me-2'></i>My Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={`/instructor/create-course/`}> <i className='fas fa-plus me-2'></i>Create Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={`/instructor/reviews/`}> <i className='fas fa-star me-2'></i>Review</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={`/instructor/students/`}> <i className='fas fa-graduation-cap me-2'></i>Students</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={`/instructor/earning/`}> <i className='fas fa-dollar-sign me-2'></i>Earning</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/instructor/quiz/`}><i className='fas fa-question-circle me-2'></i>Quiz </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/instructor/orders/`}>  <i className='fas fa-shopping-cart me-2'></i> Orders </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/instructor/question-answer/`}>  <i className='fas fa-envelope me-2'></i> Q/A </Link>
                            </li>
                        </ul>

                        {/* Navbar header */}
                        <span className="navbar-header mb-3">Account Settings</span>
                        <ul className="list-unstyled ms-n2 mb-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/instructor/profile/`}> <i className='fas fa-edit'></i> Edit Profile</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to={`/instructor/change-password/`}> <i className='fas fa-lock'></i> Change Password</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/login/`}> <i className='fas fa-sign-out-alt'></i> Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar