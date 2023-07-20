import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import line from '../../assets/images/background/line-2.png'

Products.propTypes = {
    data: PropTypes.array
};


function Products(props) {

    const {data} = props
    return (
        <section className="team s2">
                    <div className="shape right"></div>
                    <img src={line} alt="" className="img-line" />
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="block-text center">
                                    <h6 className="sub-heading"><span>Our expertise</span></h6>
                                    <h3 className="heading wow" data-splitting>Our area of expertise 
                                        <br />
                                        lies in various products</h3>
                                </div>

                            </div>

                            {
                                data.map(idx => (
                                    <div key={idx.id} className="col-xl-3 col-md-6">
                                        <div className="team-box">
                                            <div className="image">
                                                <Link to="">
                                                    <img src={idx.img} alt="LOGO" />
                                                </Link>

                                                <div  className="list-social">
                                                    {idx.content}
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p className="h5 name">{idx.title}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                            

                            

                        </div>

                    
                    </div>
                </section>
    );
}

export default Products;