import React from 'react';
import locate from '../resources/locate.png';
import "../App.css";
import app_store from '../resources/app_store.png';
import Play_store from '../resources/Play_store.png';
import DiscoverStr from './DiscoverStr';


const DiscoverSection=()=>{
return(
<div className="container-fluid discover_section ">
    <div className="row">
        <div className="col-12 discover_section_heading text-center mt-4">
          <h5>Discover Top Doctors Near You</h5>
          <h5>See How It Works?</h5>
        </div>
        <div className="col-12 discover_section_map">
        <div className="row ">
            <div className="col-2 discover_section_map_outer_div">
               <div className="col-12 discover_section_map_inner_div1">
                   <DiscoverStr img={locate}/>
                </div> 
            </div>

            <div className="col-2 discover_section_map_outer_div">
               <div className="col-12 discover_section_map_inner_div2">
               <DiscoverStr img={locate}/>
                </div> 
            </div>
            <div className="col-2 discover_section_map_outer_div">
               <div className="col-12 discover_section_map_inner_div3">
               <DiscoverStr img={locate}/>
                </div> 
            </div>
            <div className="col-2 discover_section_map_outer_div">
               <div className="col-12 discover_section_map_inner_div4 ">
               <DiscoverStr img={locate}/>
                </div> 
            </div>
            <div className="col-2 discover_section_map_outer_div">
               <div className="col-12 discover_section_map_inner_div5">
               <DiscoverStr img={locate}/>
                </div> 
            </div>
            <div className="col-2 discover_section_map_outer_div">
               <div className="col-12 discover_section_map_inner_div6">
               <DiscoverStr img={locate}/>
                </div> 
            </div>  
        </div>
        </div>
        <div className="col-12 discover_section_disclaimer text-center mt-3">
         <h6>Disclaimer:  Prices are for representation only, as the prices are in real time on the application.</h6>
        </div>
        <div className="col-12 discover_section_download">
         <div className="row">
             <div className="col-12 text-center">
                 <h6>Download App</h6>
             </div>
         </div>
         <div className="row">
             <div className="col-6 d-flex  justify-content-end">
             <img src={app_store} alt="app store" className="img-fluid"   />
             </div>
             <div className="col-6 d-flex  justify-content-start">
             <img src={Play_store} alt="play store" className="img-fluid"/>
             </div>
         </div>
        </div>
    </div>
</div>
);
}
 export default DiscoverSection;