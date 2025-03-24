import "./App.css";
import Homepage from "./homepage";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div className="App">
      <Homepage />
      <div id="home">
        <img
          className="d-block w-100"
          src="albraqa_home.svg"
          alt="Al-Braqa Home"
        />
      </div>
      {/* about */}
      <div
        id="about"
        className="position-relative"
        style={{
          background: "url('albraqa_bg2.svg') center/cover no-repeat",
          height: "100vh",
        }}
      >
        <div className="about-container h-100 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-md-1 empty-container"> </div>
            <div className="col-md-5 text-center text-start">
              <img
                className="img-fluid w-50 rounded"
                src="albraqa_about1.svg"
                alt="Al-Braqa About Us Oil Rig"
              />
            </div>
            <div className="col-md-5 text-justify ">
              <h1 className="display-2">INTRODUCTION</h1>
              <p>
                Al-Braqa Offshore Sdn Bhd is proudly a Bruneian oilﬁeld service
                company providing logistics, supply and services to oil & gas
                industry, particularly South East Asia and the overall Asia
                Paciﬁc Region.
              </p>
              <p>
                As an oil and gas business, you face unique challenges everyday.
                it is our job to come up with solutions that will help you in
                providing services that are safe, ethical and sustainable.
              </p>
              <p>
                A full understanding of our customer’s need ranging from the
                smallest advisory assignment to maintenance projects has enabled
                Al-Braqa to create value and mitigate risks for our customers
                based on our experience throughout the entire project lifecycle
                and value chain through accumulated knowledge and strong
                relationships with regional businesses.
              </p>
            </div>
            <div className="col-md-1 empty-container"> </div>
          </div>
        </div>
      </div>
      {/* about leslie */}
      <div
        id="about-leslie"
        className="position-relative"
        style={{
          background: "url('albraqa_bg2.svg') center/cover no-repeat",
          height: "100vh",
        }}
      >
        <div className="about-container h-100 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-md-1 empty-container"> </div>
            <div className="col-md-5 text-center text-start">
              {/* <h2 className="white">LESLIE ALLEN-VERCODE<br></br>PERSONAL PROFILE</h2> */}
              <img
                className="img-fluid w-50 rounded"
                src="albraqa_about_leslie.svg"
                alt="Leslie Allen Vercode"
              />
            </div>
            <div className="about-lesliea col-md-5 text-justify">
            <h2 className="">LESLIE ALLEN-VERCODE<br></br>PERSONAL PROFILE</h2>
              <br></br>
              <p>
                Leslie is a seasoned property professional with over 50 years of
                experience at the Director level, known for his successful
                developments across the UK and Europe. Notably, he oversaw the
                construction of Updown Court, once the most expensive single
                house in the UK. His expertise spans residential, commercial,
                and retail projects, demonstrating strong leadership, financial
                acumen, and project management skills.
              </p>
              {/* <p>
                <b>Current Positions</b>
                <br></br>· Chairman, <i>Camoren Holdings Ltd</i> (2014-present):
                Overseeing a £1.2B development in Gibraltar that includes luxury
                apartments, affordable homes, a marina, a hotel, and retail
                space.
                <br></br>· Partner, <i>Passfield Industrial Estates LLP</i>{" "}
                (2006-present): Involved with a multi-let business park in East
                Hampshire.
                <br></br>· Director, <i>Port Derwent Developments Ltd</i>{" "}
                (2014-present): Leading a 60-acre project on the UK’s energy
                coast with commercial and residential components.
                <br></br>· Non-Executive Director, <i>Pimlico Capital Ltd</i>{" "}
                (2010-present): Focused on real estate investments for
                expatriates.
                <br></br>· Director, <i>Riga International Business Park SIA</i>{" "}
                (2008-present): Managing a commercial development site near Riga
                International Airport.
                <br></br>· Director, <i>European Consultancy Services Ltd</i>{" "}
                (1995-present): Providing consultancy across Europe.
                <br></br>· Director, <i>Whitehaven Land Ltd</i> (2015-present):
                Involved with a landfill site and energy production.
                <br></br>· Director, <i>Trevipark Ltd</i> (2000-present):
                Overseeing a car park construction company with a franchise from
                an Italian engineering firm.
              </p>
              <p>
                <b>Contact:</b> Office - 01403 701951<br></br>
                Mobile - 07785902982<br></br>
                Skype - lesa-v<br></br>
                E-mail: leslie@btinternet.com<br></br>
                Address: Burdocks, Brick Kiln Common, Fittleworth Road,
                Wisborough Green, RH14 0HA
              </p> */}
            </div>
            <div className="col-md-1 empty-container"> </div>
          </div>
        </div>
      </div>
      {/* about hj mohd abdillah */}
      <div
        id="about-ceo"
        className="position-relative"
        style={{
          background: "url('albraqa_bg2.svg') center/cover no-repeat",
          height: "100vh",
        }}
      >
        <div className="about-container h-100 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-md-1 empty-container"> </div>
            <div className="col-md-5 text-center text-start">
              <img
                className="img-fluid w-50 rounded"
                src="albraqa_about_hjmhdabdillah.svg"
                alt="Haji Mohd Abdillah Hj Abdullah"
              />
            </div>
            <div className="about-hjmhdabdillah col-md-5 text-justify">
              <h2 className="">HJ MOHD ABDILLAH<br></br>HJ ABDULLAH SPEECH</h2>
              <br></br>
              <p>
                Founded in 2009, Al-Braqa Offshore Sdn Bhd offers top quality
                products and services that benefits the oil and gas industry in
                Brunei. With a team of highly skilled and experienced
                individuals, we aim to meet the needs and wants of our clients
                through comprehensive customer service and competent pricing,
                without compromising on quality or deadlines. We remain at the
                forefront of the oil and gas standard of service through
                optimizing our company's performance by investing in our people.
                Over the years of working with international entities, we have
                had the privilege of forging partnerships that allowed us to
                journey with them to assist them in their current and future
                goals. It has also allowed us to cultivate the most dependable
                and innovative methods of operation. Al-Braqa aims to continue
                providing products and services to our clients, investors and
                partners that are cost effective, efficient, safe and
                comprehensive.
              </p>
            </div>
            <div className="col-md-1 empty-container"> </div>
          </div>
        </div>
      </div>
      {/* bod  */}
      <div
        id="about-bod"
        className="position-relative"
        style={{
          background: "url('albraqa_about_bod.svg') center/cover no-repeat",
          height: "100vh",
        }}
      ></div>
       {/* management  */}
      <div
        id="about-management"
        className="position-relative"
        style={{
          background: "url('albraqa_about_management.svg') center/cover no-repeat",
          height: "100vh",
        }}
      ></div>
      {/* company strategy */}
      <div id="about-company-strategy">
        <Carousel>
          <Carousel.Item>
            <img className="w-100 company-strat1" src="albraqa_about_company_strat1.svg" alt="company strategy"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="w-100 company-strat2" src="albraqa_about_company_strat2.svg" alt="company strategy"/>
          </Carousel.Item>
        </Carousel>

      </div>
    </div>
  );
}

export default App;
