import React from 'react';
import '../App.css';
// import path_map from '../resources/path_map.svg';
// import star from '../resources/star.svg';


const DiscoverStr=(props)=>{
    return(
    <>
    <div className="info">
     <p style={{fontWeight:500}}>Fortis healthcare</p>
     <p style={{fontWeight:700}}>Laser Hair Reduction</p>
     <h6 className="d-flex flex-row justify-content-start mb-0"> 
     <p><i style={{color:'lightGreen'}} className="fa fa-star " aria-hidden="true">4.6</i></p>
     <p><i style={{color:'lightGrey'}} className="fa fa-map-marker" aria-hidden="true">3.8kms</i></p>
     </h6>
     <p style={{fontWeight:500}}>Location: New Delhi: 231222</p>
     </div>
     <div className="img">
     <img src={props.img} className="img-fluid" alt="location picture1" />
     </div>
    </>
    );

 }
 export default DiscoverStr;