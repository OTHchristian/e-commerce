import { FilterElement } from "./FilterElement";

export function Filter(){
    return <div className="filter">
        <div className="row">
            <div className="col-8">
                <div className="content">
                    <FilterElement name="Headphone Type"></FilterElement>
                    <FilterElement name="Price"></FilterElement>
                    <FilterElement name="Review"></FilterElement>
                    <FilterElement name="Color"></FilterElement>
                    <FilterElement name="Material"></FilterElement>
                    <FilterElement name="Offer"></FilterElement>
                    <FilterElement name="All Filters"></FilterElement>
                </div>
            </div>
            <div className="col-4">
                <div className="others-filter">Sort by</div>
            </div>
        </div>
    </div>
}