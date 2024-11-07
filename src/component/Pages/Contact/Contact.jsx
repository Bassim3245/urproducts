import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { ColorButton } from "../Config/contact";
import axios from "axios";
import { BackendUrl } from "../api/api";
import { useTranslation } from "react-i18next";
function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handelContact = async (e) => {
    try {
      console.log("hello");
      const formData = new FormData();
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);
      const response = await axios.post(`${BackendUrl}/contacts/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <section id="contact" className="contact section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <div className="d-flex justify-content-center pt-4 mb-4 ">
              <h2>
                <a href="#" className="mb-3">
                  {t("Contact.title")}
                </a>
              </h2>
            </div>
          </div>

          <div className="displaycontactiframe">
            <div className="widthIframe ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.060885645877!2d44.44252277527503!3d33.315631819263245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155783a9ab92cdb3%3A0xfdf7a9a52c2c76a9!2sUr%20products!5e0!3m2!1sen!2siq!4v1706353901850!5m2!1sen!2siq"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="iframe"
              />
            </div>
            <div className="borderRedue">
              <form className="email-form" onSubmit={handelContact}>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required=""
                  />
                </div>
                <div className=" form-group mt-3 ">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required=""
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <ColorButton
                    variant="contained"
                    onClick={() => handelContact()}
                    style={{background:"#0080ff"}}
                  >
                    Submit{" "}
                  </ColorButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
}

export default Contact;
