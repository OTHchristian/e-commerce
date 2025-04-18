export function Details({details}){
    const props = ['prop1','prop2','prop3','prop4','prop5','prop6','prop7']
    return <div className="details">
        <h4>{details['Title']}</h4>
        <div className="item i">
            <div className="row">
                <div className="col-6">{details['prop1']['name']}</div>
                <div className="col-6">{details['prop1']['value']}</div>
            </div>
        </div>
        <div className="item">
            <div className="row">
                <div className="col-6">{details['prop2']['name']}</div>
                <div className="col-6">{details['prop2']['value']}</div>
            </div>
        </div>
        <div className="item i">
            <div className="row">
                <div className="col-6">{details['prop3']['name']}</div>
                <div className="col-6">{details['prop3']['value']}</div>
            </div>
        </div>
        <div className="item">
            <div className="row">
                <div className="col-6">{details['prop4']['name']}</div>
                <div className="col-6">{details['prop4']['value']}</div>
            </div>
        </div>
        <div className="item i">
            <div className="row">
                <div className="col-6">{details['prop5']['name']}</div>
                <div className="col-6">{details['prop5']['value']}</div>
            </div>
        </div>
        <div className="item">
            <div className="row">
                <div className="col-6">{details['prop6']['name']}</div>
                <div className="col-6">{details['prop6']['value']}</div>
            </div>
        </div>
        <div className="item i">
            <div className="row">
                <div className="col-6">{details['prop7']['name']}</div>
                <div className="col-6">{details['prop7']['value']}</div>
            </div>
        </div>
    </div>
}