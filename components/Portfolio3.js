export default function Portfolio3() {
  return (
    <section id="portfolio3" className="py-20 bg-opacity-50 bg-sky-100">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg font-semibold bg-gray-800 bg-opacity-60 text-white hover:cursor-pointer hover:bg-opacity-80">
          Blog / 블로그
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1d4a97] to-[#38acef] bg-clip-text text-3xl font-medium text-transparent">
          Travelog
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
          Build with Next.js
        </p>
        <a href="https://portfolio-blog-travelog.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            src="images/travelog.jpg"
            className="mt-8 transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
            alt="RetailRadar Dashboard"
          />
        </a>
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-2">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-sky-200 bg-opacity-30 hover:border-sky-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                기술 스택 및 구현 방식
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Next.js를 사용하여 제작하였습니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-sky-200 bg-opacity-30 hover:border-sky-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                주요 기능 소개
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                여행 블로그 사이트를 제작하면서, 포스팅을 3개씩 표시하는 Pagination 기능을 구현하고, 메뉴별로 분류된 데이터 파일을 관리하여 효율적인 콘텐츠 분류와 탐색을 가능하게 했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
