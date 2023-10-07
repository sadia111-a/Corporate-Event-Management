import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const { id, name, image, price, description } = service || {};
  return (
    <div>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-black font-medium leading-relaxed text-blue-gray-900 antialiased">
              {name}
            </p>
            <p className="block font-sans text-orange-400 font-medium leading-relaxed text-blue-gray-900 antialiased">
              {price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-orange-200 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Service Details
          </button>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;
