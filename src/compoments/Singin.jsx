import { Entry } from "./Entry"
import { Link } from "react-router-dom"

export function Singin(){
    return <div className="singin">
        <h1>Sing in <span>_</span></h1>
        <br />
        <form action="" method="post">
            <div className="row">
                <div className="col-6">
                    <Entry title={'Frist Name'} placeholder={'enter your first name'}></Entry>
                </div>
                <div className="col-6">
                    <Entry title={'Last name'} placeholder={'enter your last name'}></Entry>
                </div>
            </div>
            <Entry title={'E-mail'} placeholder={'enter your email address'}></Entry>
            <Entry title={'Password'} placeholder={'enter your password'}></Entry>

            <button>Submit</button>
            <div className="to-login">
                <p>If you have account click here <Link to={'/login'}>Log in !!</Link></p>
            </div>
        </form>
    </div>
}