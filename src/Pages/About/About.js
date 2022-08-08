import React from 'react';
import Provide from './Provide';
import Welcome from './Welcome';
import Performance from './Performance';
import Counter from './Counter';

const About = () => {
    return (
        <div>
            {/* <Welcome></Welcome> */}
            <Provide></Provide>
            <Performance></Performance>
            <Counter></Counter>
        </div>
    );
};

export default About;