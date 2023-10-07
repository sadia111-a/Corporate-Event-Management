const Header = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/6JDqBv0/corpo-banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Teamwork, motivation and business people high five collaboration in
            support of global mission success in office. Goal, vision and team
            building by fun colleagues hands connected in planning strategy
          </p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
