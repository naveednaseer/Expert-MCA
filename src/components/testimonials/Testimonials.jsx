import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Pagination   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

Testimonials.propTypes = {
    data: PropTypes.array
};

function Testimonials(props) {
    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'Testimonials',
            heading: 'What People Say',
        }
    )

    return (
        <section id={'home_testimonials'} className="testimonials">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonials__main">
                                <div className="block-text center">
                                    <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                    <h3 className="heading wow" data-splitting>{dataBlock.heading}
                                        </h3>
                                </div>

                                <Swiper
               
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    className="testimonials-swiper"
                                    loop= {true}
                                    
                                    modules={Pagination}
                                    pagination
                                >
                        {
                            data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="swiper-slide">
                                            <div className="box-testimonial center">
                                                <img src={idx.icon} alt="LOGO" />
                                                <p className="text">{idx.text}</p>
                                                <div className="info">
                                                    <img style={{objectPosition: "center"}} src={idx.avt} alt="img" />
                                                    <h5 className="name">{idx.name}</h5>
                                                    <p>{idx.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>


                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Testimonials;