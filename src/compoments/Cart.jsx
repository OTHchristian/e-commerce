import { Cartelement } from "./Cartelement"

export function Cart(){
    return <div className="cart">
        <h1>Cart <span>_</span></h1>
        <br />
        <div className="for-cart-elmt">
            <Cartelement></Cartelement>
            <Cartelement></Cartelement>
            <Cartelement></Cartelement>
            <Cartelement></Cartelement>
        </div>
        <div className="row">
            <div className="col-6">
                <button className="validated">Valideted</button>
            </div>
            <div className="col-6">
                <button className="alert alert-danger">Reset</button>
            </div>
        </div>
    </div>
}