import React from 'react';
import ExploreFacStr from'./ExploreFacStr';
import fortisH from '../resources/fortisH.png';
import shardaH from '../resources/shardaH.png';
import apolloH from '../resources/apolloH.png';
import magicalM from '../resources/magicalM.png';
import '../App.css';

const ExploreFac=()=>{
    return(
        <div className="container explore_fac">
            <div className="row explore_fac_heading text-center">
               <h5>Explore Facilities</h5>
            </div>
            <div className="row">
              <div className="col-md-3"> <ExploreFacStr img={fortisH} name={'Fortis Healthcare'}/></div>
              <div className="col-md-3"><ExploreFacStr img={apolloH} name={'Apollo Hospital'}/></div>
              <div className="col-md-3"><ExploreFacStr img={shardaH} name={'Sharda Hospital'}/></div>
              <div className="col-md-3"><ExploreFacStr img={magicalM} name={'Magical Morphers'}/></div>

            </div>
        </div>
    );
}

export default ExploreFac;