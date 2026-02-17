
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';

const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />

            {/* Call to Action Section */}
            <section className="bg-[#12344D] py-20 text-center text-white px-6">
                <h2 className="text-3xl font-bold mb-6">Ready to deliver better support?</h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
                    Join 50,000+ companies who use Simplesk to improve their customer service.
                </p>
                <button className="bg-[#47C2B4] hover:bg-[#3daeca] text-white text-lg font-bold py-4 px-10 rounded-full transition transform hover:-translate-y-1 shadow-lg">
                    Get Started for Free
                </button>
            </section>
        </div>
    );
};

export default LandingPage;
