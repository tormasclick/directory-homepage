import Header from '../components/Header';
import Hero from '../components/Hero';
import InsuranceCarousel from '../components/InsuranceCarousel';
import Specialties from '../components/Specialties';
import TopRatedDoctors from '../components/TopRatedDoctors';
import TopRatedClinics from '../components/TopRatedClinics';
import WhyChooseTymira from '../components/WhyChooseTymira';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'; 

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <InsuranceCarousel />
      <div className="w-full overflow-x-hidden flex justify-center">
        <Specialties />
      </div>
      <TopRatedDoctors />
      <TopRatedClinics />
      <WhyChooseTymira />
      <Testimonial />
      <FAQ />
      <Newsletter />
      <Footer /> 
    </>
  );
};

export default Home;