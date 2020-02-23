import React from 'react';
import Feature from '../components/_featureList';
import content from '../resources/siteContent';

const Home = () => (
    <>
        <h1>Making sure this all works</h1>
        <Feature content={content} />
    </>
);

export default Home;