import Link from 'next/link';
import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
                    <div className="pagination justify-content-center">
                        <nav aria-label="Page navigation">
                            <ul className='page-numbers'>
                                <li> <span aria-current='page' className='page-numbers current'>1</span> </li>
                                <li> <Link className='page-numbers' href='#?paged=2'>2</Link> </li>
                                <li> <Link className="next page-numbers" href="#?paged=2'"> <span aria-hidden="true">Next page</span> </Link> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Index;