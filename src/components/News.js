import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem.js'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);
    document.title = `${props.category}- NewsBar`;


    // const updateNews = async (props) => {
    //     props.setProgress(10);
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    //     setLoading(true);
    //     let data = await fetch(url);
    //     props.setProgress(30);
    //     let parseData = await data.json();
    //     props.setProgress(70);
    //     setArticles(parseData.articles);
    //     setTotalResults(parseData.totalResults);
    //     setLoading(false);
    //     //setPages(page + 1);
    //     props.setProgress(100);

    // }
    useEffect(() => {
        const updateNews = async () => {
            props.setProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`
            setLoading(true);
            let data = await fetch(url);
            props.setProgress(30);
            let parseData = await data.json();
            props.setProgress(70);
            setArticles(parseData.articles);
            setTotalResults(parseData.totalResults);
            setLoading(false);
            //setPages(page + 1);
            props.setProgress(100);

        }
        updateNews();
    }, []);

    // const handleNextClick = () => {
    //     setPages(page + 1);
    //     updateNews();
    // }
    // const handlePrevClick = () => {
    //     setPages(page - 1);
    //     updateNews();
    // }


    const fetchMoreData = async () => {
        setPages(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey} &page=${page + 1}&pageSize=${props.pageSize}`
        setLoading(true);
        let data = await fetch(url);
        setLoading(false);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));

        setTotalResults(parseData.totalResults);

    };
    return (
        <>

            {/* </><div className="container my-4"> */}
            <h1 className="text-center y-3" style={{ margin: "50px  20px 0px 0px" }}>{`News Components- Top ${props.category} news`}</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles?articles.length:0}
                next={fetchMoreData}
                hasMore={articles?articles.length:0 !== totalResults}
                loader={<Spinner />}
            >
                <div className="row">
                    {
                        articles.map((element) => {

                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} author={element.author} date={element.publishedAt} description={element.description ? element.description : " "} imageUrl={element.urlToImage ? element.urlToImage : "https://www.shutterstock.com/image-illustration/covid-new-era-breaking-news-600w-1911987358.jpg"} newsUrl={element.url} source={element.source.name} /></div>

                        })
                    }
                </div>
            </InfiniteScroll>

        </>
    )



}
News.defaultProps = {
    pageSize: 6,
    country: 'in',
    category: 'general'

}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
}

export default News
