import React from 'react'

const  NewsItem = (props) =>   {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <span className="badge bg-dark">{source}</span>
                    <img src={!imageUrl ? "https://cdn.substack.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F17611dc2-5d71-4d75-8b7f-47404cecef85_1024x683.jpeg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted"> By {author} on {date}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm  btn-dark" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem