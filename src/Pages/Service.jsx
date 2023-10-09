import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleServiceCard from "./SingleServiceCard";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Event | Service{id}</title>
      </Helmet>
      <SingleServiceCard service={service}></SingleServiceCard>
    </div>
  );
};

export default Service;
