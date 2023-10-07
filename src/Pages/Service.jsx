import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleServiceCard from "./SingleServiceCard";

const Service = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const services = useLoaderData();
  console.log(services);
  console.log(id);
  useEffect(() => {
    const findService = services?.find((service) => service.id == id);
    setService(findService);
  }, [id, services]);

  return (
    <div>
      <SingleServiceCard service={service}></SingleServiceCard>
    </div>
  );
};

export default Service;
