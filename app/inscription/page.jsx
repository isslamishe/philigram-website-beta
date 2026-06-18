"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/context/main.context";

export default function Inscription() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();
  const [inscriptionConfirmed, setInscriptionConfirmed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setCurrentNav("inscription");
    setCurrentSubNav("");
  }, []);

  return (
    <div className="flex flex-col  bg-black gap-0 bg-no-repeat overflow-hidden bg-cover bg-center relative w-screen min-h-screen">
      {/*bg image */}

      <div className=" absolute scale-100 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-[100%] h-[100%]">
        <div className="absolute inset-0 z-10">
          <Image
            src="/inscerption/Bg.jpg"
            fill
            priority
            sizes="100vw"
            className="object-cover md:opacity-100 opacity-0"
            alt=""
          />

          <Image
            src="/inscerption/bg-mobile.png"
            fill
            priority
            sizes="100vw"
            className="object-cover md:opacity-0 opacity-100"
            alt=""
          />
        </div>
      </div>

      {/*bg filter */}
      <div className=" absolute w-full bg-linear-to-b from-black/20 to-[#ADADAD]/6 h-full z-20" />

      {/*content */}
      <div className=" relative w-full mt-auto gap-0 lg:gap-[1.5dvw]  justify-center items-center lg:items-end h-[90dvh] flex flex-col-reverse  lg:flex-row  z-30">
        <div className=" w-[90%] lg:w-2/5 xl:w-1/2 h-1/8 lg:h-1/3 flex justify-center lg:justify-center items-center flex-col">
          <div className="w-full text-[clamp(0.4rem,5vw,0.6rem)] mt-auto mb-[10dvh] md:text-[clamp(0.4rem,5vw,0.6rem)] lg:text-[clamp(0.7rem,5vw,0.8rem)] xl:text-[clamp(0.7rem,5vw,0.9rem)] p-[5%] px-[3%] gap-2.5 lg:gap-0 flex flex-col justify-center lg:justify-between h-[100%]">
            {" "}
            <span>
              Ascendia Rise est actuellement en cours de développement. En vous
              préinscrivant dès aujourd’hui, vous serez parmi les premiers à
              recevoir les actualités, annonces importantes, aperçus exclusifs
              et informations concernant l’avancement du projet.
            </span>
            <span>
              Les joueurs préinscrits bénéficieront également d’une récompense
              exclusive lors du lancement officiel du jeu, en remerciement de
              leur soutien durant le développement.
            </span>
          </div>
        </div>

        {/*inscerption form */}
        <div className=" w-[90dvw] md:w-[55dvw] lg:w-[45dvw] xl:w-[35dvw] shrink-0 flex text-black gap-5  justify-center items-center flex-col my-auto h-[60dvh] md:h-[70%] lg:h-[80%] bg-white">
          <InscriptionForm
            setConfirmed={setInscriptionConfirmed}
            confirmed={inscriptionConfirmed}
          />
          <InscriptionConfirmed confirmed={inscriptionConfirmed} />
        </div>
      </div>
    </div>
  );
}

