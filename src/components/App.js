import "./../style/style.scss";
import "./../style/_utilities.scss";
import "./../style/_variables.scss";

import React from 'react';

import Header from './Header/Header';
import Stories from "./Stories/Stories";
import BgVideo from './BgVideo/BgVideo'

import "../style/style.scss";
import "../style/_button.scss";
import "../style/_variables.scss";

const App = () => (
    <div className="App__Container">
        <Header></Header>
        <div className="row"></div>
        <section className="App__StoriesContainer">
            <BgVideo></BgVideo>
            {/* <div className="App__OnlyStoriesContainer"> */}
            <Stories caption="Mary Smith" headline="I had the best week with my family" imgUrl="img/nat-8.jpg" alt="Person on a tour"></Stories>
            <Stories caption="Jack Wilson" headline="WOW! My life is completely different now" imgUrl="img/nat-9.jpg" alt="Person on a tour"></Stories>
            {/* </div> */}
            {/* <div className="u-center-tex">
                <a href="#" className="Btn-text">Read all stories &rarr;</a>
            </div> */}
        </section>

    </div>)

export default App
