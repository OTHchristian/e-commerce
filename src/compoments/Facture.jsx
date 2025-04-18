import { Link } from "react-router-dom";

export function Facture({prop,total}){
    const PopUp = ()=>{
        let pop_up = document.getElementById('pop-up');
        let container = document.getElementById('container')
        container.style.height = '100vh'
        pop_up.style.display = 'flex';
    }
    const exit = ()=>{
        let pop_up = document.getElementById('pop-up');
        let container = document.getElementById('container')
        container.style.height = 'auto'
        pop_up.style.display = 'none';
    }
    return <div className="facture">
        <div className="row">
            {prop.map( elemnt => (
                <div className="col-6" key={elemnt}>{elemnt}</div>
            ))}
            <hr />
            <div className="col-6" style={{fontWeight:'bold'}}>Total</div>
            <div className="col-6" style={{fontWeight:'bold'}}>{total}</div>
        </div>
        <div className="for-button">
           <button onClick={PopUp}>Pay $549.00</button>
        </div>
        <div className="content-pop-up" id="pop-up">
            <div className="pop-up">
                <div className="up">
                    <div className="check">
                        <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#1C27"></path> </g></svg>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <h4>Your order has been accepted</h4>
                        <p>Transaction ID: 8984294820</p>
                    </div>
                </div>
                <div className="down">
                    <Link to={'/'}><button onClick={exit}>Continue Shopping</button></Link>
                </div>
            </div>
        </div>
    </div>
}
