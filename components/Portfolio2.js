export default function Portfolio2() {
  return (
    <section
      id="portfolio2"
      className="py-20 bg-gradient-to-t from-[#524790] to-[#8c79ed]"
    >
       <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="inline-block rounded-lg bg-[#302953] bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100 hover:cursor-pointer hover:bg-opacity-40">
          Travel Guide / 여행 가이드
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#6a1d97] to-[#b838ef] bg-clip-text text-3xl font-medium text-transparent">
          TourNest
        </h2>
        <p className="mt-4 text-lg text-gray-100 font-normal lg:max-w-3xl">
          Built with Next.js & Bootstrap, utilizing Google Maps API for travel recommendations and OpenWeather API for weather information
        </p>
        <a href="https://portfolio-api-tournest.vercel.app" target="_blank" rel="noopener noreferrer">
            <img
              src="images/tournest.jpg"
              className="mt-8 transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
              alt="placeholder"
            />
          </a>
          <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-2">
            <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-transparent rounded-xl bg-purple-200 bg-opacity-30 hover:border-[#00e4ff] hover:shadow-xl">
              <div>
                <h3 className="text-lg font-medium text-white">
                  기술 스택 및 구현 방식
                </h3>
                <p className="mt-1 text-gray-200 text-md">
                  Next.js와 Bootstrap을 사용하여 웹 애플리케이션을 개발하였으며 Google Maps API를 활용해 여행지 추천 기능을 제공하고 
                  OpenWeather API를 통해 실시간 날씨 정보를 제공하고 있습니다. 
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-transparent rounded-xl bg-purple-200 bg-opacity-30 hover:border-[#00e4ff] hover:shadow-xl">
              <div>
                <h3 className="text-lg font-medium text-white">
                  주요 기능 소개
                </h3>
                <p className="mt-1 text-gray-200 text-md">
                  사용자가 도시를 검색하면 해당 도시의 현재 날씨와 예보를 제공하며 Google Maps API를 통해 여행 추천지를 제안합니다. 
                  추천지 카드는 여행지의 사진, 주소, 평가를 포함하며, 평가에 따라 별표로 표시됩니다. 
                  대시보드 메인 페이지에서 도시 검색 및 추천 여행지 확인이 가능합니다.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
