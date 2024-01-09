import React from 'react'
import ResourcesIntro from '../../components/resourcesPage/ResourcesIntro';
import Resource from '../../components/resources/Resources';
import ResourcesSecondRow from '../../components/resourcesPage/ResourcesSecondRow';
import './resourcesPage.css'

function Resources(props){

    return(
        <div className='resourcesBackground'>
            <ResourcesIntro />
        <div>
            <ResourcesSecondRow />
        </div>
        </div>
       
    );
};

export default Resources;