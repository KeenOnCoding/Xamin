import Link from 'next/link';
import React from 'react';

const Index = (props) => {
    return (
        <>
                <div className="consult-video video-btn">
                    <div className="btn-waves">
                        <div className="waves wave-1"></div>
                        <div className="waves wave-2"></div>
                        <div className="waves wave-3"></div>
                    </div>
                    <Link href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="iq-video popup-youtube"><i className="fa fa-play"></i></Link>
                </div>
        </>
    );
}

export default Index;
