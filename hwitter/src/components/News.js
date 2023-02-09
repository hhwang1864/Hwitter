import React, { useState, useEffect } from "react";
import Api from "./newsapi";

const News = () => {
  const [newsImage, setNewsImage] = useState("")
  const [newsTitle, setNewsTitle] = useState("")
  const [newsUrl, setNewsUrl] = useState("")
  // fetch('https://api.currentsapi.services/v1/latest-news?language=us&  apiKey=yLAHUMh7F9CX1SVJkdSAX7RsDeoLYpjHy6rep5SlnqOFvnNk')
  //       .then(response => response.json())
  //       .then(response => {
  //         const news = response.articles.slice(0,5)
  //         const topNews = news.map( article => article.urlToImage )
  //         setNewsImage(topNews)
  //       })

  useEffect( () => {
    const newsApiImage = Api.articles.slice(0, 5).map( article => article.urlToImage)
    setNewsImage(newsApiImage)

    const newsApiTitle = Api.articles.slice(0, 5).map( article => article.title)
    setNewsTitle(newsApiTitle)

    const newsApiUrl = Api.articles.slice(0, 5).map( article => article.url)

    setNewsUrl(newsApiUrl)
  }, [])

  const onClick1 = (event) => {
    console.log(event.target)
    window.open(newsUrl[0])
  }
  const onClick2 = (event) => {
    console.log(event.target)
    window.open(newsUrl[1])
  }
  const onClick3 = (event) => {
    console.log(event.target)
    window.open(newsUrl[2])
  }
  const onClick4 = (event) => {
    console.log(event.target)
    window.open(newsUrl[3])
  }
  const onClick5 = (event) => {
    console.log(event.target)
    window.open(newsUrl[4])
  }



  return (
    <div className="news-list">
      <h3 className="news-headline">{newsTitle[0]}</h3>
      <img src={newsImage[0]} onClick={onClick1} width="100px" height="100px" alt=""/>
      <h3 className="news-headline">{newsTitle[1]}</h3>
      <img src={newsImage[1]} onClick={onClick2} width="100px" height="100px" alt="" />
      <h3 className="news-headline">{newsTitle[2]}</h3>
      <img src={newsImage[2]} onClick={onClick3} width="100px" height="100px" alt="" />
      <h3 className="news-headline">{newsTitle[3]}</h3>
      <img src={newsImage[3]} onClick={onClick4} width="100px" height="100px" alt="" />
      <h3 className="news-headline">{newsTitle[4]}</h3>
      <img src={newsImage[4]} onClick={onClick5} width="100px" height="100px" alt="" />
    </div>
  )

}

export default News