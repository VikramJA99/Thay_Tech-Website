import React, { useEffect } from "react";
import "./CloudSupport.css";

const DatabaseSupport: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="body ">
        <div className="header-content">
          <div className="flex-1 animate-down-to-up">
            <h1 className="font-bold">
              <b>Database Support</b>
            </h1>
            <p>
              Mastering the Complexity of Cloud Databases for Business Success.
              <br /> Data is the lifeblood of modern business, and managing it
              effectively in the cloud is essential. Thay Technologies offers a
              full spectrum of Database Support services designed to help you
              harness the power of your data in the cloud.
            </p>
          </div>
          <div className="flex-1 text-right">
            <img
              src="public/Cloud_support/Database_support/Database_support.svg"
              alt="Head Software Development"
              className="animate-right-to-left"
            />
          </div>
        </div>
        {/* <h1 className='content text-5xl font-bold text-center mt-6'>We design tools to unveil
                your superpowers</h1> */}
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Key Services:</b>
            </h1>
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Database Design and Architecture:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <strong> Custom Database Design:</strong> We design databases
              tailored to your specific business needs, ensuring optimal
              structure and performance. <br />
              <strong> Scalable Architecture:</strong> Our database
              architectures are built to scale, allowing your database to grow
              with your business without compromising performance. <br />
              <strong> Data Modeling:</strong> We create detailed data models
              that define and structure your data, making it easier to manage
              and analyze.
            </p>
            <br />
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Database Migration:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <strong> Seamless Migration:</strong> We specialize in migrating
              on-premise databases to the cloud with minimal downtime and risk.
              <br />
              <strong> Data Integrity and Security:</strong> We ensure that your
              data remains intact and secure throughout the migration process.
              <br />
              <strong> Legacy System Integration:</strong> We integrate legacy
              systems with your new cloud database, ensuring continuity and data
              consistency.
            </p>
          </div>
          <div className="img p-10">
            <img src="public/Cloud_support/Database_support/Servers.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="public/Cloud_support/Database_support/Cloud.jpg" />
            </div>
            <div className="content p-10">
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Database Management:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <strong> Automated Backups and Recovery:</strong> We implement
                automated backup solutions and disaster recovery plans to
                safeguard your data.
                <br />
                <strong> Performance Tuning:</strong> Our team regularly
                assesses and optimizes your database performance, ensuring fast
                query responses and efficient data handling. <br />
                <strong> Security and Compliance:</strong> We implement robust
                security measures to protect your data and ensure compliance
                with industry regulations.
              </p>
              <br />
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Advanced Analytics and Reporting:</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <strong> Data Warehousing:</strong> We set up cloud data
                warehouses that enable you to store and analyze large volumes of
                data efficiently.
                <br />
                <strong> Real-Time Analytics:</strong> We provide real-time
                analytics solutions that help you gain actionable insights from
                your data.
                <br />
                <strong> Custom Reporting Solutions:</strong> We develop custom
                reporting tools that allow you to track and visualize key
                business metrics.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h3 className="text-gray-600 pb-3 text-xl">
              <b>Ongoing Support and Maintenance:</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal pb-5">
              <strong> 24/7 Monitoring:</strong> We provide continuous
              monitoring of your cloud database, ensuring optimal performance
              and rapid issue resolution.
              <br />
              <strong> Proactive Maintenance:</strong> Regular maintenance
              services keep your database secure, up-to-date, and optimized for
              performance.
              <br />
              <strong> Expert Troubleshooting:</strong> Our database experts are
              available around the clock to resolve any issues quickly and
              efficiently.
            </p>
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why Thay Technologies?</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              <strong>Unmatched Expertise:</strong> Our team has deep experience
              with a wide range of database technologies, from SQL to NoSQL,
              ensuring that we can support your specific needs.
              <br /> <strong>Tailored Solutions:</strong> We offer customized
              solutions that align with your business goals, whether you’re a
              small startup or a large enterprise.
              <br /> <strong>End-to-End Service:</strong> From initial design to
              ongoing maintenance, we provide comprehensive database services
              that cover every aspect of your cloud database needs.
            </p>
            <br />
          </div>
          <div className="img p-10">
            <img
              src="public/Cloud_support/Database_support/pexels-brett-sayles-4508751.jpg"
              alt="Marketing"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatabaseSupport;
