import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-linear-to-tr from-blue-100 via-purple-100 to-pink-100 opacity-40 animate-pulse-slow"></div>

      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-center max-w-6xl mx-auto px-4 md:px-6 py-16 gap-8 lg:gap-12">
        <img
          src="/hero.png"
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
        />

        <div className="text-center lg:text-left flex flex-col items-center lg:items-start space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary animate-bounce-slow">
            Adil News Hub
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed animate-fade-in max-w-lg">
            Stay updated with the latest stories from around the world. Explore insightful articles, trending topics, and breaking news, all in one place.
          </p>
          <Link
            to="/news"
            className="btn btn-primary btn-lg transform hover:scale-105 transition duration-300"
          >
            Explore News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
