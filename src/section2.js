import "./styles.output.css";

function Section2() {
  return (
    <section className="md:h-screen md:p-20 md:pt-15">
      <div className="text-center">
        <div className="pb-5">
          <h3 className="p-5 text-3xl font-bold">Frequently Asked Question</h3>
          <p className="text-gray-500 font-light">
            We aim high at being focused on building
          </p>
          <p className="text-gray-500 font-light">
            relationships with our clients and community
          </p>
        </div>

        <div className="px-10 md:grid md:grid-cols-5 md:gap-8 md:py-4 md:px-10">
          <div className="md:col-span-2   md:border-r md:border-gray-500 py-5">
            <div className="faq-category  hover:bg-gray-200 hover:text-black">
              <p>Phone and platform</p>
            </div>
            <div className="faq-category hover:bg-gray-200 hover:text-black">
              <p>Features & Settings</p>
            </div>
            <div className="faq-category hover:bg-gray-200 hover:text-black">
              <p>Data & Security</p>
            </div>
            <div className="faq-category hover:bg-gray-200 hover:text-black">
              <p>CRM Integrations</p>
            </div>
            <div className="faq-category hover:bg-gray-200 hover:text-black">
              <p>Team Activities</p>
            </div>
            <div className="faq-category hover:bg-gray-200 hover:text-black">
              <p>Call & Connectivity</p>
            </div>
            <div className="faq-category hover:bg-gray-200 hover:text-black">
              <p>Payment & Plans</p>
            </div>
          </div>
          <div className="col-span-3 text-left">
            <div className="faq-component hover:bg-gray-100">
              <div className="faq-question">
                <p>What are the Platforms we are Supporting?</p>
              </div>
              <div className="faq-answer">
                <p>
                  We currently support Android and the iOS version in beta
                  testing phase.
                </p>
              </div>
            </div>
            <div className="faq-component hover:bg-gray-100">
              <div className="faq-question">
                <p>What OS versions we are Supporting?</p>
              </div>
              <div className="faq-answer">
                <p>
                  We currently support Android and the iOS version in beta
                  testing phase.
                </p>
              </div>
            </div>
            <div className="faq-component hover:bg-gray-100">
              <div className="faq-question">
                <p>Countries that we support?</p>
              </div>
              <div className="faq-answer">
                <p>
                  We currently support Android and the iOS version in beta
                  testing phase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
