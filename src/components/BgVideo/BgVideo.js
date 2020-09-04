import React from "react";

// import Stories from "../Stories/Stories";

import "./BgVideo.scss";

const BgVideo = () => {
    return (
        <div className="BgVideo">
            <video className="BgVideo__Content" autoPlay muted loop>
                <source src="img/video.mp4" type="video/mp4" />
                <source src="img/video.webm" type="video/webm" />
                Your browser is not supported
            </video>
        </div>
    );
};

export default BgVideo;
