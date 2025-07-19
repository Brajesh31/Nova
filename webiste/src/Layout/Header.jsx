import React from 'react'

const Header = () => {
    return (
        < >
            <header className="nav-container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent container">
                    <div className="unnecessary"></div>
                    <a className="navbar-brand ms-5 ms-sm-0 " href="#">Nova</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Classes</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container   container-font">
                    <div className="row justify-content-center">
                        <div className="col-9    py-5 d-grid mx-auto">
                            <h1 className='fs-1 text-white'>
                                IT'S NEVER TOO <br />
                                LATE TO DEFEND YOURSELF</h1>
                            <p className='text-white text-center'>Far far away, behind the word mountains</p>
                            <div className="video-icon mt-3 text-white " style={{ cursor: 'pointer' }}>
                                <span className="material-symbols-outlined">
                                    play_circle
                                </span>
                                <span className='ms-3'>Watch video</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



        </>
    )
}

export default Header