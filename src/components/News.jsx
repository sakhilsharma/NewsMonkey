import React, { Component } from 'react'
import NewsItem from './NewsItems.jsx';
import Spinner from './Spinner.jsx';
import PropTypes from 'prop-types';
import './add.css';
export class News extends Component {

    static defaultProps = {
        country: "us",
        pageSize: 8,
        category: "general",
    }
    static propTypes = {
        country: PropTypes.string, //type of default Prop country is String
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = { //defines state
            articles: [],
            loading: false,
            page: 1,
        }
    }
    //componentDidMount always run after the render works
    async componentDidMount() {
        const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd479e4af53a47688340760adf580bbd&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        const response = await fetch(URL);
        const parsedData = await response.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
    }
    handlePrevClick = async () => {
        const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd479e4af53a47688340760adf580bbd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        const response = await fetch(URL);
        const parsedData = await response.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false,
        })
    }
    //ceil() method return next possible interger in round off [as floor does round off to previous one]
    handleNextClick = async () => {
        if (!this.state.page + 1 < Math.ceil(this.state.totalResults / 5)) {
            const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dd479e4af53a47688340760adf580bbd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            const response = await fetch(URL);
            const parsedData = await response.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false,
            })
        }

    }


    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin:"35px 0px"}}>NewsMonkey-Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row d-flex flex-sm-column flex-lg-row align-items-sm-center">


                    {!this.state.loading && this.state.articles.map((e, idx) => {
                        return (
                            <div className="none"  key={e.url}>
                                < NewsItem title={e.title.slice(0,45)} description={e.description.slice(0,88)} imageUrl={e.urlToImage} newsUrl={e.url} time={e.publishedAt} author={e.author} source={e.source.name}/>
                            </div>
                        )
                    })
                    }



                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1 ? true : false} type="button" className="btn btn-success" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 6)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>


            </div>
        )
    }
}

export default News
