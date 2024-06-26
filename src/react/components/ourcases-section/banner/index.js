import React from 'react';
import { BannerStyle1 } from '../../xamin';

import img from '../../../public/assets/images/about-us/04.png'
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
                    title:'Portfolio 2 Columns',
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
                    title={"Portfolio 2 Columns"}
                    breadcrumb={this.state.breadcrumb}
                    image={img}
                />
            </>
        );
    }
}

export default Index;