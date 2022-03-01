import { Link } from "react-router-dom"
import HomeImg from "../images/home.png"
import MobileImg from "../images/mobile.png"
import CarImg from "../images/car.png"
import CodeImg from "../images/code.png"
import GuidelinesImg from "../images/guidelines.png"
import SupportImg from "../images/support.png"



export default function Home() {

    return (
      <div className="homeContainer">
        <section className="sectionWrapper">
          <div className="sectionContainer">
            <div className="SectionContent">
              <h1>The easiest way to create</h1> 
              <h1>and send emails</h1>
              <Link to="create"><button className="darkBtn w300">Get Started</button></Link>
            </div>

            <div className="SectionImage">
              <img className="testing" src={HomeImg}/>
            </div>
          </div>
        </section>
        <section className="sectionWrapper">
          <div className="sectionContainer">
            <div className="SectionImage">
              <img className="testing" src={CarImg}/>
            </div>
            <div className="SectionContent text-right">
              <h1>Built For Dealers</h1> 
              {/* <h1>and send emails</h1> */}
              {/* <button className="darkBtn w300">Get Started</button> */}
            </div>
          </div>
        </section>
        <section className="sectionWrapper">
          <div className="sectionContainer">
            <div className="SectionContent">
              <h1>Mobile Friendly</h1> 
              {/* <h1>and send emails</h1> */}
              {/* <button className="darkBtn w300">Get Started</button> */}
            </div>

            <div className="SectionImage">
              <img className="testing" src={MobileImg}/>
            </div>
          </div>
        </section>
        <section className="sectionWrapper">
          <div className="sectionContainer">
            <div className="SectionImage">
              <img className="testing" src={CodeImg}/>
            </div>
            <div className="SectionContent text-right">
              <h1>HTML & CSS Code Editor</h1> 
              {/* <h1>and send emails</h1> */}
              {/* <button className="darkBtn w300">Get Started</button> */}
            </div>
          </div>
        </section>
        <section className="sectionWrapper">
          <div className="sectionContainer">
            <div className="SectionContent">
              <h1>Brand Guidelines</h1> 
              {/* <h1>and send emails</h1> */}
              {/* <button className="darkBtn w300">Get Started</button> */}
            </div>

            <div className="SectionImage">
              <img className="testing" src={GuidelinesImg}/>
            </div>
          </div>
        </section>
        <section className="sectionWrapper">
          <div className="sectionContainer">
            <div className="SectionImage">
              <img className="testing" src={SupportImg}/>
            </div>
            <div className="SectionContent text-right">
              <h1>Customer Support</h1> 
              {/* <h1>and send emails</h1> */}
              {/* <button className="darkBtn w300">Get Started</button> */}
            </div>
          </div>
        </section>
        {/* <section className="CenterSectionWrapper">
          <div className="CenterSectionContainer">
            <h1>Customer Success is our First Priority</h1>
            <button className="purpleBtn w300">Contact Us</button>
          </div>
        </section> */}
        <section className="CenterSectionWrapper">
          <div className="CenterSectionContainer">
            <center><h1>Start Creating Professional and Responsive Email Designs</h1></center>
            <Link to="create"><button className="purpleBtn w300">Get Stated</button></Link>
          </div>
        </section>
      </div>
    );
  }