import { MethodBuy } from "./MethodBuy"
import { Entry } from "./Entry"
import { Facture } from "./Facture"

export function SpaceCheckout(){
    return <div className="space-checkout">
        <div className="row">
            <div className="col-xl-6">
                <div className="up">
                    <h3>Review Item And Shipping</h3>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="article"></div>
                        </div>
                        <div className="col-sm-8">
                            <div className="left">
                                <p style={{fontWeight:'bold',fontSize: '20px'}}>Airpods- Max</p>
                                <p>Color: Pink</p>
                            </div>
                            <div className="rigth">
                                <p style={{fontWeight:'bold',fontSize: '20px'}}>$549.00</p>
                                <p>Quantity: 01</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <input type="checkbox" name="checkbox" id="check" />
                    <label htmlFor="check" style={{marginLeft:'10px'}}>Ruturning Customers?</label>
                </div>
                <br />
                <div className="down">
                    <div className="row">
                        <div className="col-8"><h4>Delivery Information</h4></div>
                        <div className="col-4"><button>Save</button></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <Entry title="Full Name*" placeholder="type here" type="name"></Entry>
                        </div>
                        <div className="col-sm-6">
                            <Entry title="Last Name*" placeholder="type here" type="namel"></Entry>
                        </div>

                        <Entry title="Adress*" placeholder="type here" type="text"></Entry>

                        <div className="col-6">
                            <Entry title="City/Town*" placeholder="type here" type="text"></Entry>
                        </div>
                        <div className="col-6">
                            <Entry title="Zip Code*" placeholder="type here" type="tel"></Entry>
                        </div>

                        <div className="col-sm-6">
                            <Entry title="Mobile*" placeholder="type here" type="Tel"></Entry>
                        </div>
                        <div className="col-sm-6">
                            <Entry title="Email*" placeholder="type here" type="email"></Entry>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="right">
                    <h3>Order Summery</h3>
                    <hr />
                    <div className="promotion-code">
                        <input type="text" name="code" placeholder="  Enter Coupon code" autoComplete="off"/>
                        <button>Apply</button>
                    </div>
                    <hr />
                    <MethodBuy title='Cash on Delivery'></MethodBuy>
                    <MethodBuy title='Shopcart Card'></MethodBuy>
                    <MethodBuy title='Paypal'></MethodBuy>
                    <MethodBuy title='Credit or Debit card'></MethodBuy>

                    <div className="payment-card">
                        <img src="src/assets/amazon.png"/>
                        <img src="src/assets/master.png" className="active"/>
                        <img src="src/assets/visa.png"/>
                    </div>

                    <Entry title="Email*" placeholder="type here" type="email"></Entry>
                    <Entry title="Card Holder Name*" placeholder="type here" type="text"></Entry>
                    <Entry title="Card Numbers*" placeholder="0000*****12345" type="text"></Entry>
                    <div className="row">
                        <div className="col-6">
                            <Entry title="Expiry" placeholder="MM/YY" type="text"></Entry>
                        </div>
                        <div className="col-6">
                        <Entry title="CVC" placeholder="000" type="text"></Entry>
                        </div>
                    </div>

                    <Facture prop={[
                        'Sub Total','$549.00','Tax(3%)','$16.47',
                        'Coupon Discount','-$16.47','Shipping Cost','-$0.00',
                    ]} total='$549.00'></Facture>
                </div>
            </div>
        </div>
        <br />
    </div>
}