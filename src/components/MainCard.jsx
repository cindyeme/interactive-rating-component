import { IconStar } from "./IconStar";

export default function MainCard({ selected, handleSubmit, handleChange, error }) {

  return (
    <>
      <div className="flex flex-col items-start justify-start">
        <div className="bg-medium-grey/10 shadow p-4 rounded-full">
          <span>
            <IconStar />
          </span>
        </div>
      </div>

      <h1>How did we do?</h1>
      <p className="leading-normal text-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <ul className="rating flex items-center justify-between">
        <li className={listStyle}>
          <input
            type="radio"
            name="rating"
            id="one"
            value={1}
            onChange={handleChange}
          />
          <label htmlFor="one">1</label>
        </li>
        <li className={listStyle}>
          <input
            type="radio"
            name="rating"
            id="two"
            value={2}
            onChange={handleChange}
          />
          <label htmlFor="two">2</label>
        </li>
        <li className={listStyle}>
          <input
            type="radio"
            name="rating"
            id="three"
            value={3}
            onChange={handleChange}
          />
          <label htmlFor="three">3</label>
        </li>
        <li className={listStyle}>
          <input
            type="radio"
            name="rating"
            id="four"
            value={4}
            onChange={handleChange}
          />
          <label htmlFor="four">4</label>
        </li>
        <li className={listStyle}>
          <input
            type="radio"
            name="rating"
            id="five"
            value={5}
            onChange={handleChange}
          />
          <label htmlFor="five">5</label>
        </li>
      </ul>

      <div className="pt-3">
        <button
          className="bg-orange py-2 rounded-full w-full text-white uppercase text-base tracking-wider hover:bg-white hover:text-orange transition duration-300 ease-linear font-semibold"
          onClick={handleSubmit}
        >
          submit
        </button>
        <p className="text-[15px] text-center text-red-400 mt-2">{error}</p>
      </div>
    </>
  );
}

const listStyle = `bg-medium-grey/10 text-light-grey rounded-full text-base hover:bg-light-grey hover:text-white cursor-pointer focus:bg-orange focus:text-white`;
