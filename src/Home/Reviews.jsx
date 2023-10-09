const Reviews = () => {
  return (
    <div className="min-h-[60vh]">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h2 className="text-xl lg:text-3xl text-center font-bold mb-10 text-orange-500">
          Our Customer Care Services
        </h2>
      </div>
      <div>
        <div className="hero min-h-screen bg-base-300 shadow-md">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/2cQBrhM/customer.jpg"
              className="lg:max-w-xl rounded-lg shadow-2xl"
            />
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1 className="text-xl lg:text-3xl font-bold">
                Outstanding Corporate Event Experience!!
              </h1>
              <p className="py-6">
                exceptional customer service can lead to repeat business and
                referrals in the corporate events industry. Building strong
                client relationships and ensuring their satisfaction should be a
                top priority for our customer service team.
              </p>
              <button className="btn ">
                <h1>Rating: ⭐⭐⭐⭐⭐ (5/5)</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
