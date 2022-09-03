import { ReactComponent as Illustration } from "../images/illustration-thank-you.svg";

export default function ThanksCard({value}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <span>
          <Illustration />
        </span>
      </div>

      <div className="pt-3 flex flex-col items-center justify-center">
        <p className="text-orange text-center bg-medium-grey/10 px-4 py-2 text-base rounded-full">
          You selected {value} out of 5
        </p>
      </div>

      <h1 className="text-center pt-3">Thank You!</h1>
      <p className="leading-normal text-light-grey text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </>
  );
}
