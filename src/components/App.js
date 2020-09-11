import "./../style/style.scss";
import "./../style/_utilities.scss";
import "./../style/_variables.scss";

import React from 'react';

import Header from './Header/Header';
import Stories from "./Stories/Stories";
import BgVideo from './BgVideo/BgVideo';
import Navigation from "./Navigation/Navigation";
import Test from "./Test/Test";
import Vimeo from "./Vimeo/Vimeo";

import "../style/style.scss";
import "../style/_button.scss";
import "../style/_variables.scss";

const obj = [{title: "massa text", url: ["/adress", "/adress2", "/adress3", {nyckel: 123, bool: true}]}];

const App = () => (
    <div className="App__Container">
        {/* <Navigation></Navigation>
        <Header></Header>
        <div className="row"></div>
        <section className="App__StoriesContainer">
            <BgVideo></BgVideo>
            
            <Stories caption="Mary Smith" headline="I had the best week with my family" imgUrl="img/nat-8.jpg" alt="Person on a tour"></Stories>
            <Stories caption="Jack Wilson" headline="WOW! My life is completely different now" imgUrl="img/nat-9.jpg" alt="Person on a tour"></Stories>
            
        </section> */}
        {/* <Test text={obj}></Test> */}
        <Vimeo />


    </div>)

export default App
