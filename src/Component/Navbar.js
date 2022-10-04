import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-items-center">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Babar's Restaurant</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        {
                            menuList.map((currentElement) => {
                                return (
                                    <button className="btn btn-outline-light me-2 my-1" type="button" onClick={() => filterItem(currentElement)}>{currentElement}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </nav>

            <br />



        </>
    )
}

export default Navbar