function InscriptionForm({ confirmed, setConfirmed }) {
  const [formData, setFormData] = useState({ email: "", name: "" });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handelSubmit = () => {
    if (!formData.email || !formData.name || !acceptTerms) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 3000); // Wait 2 seconds
  };

  if (confirmed) return null;

  return (
    <div className="flex justify-start flex-col gap-[7%] items-center w-[95%] h-[55dvh] md:h-[80%]">
      {" "}
      <span className="flex flex-col justify-center gap-2 w-full items-center">
        <span className="font-serif72 font-semibold text-[clamp(1rem,2vw,1.8rem)] ">
          Rejoignez les premiers explorateurs
        </span>
        <span className=" text-center w-[85%] text-[#403E37] text-[clamp(0.4rem,2vw,0.65rem)] lg:text-[clamp(0.8rem,5vw,0.8rem)]">
          Préinscrivez-vous pour suivre le développement du jeu et recevoir une
          récompense exclusive lors du lancement.
        </span>
      </span>
      <Input
        type={"text"}
        field={"name"}
        placeholder={"Votre nom"}
        setFormData={setFormData}
        formData={formData}
        label={"Nom d’aventurier"}
      />
      <Input
        type="email"
        field={"email"}
        placeholder={"vous@exemple.com"}
        setFormData={setFormData}
        formData={formData}
        label={"Adresse e-mail"}
      />
      <div className=" w-[90%] flex flex-row items-center gap-2.5 justify-start h-[10%] ">
        <button
          onClick={() => {
            setAcceptTerms(!acceptTerms);
          }}
          className="relative cursor-pointer shrink-0 w-4 lg:w-5 aspect-square border-2 border-primary-light"
        >
          <div
            className={`absolute inset-0 m-auto w-2 lg:w-3 shrink-0 aspect-square ${acceptTerms ? "opacity-100" : "opacity-0"} bg-primary-light`}
          />
        </button>
        <span className=" text-[clamp(0.5rem,2vw,0.7rem)]">
          J’accepte de recevoir des actualitéss concernant le développement
          d’Ascendia Rise. Je pourrai me désinscrire à tout moment.
        </span>
      </div>
      <button
        disabled={
          loading ||
          !formData.email.trim() ||
          !formData.name.trim() ||
          !acceptTerms
        }
        onClick={handelSubmit}
        className="relative w-[50%] lg:w-[40%] h-[6.5dvh] shrink-0 text-[clamp(0.6rem,1vw,0.7rem)] text-center items-center justify-center flex border border-white/30 outline-2 outline-primary cursor-pointer disabled:cursor-not-allowed overflow-hidden disabled:opacity-70 duration-500 px-0 py-0 bg-primary"
      >
        <span
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-90 outline-2 outline-primary-light bg-[linear-gradient(90deg,#B39D72_0%,#F3D69C_44%,#D9BF8C_68%,#E5CA95_91%)] ${acceptTerms ? "flex" : "hidden"}`}
        />

        <span className="relative z-10 pointer-events-none text-white font-medium">
          PRÉ-INSCRIPTION
        </span>
      </button>
    </div>
  );
}

function InscriptionConfirmed({ confirmed }) {
  const [formData, setFormData] = useState({ email: "", name: "" });
  const [acceptTerms, setAcceptTerms] = useState(false);

  if (!confirmed) return null;

  return (
    <div className="flex justify-start flex-col gap-[7%] items-center w-[95%] h-[80%]">
      {" "}
      <span className="font-serif72 font-semibold text-[clamp(1rem,2vw,1.8rem)] ">
        Bienvenue dans l’aventure !
      </span>
      <span className=" text-center w-[85%] text-[#403E37] text-[clamp(0.8rem,5vw,0.8rem)]">
        Votre préinscription a été enregistrée. Nous vous tiendrons informé des
        prochaines étapes du développement d’Ascendia Rise.
      </span>
      <div className="w-full h-full justify-center flex  z-40  relative ">
        <Image
          src="/inscerption/valid.png"
          width={200}
          height={200}
          alt=""
          className="object-contain flex lg:hidden "
        />

        <Image
          src="/inscerption/valid.png"
          width={300}
          height={300}
          alt=""
          className="object-contain hidden lg:flex "
        />
      </div>
    </div>
  );
}

function Input({ placeholder, label, type, field, formData, setFormData }) {
  return (
    <div className="w-full group h-[19%] md:h-[17%] gap-2 justify-center items-center  flex flex-col">
      <label className="w-[85%] text-[clamp(0.7rem,1vw,0.9rem)] group-focus-within:text-primary transition-all duration-300 font-medium">
        {label}
      </label>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
          }));
        }}
        className=" p-3 bg-[#F9F8F8] text-black/70 focus:outline-2 text-[clamp(0.7rem,1vw,0.9rem)]   outline-primary-light outline-0 border-b-2 border-primary-light w-[85%] h-[60%] "
        type={type}
      />
    </div>
  );
}
