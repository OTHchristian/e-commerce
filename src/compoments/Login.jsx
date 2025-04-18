import { Entry } from "./Entry"
import { Link } from "react-router-dom"

export function Login(){
    return <div className="login">
        <h1>Login <span>_</span></h1>
        <br />
        <form action="" method="post">
            <Entry title={'E-mail'} placeholder={'enter your email address'}></Entry>
            <Entry title={'Password'} placeholder={'enter your password'}></Entry>
            <div className="row">
                <div className="col-6">
                    <input type="checkbox" name="" id="check" />
                    <label htmlFor="check" style={{marginLeft: '10px'}}>Remenber me</label>
                </div>
                <div className="col-6">
                    <Link to={'/'}>forgot password?</Link>
                </div>
            </div>
            <button>Submit</button>
            <div className="to-sing-in">
                <p>If you don't have account click here <Link to={'/singin'}>Sing in !!</Link></p>
            </div>
        </form>
    </div>
}