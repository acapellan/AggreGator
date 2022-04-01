import React from 'react';
import alligator_background from '../resources/images/alligator_background.png';
import articles from '../resources/images/articles_white.png';
import forum from '../resources/images/forum_white.png';
import video from '../resources/images/video_white.png';

const Resources = () => {
    return (
        <>
        <div className="container-fluid" style={{backgroundImage:`url(${alligator_background})`, backgroundSize:"cover", backgroundRepeat:"repeat"}}>
            <div className="text-center">
                <div className="row">
                    <h1 className="display-5 fw-bold py-4 text-white shadow-lg" style={{backgroundColor:"#407db4"}}>Resources</h1>
                </div>
                <div className="row justify-content-center py-4 mx-2">
                    <div className="col-lg-3 bg-primary rounded-3 shadow-lg m-4 py-4">
                        <img src={articles} width="150" height="150"/>
                        <h1 className="display-5 fw-bold pt-4 text-white">Articles</h1>
                        <p className="lead text-white">Articles, Web Pages, and Journals handpicked and rated <span style={{fontStyle:"italic"}}>for Gators, by Gators.</span></p>
                        <a className="nav-item btn btn-info btn-lg my-3" href="/articles" role="button">View More</a>
                    </div>
                    <div className="col-lg-3 bg-primary rounded-3 shadow-lg m-4 py-4">
                        <img src={video} width="150" height="150"/>
                        <h1 className="display-5 fw-bold pt-4 text-white">Videos</h1>
                        <p className="lead text-white">Curated videos from across the web perfect for learning by watching.</p>
                        <a className="btn btn-info btn-lg my-3" href="/videos" role="button">View More</a>
                    </div>
                    <div className="col-lg-3 bg-primary rounded-3 shadow-lg m-4 py-4">
                        <img src={forum} width="150" height="150"/>
                        <h1 className="display-5 fw-bold pt-4 text-white">Forums</h1>
                        <p className="lead text-white">Have a question? Ask your fellow <span style={{fontStyle:"italic"}}>Gators</span> here in our forum!</p>
                        <a className="btn btn-info btn-lg my-3" href="/forums" role="button">View More</a>
                    </div>
                </div>
                
            </div>

        </div>
        </>
    );
};

export default Resources;