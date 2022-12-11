import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'

import Button from 'react-bootstrap/Button';
import Spinner from './Spinner';

import PropTypes from 'prop-types'

import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async(pageNo) => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parseData = await data.json()
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    // this runs after the only once when the page reloads
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`
        updateNews()
    }, [])

    const handleNextClick = async () => {
        setPage(page+1)
        updateNews()
    }

    const handlePrevClick = async () => {
        setPage(page-1)
        updateNews()
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        // Since before page updation the page number is increased which leads to fetching the same data over and over again
        setPage(page+1) // This is an asynchronous function
        let data = await fetch(url)
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    }
        return (
            <>
                <h1 className='text-center' style={{marginTop : '90px'}}>Top {capitalizeFirstLetter(props.category)} headlines</h1>
                {/* It means spinner will show when loading is true */}
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length != totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className="row">
                            {articles.map((element) => {
                                console.log(element.url)
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

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News