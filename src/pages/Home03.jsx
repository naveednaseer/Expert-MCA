import React from 'react';


import Header from '../components/header/Header';
import Banner3 from '../components/banner/Banner3';
import About3 from '../components/about/About3';
import Team2 from '../components/team/Products';
import Testimonials from '../components/testimonials/Testimonials';
import Faq3 from '../components/faqs/Faq3';
import Footer from '../components/footer/Footer';

import dataTestimonials from '../assets/fake-data/data-testimonials';
import dataTeam from '../assets/fake-data/dataTeam';
import dataFaqs from '../assets/fake-data/data-faq';

 


function Home03(props) {
    return (
        <div className='home-3 wrapper '> 

        <Header />
         
        <Banner3 /> 
          
        <About3 />

        <Team2 data={dataTeam} />

        <Testimonials data={dataTestimonials} />

        <Faq3 data={dataFaqs} />
        
        <Footer /> 

        </div>
    );
}

export default Home03;