import React from 'react'

import "./Stories.scss";
import "../../style/_utilities.scss";
import "../../style/_button.scss";

const Stories = ({ caption, headline, imgUrl, alt }) => {
    return (
        <section className="Stories u-margin-bottom-large">
            <div className="Story">
                <figure className="Story__Shape">
                    <img src={imgUrl} alt={alt} class="Story__Img" />
                    <figcaption className="Story__Caption">{caption}</figcaption>
                </figure>
                <div className="Story__Text">
                    <h3 className="Heading__Tertiary u-margin-bottom-small">
                        {headline}
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolorem, corporis nam expedita illum in perferendis, atque ratione, minus reprehenderit cupiditate esse tempore! Impedit pariatur ducimus voluptate doloribus, praesentium rerum voluptates sequi illo labore adipisci recusandae vero modi dignissimos quo officia optio dolorem harum. Laudantium ratione dolores eius magni nobis.</p>
                </div>
            </div>

        </section>
    )
}

export default Stories
