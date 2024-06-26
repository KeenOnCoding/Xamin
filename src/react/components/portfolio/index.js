import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { BannerStyle1 } from '../xamin';

// Img
import BannerImg from '../../public/assets/images/about-us/04.png'
import img1 from "../../public/assets/images/about-us/01.png"
import img2 from "../../public/assets/images/about-us/01.png"
import img3 from "../../public/assets/images/about-us/02.png"
import img4 from "../../public/assets/images/about-us/03.png"
import img5 from "../../public/assets/images/about-us/05.png"
import img6 from "../../public/assets/images/about-us/01.png"
import img7 from "../../public/assets/images/about-us/02.png"
import img8 from "../../public/assets/images/about-us/03.png"
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumb:[
                {
                    title:'Home',
                    href:'/landing-page1',
                    active:false
                },
                {
                    title:'Portfolio details',
                    href:'#',
                    active:true
                }
            ]
        }
    }
    render() {
        return (
            <>
                <BannerStyle1
                    title={"Portfolio details"}
                    breadcrumb={this.state.breadcrumb}
                    image={BannerImg}
                />

                <div className="main-content">

                    <section className={"pb-0"}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="iq-portfolio-image">
                                        <Image src={img1} alt="Img" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" width=''/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 mt-4 mt-lg-0">
                                    <h3 className="mb-4">We work with you to address your most critical business
                                        priorities.</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don’t look even slightly believable.</p>
                                    <div className="portfolio-detail-box iq-rmb-45">
                                        <ul className="list-inline portfolio-detail mb-1">
                                            <li className="list-inline-item">
                                                <span className="lead">Client :</span>
                                                <span>xamin</span>
                                            </li>
                                            <li className="list-inline-item">
                                                <span className="lead">Category :</span>
                                                <span>Video</span>
                                            </li>
                                            <li className="list-inline-item">
                                                <span className="lead">Website :</span>
                                                <span>
                                                    <Link href={"!#"} target="_blank">xamin@gmail.com</Link>
                                                </span>
                                            </li>
                                            <li className="list-inline-item">
                                                <span className="lead">Date :</span>
                                                <span>29/08/2019</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true"
                                         data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1"
                                         data-items-mobile-sm="1" data-autoplay="true" data-loop="true"
                                         data-margin="30">

                                        <div className="Consulting-img  text-left">
                                            <Image src={img2} alt="slider" />
                                        </div>
                                        <div className="Consulting-img  text-left">
                                            <Image src={img3} alt="slider" />
                                        </div>
                                        <div className="Consulting-img  text-left">
                                            <Image src={img4} alt="slider" />
                                        </div>
                                        <div className="Consulting-img  text-left">
                                            <Image src={img5} alt="slider" />
                                        </div>
                                        <div className="Consulting-img  text-left">
                                            <Image src={img6} alt="slider" />
                                        </div>
                                        <div className="Consulting-img  text-left">
                                            <Image src={img7} alt="slider" />
                                        </div>
                                        <div className="Consulting-img  text-left">
                                            <Image src={img8} alt="slider" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 mt-5">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        ‘Content here, content here’, making it look like readable English. Latin words,
                                        combined with a handful of model sentence structures, to generate Lorem Ipsum
                                        which looks reasonable.
                                    </p>
                                </div>
                                <div className="col-sm-12 no-margin">
                                    <p className="mb-0">
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by injected humour, or
                                        randomised words which don’t look even slightly believable. If you are going to
                                        use a passage of Lorem Ipsum, you need to be sure there isn’t anything
                                        embarrassing hidden in the middle of text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="container">
                            <div className="row row-fluid">
                                <div className="fadeInUp col-sm-12 animated">
                                    <div className="title-box wow fadeInUp text-center">
                                        <span className="title-design">OUR PROJECTS</span>
                                        <h2>Recent Portfolio</h2>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false"
                                         data-items="3" data-items-laptop="3" data-items-tab="2" data-items-mobile="1"
                                         data-items-mobile-sm="1" data-autoplay="false" data-loop="true"
                                         data-margin="30">

                                        <div className="iq-masonry-item item html ">
                                            <div className="iq-portfolio">
                                                <Link href={"!#"} className="iq-portfolio-img">
                                                    <Image width="1260" height="954" src={img1}
                                                         className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                         alt="" />
                                                </Link>
                                                <div className="iq-portfolio-content  text-center">
                                                    <div className="details-box clearfix">
                                                        <div className="consult-details">
                                                            <Link href={"!#"}>
                                                                <h5 className="text-hover"> Business Growth</h5>
                                                            </Link>
                                                            <p className="mb-0">HTML</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="iq-masonry-item item html ">
                                            <div className="iq-portfolio">
                                                <Link href={"!#"} className="iq-portfolio-img">
                                                    <Image width="1260" height="954" src={img2}
                                                         className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                         alt="" />
                                                </Link>
                                                <div className="iq-portfolio-content  text-center">
                                                    <div className="details-box clearfix">
                                                        <div className="consult-details">
                                                            <Link href="#">
                                                                <h5 className="text-hover"> Business Growth</h5>
                                                            </Link>
                                                            <p className="mb-0">HTML</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </>
        );
    }
}

export default Index;