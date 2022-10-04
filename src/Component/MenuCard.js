import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
            {menuData.map((currentElement) => {
                const { id, name, category, image, description } = currentElement;
                return (
                    <>
                        <div className="d-inline-flex mx-5" key={id}>
                            <div className="col">
                                <div className="card mb-3" style={{ maxWidth: '500px' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={image} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
                                                <p className="card-text">{description}</p>
                                                <p className="card-text "><small className="text-muted">Category : {category}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            })}
        </>
    )
}

export default MenuCard;

