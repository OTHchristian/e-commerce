export function Cartelement({props}){
    return <div className="cart-elmt">
        <div className="row">
            <div className="col-3">
                <div className="img"></div>
            </div>
            <div className="col-6">
                <div>
                    <h5>Name article</h5>
                    <p>Quantity: 1</p>
                </div>
            </div>
            <div className="col-3">
                <div className="drop"></div>
            </div>
        </div>
    </div>
}