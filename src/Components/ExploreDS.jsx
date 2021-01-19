import React from 'react';
// import star from '../resources/star.svg';
import locationD from '../resources/locationD.svg';
import '../App.css';

const ExploreDS=(props)=>{
    return(
        <div className="col-3 exploreDs">
        <div className="row">
        <div className="col-12 imgD">
            <img src={props.doctorP}  alt="doctor1" className="img-fluid img1" />
            <span className="floatD"><img src={locationD} alt="Dist"/>2.3kms</span>
        </div>
        </div>
        <div className="row info12">
        <div className="row info1 px-4">
        <div className="col-8">
            <h5 >Dr .Atul Mishra</h5>
            <p>Fortis Hospital</p>
        </div>
        <div className="col-4 d-flex justify-content-end">
            <span><i className="fa fa-star" aria-hidden="true">4.5</i></span>
        </div>
        <hr/>
        </div>
       <div className="row info2 px-4">
       <div className="col-8">
            <p>Specialization</p>
            <h6>Laser Hair Reduction</h6>
            <p className="mt-2">Experience</p>
            <h6>20 year</h6>
        </div>
        <div className="col-4 text-center mt-auto mb-auto">
            <button className="btn">Book</button>
        </div>
       </div>
       </div>

       <div className="row viewM">
       <div className="col-12 text-center">
            <p>View more</p>
        </div>
       </div>
    </div>
    );
}

export default ExploreDS;