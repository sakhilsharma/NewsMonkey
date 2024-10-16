import React, { Component } from 'react'
export class NewsItem extends Component {
    //class based components ...this.prop method

    render() {
        let {title , description ,imageUrl ,newsUrl} = this.props;
        return (
            <div className="my-3 d-flex ">
                <div className="card " >
                    <img src={imageUrl ? imageUrl : "https://th.bing.com/th/id/OIP.idOfy8wJEv8xLzKv3zrv9wAAAA?rs=1&pid=ImgDetMain"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
