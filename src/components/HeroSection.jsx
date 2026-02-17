
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-[#12344D] to-[#2C5CC5] text-white pt-24 pb-32">
            <div className="max-w-4xl mx-auto text-center px-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Customer Support <span className="text-[#47C2B4]">Made Simple</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-200">
                    Scale your support experiences without scaling your costs. Delight your customers with effortless service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/signup" className="bg-[#47C2B4] hover:bg-[#3daeca] text-white text-lg font-bold py-4 px-8 rounded-full transition transform hover:-translate-y-1 shadow-lg">
                        Start Free Trial
                    </Link>
                    <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#12344D] text-white text-lg font-bold py-4 px-8 rounded-full transition transform hover:-translate-y-1">
                        Request Demo
                    </button>
                </div>
                <div className="mt-12 text-sm text-gray-300">
                    No credit card required &bull; 21-day free trial &bull; Cancel anytime
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
