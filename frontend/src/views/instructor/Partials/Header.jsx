import React from 'react'

function Header() {
    return (
        <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="card px-4 pt-2 pb-4 shadow-sm rounded-3">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                                <img src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-4.jpg" className="avatar-xl rounded-circle border border-4 border-white" alt="avatar" style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover" }} />
                            </div>
                            <div className="lh-1">
                                <h2 className="mb-0"> Destiny Franks</h2>
                                <p className="mb-0 d-block">@desphixs</p>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex">
                                <a href="profile-edit.html" className="btn btn-primary btn-sm d-none d-md-block ms-2" > Create New Course <i className='fas fa-plus'></i></a>
                                <a href="profile-edit.html" className="btn btn-success btn-sm d-none d-md-block ms-2" > Setting <i className='fas fa-gear'></i></a>
                                <a href="profile-edit.html" className="btn btn-danger btn-sm d-none d-md-block ms-2" > Contact Support <i className='fas fa-phone'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header