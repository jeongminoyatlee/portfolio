export default function Portfolio1() {
    return (
      <section
        id="portfolio1"
        className="py-20 bg-white"
      >
         <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
          <div className="inline-block rounded-lg bg-[#181a32] bg-opacity-60 px-3 py-1 text-sm font-semibold text-white hover:cursor-pointer hover:bg-opacity-40">
            Dashboard / 대시 보드
          </div>
          <h2 className="mt-4 bg-gradient-to-r from-[#404fd8] to-[#91c8ea] bg-clip-text text-3xl font-medium text-transparent">
            RetailRadar
          </h2>
          <p className="mt-4 text-lg font-normal lg:max-w-3xl">
            Build with Next.js, TailwindCSS
          </p>
          <a href="https://portfolio-dashboard-retailradar.vercel.app" target="_blank" rel="noopener noreferrer">
            <img
              src="images/retailradar.jpg"
              className="mt-8 transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
              alt="placeholder"
            />
          </a>
          <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-2">
            <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-sky-200 bg-opacity-30 hover:border-sky-300 hover:shadow-xl">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  기술 스택 및 구현 방식
                </h3>
                <p className="mt-1 text-gray-800 text-md">
                  Next.js 와 TailwindCSS를 사용하여 제작하였습니다.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-sky-200 bg-opacity-30 hover:border-sky-300 hover:shadow-xl">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  주요 기능 소개
                </h3>
                <p className="mt-1 text-gray-800 text-md">
                데이터 파일의 내용을 통합하여 대시보드 메인 페이지에 표시하였고, 테이블에서는 기본적으로 정렬 기능을 추가하였으며, 열 추가 및 체크박스를 활용한 열 삭제 기능을 구현했습니다. 또한, 테이블의 내용이나 사진을 변경하는 등 정보 수정이 가능하도록 제작하였습니다.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  