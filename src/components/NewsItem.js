import React from 'react'
//import { Link } from "react-router-dom";


const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>

                <img src={imageUrl} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ transform: "-50% 0% -1% 0%" }}>
                        {source}

                    </span></h5>
                    <h5 className="card-title">{title}<span className="badge bg-secondary">New</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">{author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Go For More Details</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
