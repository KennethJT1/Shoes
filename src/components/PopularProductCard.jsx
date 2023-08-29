import { star } from "../assets/icons";

export const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />

      <div className="mt-1 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl leading-normal font-semibold">
        {name}
      </h3>
      <p className="font-montserrat font-semibold mt-2 text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};
