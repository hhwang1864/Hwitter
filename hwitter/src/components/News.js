import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Api from "./newsapi";

const News = () => {
  const [newsImage, setNewsImage] = useState("")
  const [newsTitle, setNewsTitle] = useState("")
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
  }, [])


  return (
    <React.Fragment>
      <h3>{newsTitle[0]}</h3>
      <img src={newsImage[0]} width="100px" height="100px" alt="" />
      <h3>{newsTitle[1]}</h3>
      <img src={newsImage[1]} width="100px" height="100px" alt="" />
      <h3>{newsTitle[2]}</h3>
      <img src={newsImage[2]} width="100px" height="100px" alt="" />
      <h3>{newsTitle[3]}</h3>
      <img src={newsImage[3]} width="100px" height="100px" alt="" />
      <h3>{newsTitle[4]}</h3>
      <img src={newsImage[4]} width="100px" height="100px" alt="" />
    </React.Fragment>
  )

}

export default News