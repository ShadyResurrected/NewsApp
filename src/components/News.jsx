import React, { Component } from 'react'
import NewsItem from './NewsItem'

import Button from 'react-bootstrap/Button';
import Spinner from './Spinner';

import PropTypes from 'prop-types'

import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // This constructor will be called whenever an object of this class is created
    constructor(props) {
        super(props);
        console.log("Hello I am a constructor from News component")
        // setting the state
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`
    }

    async updateNews(pageNo) {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(30)
        let parseData = await data.json()
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }

    // this runs after the render component
    async componentDidMount() {
        this.updateNews()
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults
        })
    }

    render() {
        return (
            <>
                <h1 className='text-center'>Top {this.capitalizeFirstLetter(this.props.category)} headlines</h1>
                {/* It means spinner will show when loading is true */}
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length != this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div key={element.url} className="col-md-4">
                                    <NewsItem title={element.title !== null ? element.title : ""} description={element.description !== null ? element.description : ""} imageUrl={element.urlToImage !== null ? element.urlToImage : 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='} newsUrl={element.url} author={element.source.name} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News