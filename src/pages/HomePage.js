import React from 'react';
import Featured from '../components/_featureList';
import content from '../resources/siteContent';
import IconList from '../components/_iconList';

const Home = () => {
    const desc = content[0].pages.find(desc => desc.name === "home");

    return (
        <>
            <div className="grid-container ">
                <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell small-12 medium-6">
                        <div className="grid-x">
                            <div className="cell small-12">
                                <h1>Chris Stehm</h1>
                                <div className="homepage description">
                                    {desc.content.about.map((paragraph, key) => (
                                        <p key={key}>{ paragraph }</p>
                                    ))}
                                </div>
                                <div className="homepage iconList">
                                    <IconList links={content[3].links} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cell small-12 medium-6">
                        <Featured content={content} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;