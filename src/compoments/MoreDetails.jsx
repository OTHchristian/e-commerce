import { Details } from "./Details"

export function MoreDetails(){
    return <div className="more-details">
        <div className="row">
            <div className="col-sm-12 col-xl-6">
                <Details details={{
                    'Title':'General',
                    'prop1':{'name':'Brand', 'value':'Apple'},
                    'prop2':{'name':'Model', 'value':'Model AirPods Max HeadPhones'},
                    'prop3':{'name':'Price', 'value':'$549.00'},
                    'prop4':{'name':'Release date', 'value':'Decembre 2020'},
                    'prop5':{'name':'Model number', 'value':'AirPods Max'},
                    'prop6':{'name':'HeadPhone Type', 'value':'Ower-Ear'},
                    'prop7':{'name':'Conectivity', 'value':'Wireless'},

                }}></Details>
            </div>
            <div className="col-sm-12 col-xl-6">
                <Details details={{
                    'Title':'Products Details',
                    'prop1':{'name':'Microphone', 'value':'Yes'},
                    'prop2':{'name':'Driver Type', 'value':'Dynamic'},
                    'prop3':{'name':'Driver Size(mm)', 'value':'40'},
                    'prop4':{'name':'Number of Drivers', 'value':'1'},
                    'prop5':{'name':'Water Resistance', 'value':'No'},
                    'prop6':{'name':'Weight(g)', 'value':'380'},
                    'prop7':{'name':'Battery Live(Hrs)', 'value':'20'},

                }}></Details>
            </div>
        </div>
    </div>
}