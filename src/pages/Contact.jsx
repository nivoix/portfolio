import { useState } from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal";

const Contact = () => {
  const [isopen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const form = e.target;
    e.preventDefault();
    emailjs
      .sendForm("portfolio-contact", "template_6si0w3r", form, {
        publicKey: "gnwD5jSTciYlYRTpA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.reset();
          setIsOpen(true);
        },
        (error) => {
          console.log("FAILED...");
          console.log(error);
        }
      );
  };

  return (
    <div className="contact">
      <Navbar />
      <div className="contactContent">
        <div className="content">
          <div className="contactBox">
            <h1>Contactez moi</h1>
            <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="infoName">
                <div className="lastName">
                  <label htmlFor="lastName">nom*</label>
                  <input
                    {...register("lastName", {
                      required: "Saisir votre nom de famille",
                      pattern: {
                        value:
                          /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/,
                        message:
                          "Chiffres et symboles interdits. Minimum 2 caractères.",
                      },
                    })}
                    name="lastName"
                    type="text"
                    id="lastName"
                    placeholder="nom"
                    autoComplete="off"
                  />
                  <span>{errors.lastName?.message}</span>
                </div>
                <div className="firstName">
                  <label htmlFor="firstName">prénom</label>
                  <input
                    {...register("firstName", {
                      pattern: {
                        value:
                          /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/,
                        message:
                          "Chiffres et symboles interdits. Minimum 2 caractères.",
                      },
                    })}
                    name="firstName"
                    type="text"
                    id="firstName"
                    placeholder="prénom"
                    autoComplete="off"
                  />
                  <span>{errors.firstName?.message}</span>
                </div>
              </div>
              <div className="infoContact">
                <div className="email">
                  <label htmlFor="email">email*</label>
                  <input
                    {...register("email", {
                      required: "Saisir votre email",
                      pattern: {
                        value: /^([^ ])[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-z]{2,4}$/,
                        message: "Veuillez indiquer une adresse email valide.",
                      },
                    })}
                    name="email"
                    type="email"
                    id="email"
                    placeholder="email"
                    autoComplete="off"
                  />
                  <span>{errors.email?.message}</span>
                </div>
                <div className="phone">
                  <label htmlFor="telephone">téléphone</label>
                  <input
                    {...register("telephone", {
                      pattern: {
                        value: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
                        message: "N° à 10 chiffres. Exemple : 0123456789",
                      },
                    })}
                    name="telephone"
                    type="tel"
                    id="telephone"
                    placeholder="téléphone"
                    autoComplete="off"
                  />
                  <span>{errors.telephone?.message}</span>
                </div>
              </div>
              <div className="objet">
                <label htmlFor="objet">objet*</label>
                <input
                  {...register("objet", {
                    required: "Saisir l'objet du message",
                    pattern: {
                      value: /^[a-zA-Z!?.;,: _-]+$/,
                      message: "Symboles interdits",
                    },
                  })}
                  name="objet"
                  type="text"
                  id="objet"
                  placeholder="objet"
                />
                <span>{errors.objet?.message}</span>
              </div>
              <div className="message">
                <label htmlFor="message">message*</label>
                <textarea
                  {...register("message", {
                    required: "Saisir votre message",
                    pattern: {
                      value: /^[a-zA-Z!?,.:; _-]+$/,
                      message: "Symboles interdits",
                    },
                  })}
                  name="message"
                  id="message"
                  placeholder="laissez votre message"
                  cols="30"
                  rows="8"
                ></textarea>
                <span>{errors.message?.message}</span>
              </div>
              <p>* champs obligatoires</p>
              <button type="submit" className="button">
                Envoyer
              </button>
            </form>
            <Modal isopen={isopen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
