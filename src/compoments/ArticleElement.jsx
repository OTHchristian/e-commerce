import { Link } from "react-router-dom"

export function ArticleElement(){
    
    return <div className="col-sm-6 col-xl-3">
        <div className="article-element">
            <div className="up">
                <div className="favoris">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
                        <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                    </svg>
                </div>
            </div>
            <div className="down">
                <div className="row">
                    <div className="col-9">
                        <div>
                            <p className="titre">Wireless Earbuds,IPX8</p>
                            <p>description du produit</p>
                            <div className="start">
                                <img src="src/assets/start.svg"/>
                                <img src="src/assets/start.svg"/>
                                <img src="src/assets/start.svg"/>
                                <img src="src/assets/start.svg"/>
                            </div>
                                <Link to={'/showarticle'}><button>Add To Cart</button></Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="titre"><sup>$</sup>89<sup>00</sup></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}