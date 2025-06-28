export default function rivew() {
  return (
    <div className="p-5 ">
      <h1 className="m-4 mb-10 text-3xl font-bold text-center">simple overview by reting</h1>
      <div className="flex justify-between">
        {/* pic start*/}
        <div className="w-full h-full ">
          <img
            className="z-50 w-full"
            src="https://i.ibb.co/V0hs62my/images.jpg"
            alt=""
          />
        </div>
        {/* pic end */}
        <div className="flex bg-blue-400">
          <div className="m-10 ml-8">
            <h1 className="text-5xl">100+</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              rerum. Deserunt porro odit modi corporis esse assumenda reiciendis
              magni laudantium.
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
                aria-label="3 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
                aria-label="5 star"
              />
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-5xl">180+</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              rerum. Deserunt porro odit modi corporis esse assumenda reiciendis
              magni laudantium.
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
                aria-label="5 star"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
