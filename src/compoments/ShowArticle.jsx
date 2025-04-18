import { useState } from "react"
import { Link } from "react-router-dom";

export function ShowArticle(){
    const [count, setCount]= useState(1)
    const desc=()=>{
        if(count > 0){
            setCount(count-1);
        }
    }
    const insc=()=>{
        setCount(count+1);
    }
    return <div className="show-article">
        <div className="row">
            <div className="col-xl-6">
                <div className="up"></div>
                <div className="down">
                    <div className="row">
                        <div className="col-6 col-sm-3"><div className="item"></div></div>
                        <div className="col-6 col-sm-3"><div className="item"></div></div>
                        <div className="col-6 col-sm-3"><div className="item"></div></div>
                        <div className="col-6 col-sm-3"><div className="item"></div></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <h3 style={{fontWeight:'bold'}}>Airpods- Max</h3>
                <p>une pettite description su le produit</p>
                <div className="start">
                    <img src="src/assets/start.svg"/>
                    <img src="src/assets/start.svg"/>
                    <img src="src/assets/start.svg"/>
                    <img src="src/assets/start.svg"/>
                </div>
                <hr />
                <h3>$549.00 or 99.99/month</h3>
                <p>Suggested payment with & months special financing</p>
                <hr />
                <p>Choose a Color</p>
                <div className="color">
                    <div className="color-element active"></div>
                    <div className="color-element"></div>
                    <div className="color-element"></div>
                    <div className="color-element"></div>
                </div>
                <hr />
                <div className="number">
                    <div className="nbre">
                        <button className="moins" onClick={desc}><h3>-</h3></button>
                        <input type="tel"value={count}/>
                        <button className="plus" onClick={insc}><h3>+</h3></button>
                    </div>
                    <div>
                        Only <a href="#">12 items</a> Left! don't miss it
                    </div>
                </div>
                <div className="payment">
                    <Link to={'/checkout'}><button className="now">Buy Now</button></Link>
                    <button className="add-card">Add to Card</button>
                </div>
                <div className="delivery">
                    <svg id='delivery' fill="#ffc107" height="25px" width="25px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512" stroke="#ffc107"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="352,208 352,256 352,272 448,272 448,256 416.721,208 "></polygon> <path d="m510.078,231.766l-47.82-80c-2.891-4.82-7.922-7.766-13.539-7.766h-128.719v-64c0-8.836-6.445-16-15.281-16h-288c-8.836,0-16.719,7.164-16.719,16v304c0,8.836 7.883,16 16.719,16h66.272c7.156,27.523 31.995,48 61.728,48 29.732,0 54.571-20.477 61.728-48h98.273 34.272c7.156,27.523 31.995,48 61.728,48 29.732,0 54.571-20.477 61.727-48h34.273c8.836,0 15.281-7.164 15.281-16v-144c-0.001-2.898-0.431-5.742-1.923-8.234zm-478.078-135.766h256v64 208h-81.554c-7.156-27.523-31.995-48-61.728-48-29.732,0-54.571,20.477-61.728,48h-50.99v-272zm112.719,320c-17.648,0-32-14.352-32-32s14.351-32 32-32c17.648,0 32,14.352 32,32s-14.352,32-32,32zm256,0c-17.648,0-32-14.352-32-32s14.352-32 32-32c17.648,0 32,14.352 32,32s-14.352,32-32,32zm79.281-48h-17.554c-7.156-27.523-31.995-48-61.727-48-29.733,0-54.571,20.477-61.728,48h-18.991v-192h119.656l40.344,68.43v123.57z"></path> </g> </g></svg>
                    <label htmlFor="delivery" style={{marginLeft:'10px'}}>Free Delivery</label>
                    <p style={{margin:'0px 35px'}}>
                        <a href="#">Enter your Postal code fro Delivery Ability</a>
                    </p>
                    <hr />
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffc107" class="bi bi-calendar2" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>                    
                    <label htmlFor="delivery" style={{marginLeft:'10px'}}>Return Delivery</label>
                    <p style={{margin:'0px 35px'}}>
                        Free 30 days Delivery Returns
                        <a href="#"> Details</a>
                    </p>
                </div>
            </div>
        </div>

    </div>
}