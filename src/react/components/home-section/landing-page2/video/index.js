import React from 'react';

import { WaveBox} from '../../../xamin';
import Image from 'next/image';

import img from "../../../../public/assets/images/about-us/09.jpg"

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        

        return (
            <>
               <div className="iq-ptb-100">
                    <div className="container">
                        <div className="row xamin-bg">
                            <div className="col-sm-12 offset-md-1 offset-lg-1 col-md-10 col-lg-10 wow fadeInUp text-center">
                                <div>
                                    <div className="scroll-effect">
                                        <Image src={img} className="img-fluid img-one" alt="#" />
                                        <div className="main-video">
                                            <div className="video-img">
                                                <WaveBox />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
