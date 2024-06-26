import React from 'react';

import { AboutStyle, SectionTitle} from '../../xamin';
import Link from 'next/link';
import Image from 'next/image';

const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
                <div  key={index} className="item  text-left">
                    <div className="iq-team">
                            <div className="iq-team-img">
                                <Image alt="#" className="img-fluid" src={card.img} />
                            </div>
                            <div className="iq-share">
                                            <div className="slideouticons">
                                                <label className="mainlabel"><i className="fa fa-share-alt"></i></label>
                                                <div className="iconswrapper">
                                                    <ul>
                                                        <li><Link href="#"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="iq-team-info text-center">
                                            <Link href={'#'}>
                                                <h5>{props.heading}</h5>
                                            </Link>
                                            <span>{props.position}</span>
                                        </div>
                        </div>
                </div>
    ));
};
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img:  require("../../../public/assets/images/team/2.jpg"),
                    heading: "Mark McManus",
                    position: "COO",
                    
                },
                {
                    img:  require("../../../public/assets/images/team/3.jpg"),
                    heading: "Jack White",
                    position: "CEO",
                    
                },
                {
                    img:  require("../../../public/assets/images/team/4.jpg"),
                    heading: "Handry White",
                    position: "CTO",
                    
                },
                {
                    img:  require("../../../public/assets/images/team/5.jpg"),
                    heading: "Jack McManus",
                    position: "Project Manager",
                    
                },
                {
                    img:  require("../../../public/assets/images/team/1.jpg"),
                    heading: "Marcash Dane",
                    position: "Project Manager",
                    
                }
               
            ]
        }
    }

    render() {
     
        return (
            <>
             <section>
                <div className="container">
                    <div className="row xamin-bg">
                        <div className="col-sm-12">
                        <SectionTitle
                            link ="Team"
                            title="Management Team"
                            className = "title-box wow fadeInUp text-center"
                            spanclassName="title-design"
                        />
                        </div>
                        <div className="col-md-12 wow fadeInUp ">
                             <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="4" data-items-laptop="4" data-items-tab="3" data-items-mobile="2" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                                <Cards cardList={this.state.cardData} />
                            </div>
                        </div>
                    </div>
                </div>
                  
             </section>
              
            </>
        );
    }
}

export default Index;
