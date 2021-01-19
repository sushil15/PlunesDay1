import React from 'react';
import "../App.css";
import doctor1 from '../resources/doctor1.png';
import doctor2 from '../resources/doctor2.png';
import doctor3 from '../resources/doctor3.png';
import doctor4 from '../resources/doctor4.png';
import ExploreDS from './ExploreDS';
const ExploreSection=()=>{
return(
<div className="container-fluid explore_section"> 
    <div className="row">
      <ExploreDS doctorP={doctor1}/>
      <ExploreDS doctorP={doctor2}/>
      <ExploreDS doctorP={doctor3}/>
      <ExploreDS doctorP={doctor4}/>
    </div>
    <div className="row text-center mt-4 ">
        <div className="col-12">
            <h5>View More</h5>
        </div>
    </div>

</div>
);

}

export default ExploreSection;