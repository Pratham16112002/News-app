import React, {useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const  News = (props) =>   {
    const [articles,setArticles] = useState([])
    const [loading,setloading]=useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    //  

    const capitalizeFirstLetter =  (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const updateNews = async () =>  {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/everything?q=${props.category}&from=${props.date}&sortBy=publishedAt&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setloading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - News-hub`;
      updateNews()
    }, [])
    

    const handlePrevClick = async () => {
        setpage(page-1)
        updateNews()
    }
    const handleNextClick = async () => {
        setpage(page+1)
        updateNews()
    }
    const fetchMoreData = async () => {
       const url = `https://newsapi.org/v2/everything?q=${props.category}&from=2022-02-20&sortBy=publishedAt&apiKey=3dc29fa686ff4e838dbd6c83fecf85cb&page=${page}&pageSize=${props.pageSize}`;
       setpage(page+1)
       let data = await fetch(url);
       let parsedData = await data.json()
       setArticles(articles.concat(parsedData.articles))
       setTotalResults(parsedData.totalResults)
      };
        return (
            <div className="container my-3">
                <h1 className="text-center" style = {{margin : '35px 0px' , marginTop : '90px'  }}>Newshub - Top Headlines on {capitalizeFirstLetter(props.category)}</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "unkown" : element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
}

News.defaultProps = {
    pageSize: 5,
    category: 'general'
}
News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string
}


export default News