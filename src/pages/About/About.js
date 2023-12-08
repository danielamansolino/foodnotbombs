import React from 'react'
import AboutMainVideo from '../../components/about/AboutMainVideo';
import OurHistory from '../../components/about/OurHistory';
import GuidingPrinciples from '../../components/about/GuidingPrinciples'

function About(props){

    return(
        <div>
            <AboutMainVideo/>
            <GuidingPrinciples/>
            <OurHistory/>
        </div>

    );
};

export default About;