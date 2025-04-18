export function Headcategory(){

    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');
    
    const effet = ()=>{
        img2.onclick()
        img2.addEventListener('mouseover', ()=>{
            img1.classList.replace('col-6','col-3')
            img2.classList.replace('col-3','col-6')
            img3.classList.replace('col-6','col-3')    
        })
        img1.addEventListener('mouseover', ()=>{
            img1.classList.replace('col-3','col-6')
            img2.classList.replace('col-6','col-3')
            img3.classList.replace('col-6','col-3')
    
        })
        img3.addEventListener('mouseover', ()=>{
            img1.classList.replace('col-6','col-3')
            img2.classList.replace('col-6','col-3')
            img3.classList.replace('col-3','col-6')
        })
    }
    return <div className="head-category">
        <div className="row">
            <div className="col-6" id="img1">
                <div className="elmt"></div>
            </div>
            <div className="col-3" id="img2">
                <div className="elmt"></div>
            </div>
            <div className="col-3" id="img3">
                <div className="elmt"></div>
            </div>
        </div>
    </div>
}