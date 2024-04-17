import { useState } from "react";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div class="max-w-6xl mx-auto">
          <Helmet>
            <title>Home - Fedbak</title>
          </Helmet>
            <div class="flex flex-col lg:flex-row items-center justify-between h-screen">
              <div class="lg:w-1/2 mb-8 lg:mb-0">
                <h1 class="text-2xl lg:text-4xl font-bold text-[#780000] leading-tight mb-4">
                    Read what others truly think, without filters or bias
                </h1>
                <p class="text-lg text-gray-700 mb-6 py-4 mr-4">
                 Gather honest feedback and reviews from your circle, business partners, or clients, all while maintaining anonymity.
                </p>
                <a
                  href="/login"
                  class="bg-[#003049] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Get started
                </a>
              </div>

              <div class="lg:w-1/2">
                <img
                  src="https://img.freepik.com/free-photo/photo-stupefied-teenager-with-black-skin-feels-surprised-hear-shocking-news-holds-takeaway-aromatic-coffee_273609-23699.jpg"
                  alt="Image"
                  class="rounded-lg shadow-md"
                />
              </div>
            </div>               
        </div>
        <div class="text-center py-8 bg-[#003049] text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  No judgment, no repercussions – just pure, uncensored communication.
                </h2>
        </div>
    </>
  );
}

export default App;
