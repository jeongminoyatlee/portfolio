import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Landing() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["안녕하세요", "프론트엔드 개발자 이정민입니다"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section>
      <div className="max-w-3xl mx-8 mb-7 md:mx-auto">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-3xl font-semibold text-white sm:text-8xl md:text-5xl md:text-gray-900">
              <span ref={typedElement}></span>
            </h1>
            <h2 className="mt-10 mb-3 text-sm text-gray-100 md:text-sm md:mx-10 md:text-gray-600">
              프론트엔드 개발을 통해 변화하는 기술과 트렌드에 적응하며 새로운 도전을 즐깁니다. <br/>
              사용자 경험을 최우선으로 생각하고 작은 디테일까지 신경 쓰는 개발자가 되고자 합니다.
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-full px-4 text-center sm:px-0 md:mx-auto md:my-12 md:w-3/5">
        <div className="relative z-10">
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://godly.website"
          >
            <img
              className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
              src="images/product.png"
              alt="Product Image"
            />
          </a> */}
        </div>
        {/* <p className="z-10 my-8 text-sm font-medium text-gray-500">
            Caption if needed
          </p> */}
      </div>
    </section>
  );
}