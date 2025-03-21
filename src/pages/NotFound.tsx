
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-600 mb-6">
              <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z"
                  fill="#F3F4F6"
                />
                <path
                  d="M66.6 102.6H113.4V117.9H66.6V102.6Z"
                  fill="currentColor"
                />
                <path
                  d="M56.7 57.6H66.6V117.9H56.7V57.6Z"
                  fill="currentColor"
                />
                <path
                  d="M113.4 57.6H123.3V117.9H113.4V57.6Z"
                  fill="currentColor"
                />
                <path
                  d="M66.6 57.6H113.4V72.9H66.6V57.6Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
              404
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-xl">
              Oops! It seems the page you're looking for has ventured into
              uncharted digital territory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
              </Button>
              <Link to="/">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center">
                  <HomeIcon className="mr-2 h-4 w-4" /> Return Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
