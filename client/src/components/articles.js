import React from "react";
import '../styles/article.css'
const Articles = () =>{
    return(
        <div>
            <div className="latest-articles-section">
        <div className="max-width">
            <h1 className="latest-articles-title">Latest <span>Articles</span></h1>
            <div className="articles-grid">
                <div className="article-card">
                    <div className="article-link">
                      <a href="https://www.headspace.com/meditation/daily-meditation-habit" target="_blank">
                      <h1> Ways to make meditation a daily habit.</h1>
                      </a>
                    </div>
                </div>
                <div className="article-card">
                <div className="article-link">
                      <a href="https://www.headspace.com/meditation/meditation-for-beginners" target="_blank">
                      <h1> Meditation for beginners.</h1>
                      </a>
                    </div>
                </div>
                <div className="article-card">
                <div className="article-link">
                      <a href="https://elisemuseles.com/how-to-practice-self-care-even-when-youre-busy/" target="_blank">
                      <h1> Self care ideas that work when you are busy.</h1>
                      </a>
                    </div>
                </div>
                <div className="article-card">
                <div className="article-link">
                      <a href="https://www.headspace.com/stress/tragedy-tragic-events" target="_blank">
                      <h1> Coping with tragedy and tragic events.</h1>
                      </a>
                    </div>
                </div>
                <div className="article-card">
                <div className="article-link">
                      <a href="https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques" target="_blank">
                      <h1> Breathing exercies to reduce stress.</h1>
                      </a>
                    </div>
                </div>
            </div>
        </div>
      </div>

        </div>
    )
}
export default Articles