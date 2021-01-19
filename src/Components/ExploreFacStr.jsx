import React from 'react';
import '../App.css';

const ExploreFacStr=(props)=>{
    return(
        <>
        <div className="col-12 explore_fac_img m-0">
         <img src={props.img} className="img-fluid" alt="Hospital"/>
        </div>
        <div className="col-12 text-center explore_fac_hopname">
        <h6>{props.name}</h6>
        </div>
        </>
    );
}

export default ExploreFacStr;