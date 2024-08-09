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
          TripFinder
        </h2>
        <p className="mt-4 text-lg text-gray-100 font-normal lg:max-w-3xl">
          Built with Next.js & TailwindCSS, utilizing TripAdvisor API for travel recommendations
        </p>
        <img
          src="images/product.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-2">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-sky-200 bg-opacity-30 hover:border-sky-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Mighty quick.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Sed elementum tempus egestas sed sed risus pretium
                quam vulputate.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Mighty quick.
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Sed elementum tempus egestas sed sed risus pretium
                quam vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
