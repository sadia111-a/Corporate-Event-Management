import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";

const Services = ({ services }) => {
  return (
    <div className="min-h-[60vh] mt-10">
      <h2 className="text-xl lg:text-5xl text-center text-orange-500 font-bold">
        Our Event Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};
Services.propTypes = {
  services: PropTypes.array,
};
export default Services;
