const LatestPost = () => {
  return (
    <div className="min-h-[100vh] ">
      <div className="  rounded-lg">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2 className="text-3xl mt-10  text-center font-bold text-orange-500">
            Got Questions?
          </h2>
        </div>
        <div
          className="bg-base-200 pl-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="mt-10 mb-5 ">
            <li className="list-inside ">
              Have questions? We have answers here!
            </li>
          </p>
          <p className="mt-5 mb-5">
            <li className="list-disc">
              It’s our purpose and goal to help you succeed in building your
              ministry online. We have created a church event builder that will
              help you do just that.
            </li>
          </p>
          <p className="">
            <li className="list-disc">
              If you don’t find an answer to your question in our FAQs, please
              reach out in the green chat bubble in the bottom right corner of
              the screen. Alternatively you can reach out to us by email.
            </li>
          </p>
        </div>
      </div>
      <div
        className="mt-5 mb-10 pl-3"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="collapse collapse-plus bg-base-200 mb-2">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            How do I sign up?
          </div>
          <div className="collapse-content">
            <p>
              Step by Step walkthrough <br />
              1. Click “Get Started”
              <br />
              2.Choose and click “Service Details”
              <br />
              3. Click “View Template” to take a peek and then click “select
              details” on your favorite one. <br />
              4. Enter a username, email address and password to access our
              site. <br />
              5. Click the “Terms of Service” link to see our Statement of
              Faith.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Is it really free?
          </div>
          <div className="collapse-content">
            <p>
              You can choose our free plan and set up a event absolutely free.
              We are the only church event builder that we know of that offers
              this. The free plan costs you nothing, but is limited to customer,
              . We recommend the “Thrive” plan. This allows you to create
              unlimited events and has features like Sermons, Events, Online
              Giving and eCommerce! At only $29 per month, this is virtually
              free.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I Bring my domain?
          </div>
          <div className="collapse-content">
            <p>
              Yes! From your account dashboard you can walk through the steps to
              do this.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Do you offer discounts?
          </div>
          <div className="collapse-content">
            <p>
              Yes, at signup you can get 12 months for the price of 10 by paying
              annually. If you pay monthly it costs $29/mo. but paying annually
              comes out to $25/mo.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Does my church need to sign a contract ?
          </div>
          <div className="collapse-content">
            <p>
              No. There are no contracts when you sign up with Free Church
              Websites. You may cancel your subscription and website at any
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
