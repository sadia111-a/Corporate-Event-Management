const Header = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/6JDqBv0/corpo-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Teamwork, motivation and business people high five collaboration
              in support of global mission success in office. Goal, vision and
              team building by fun colleagues hands connected in planning
              strategy
            </p>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="1800"
              data-aos-offset="0"
            >
              <button className="btn bg-base-200 ">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
