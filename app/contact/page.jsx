"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";
import emailjs from "@emailjs/browser";

export default function Inscription() {
  const { setCurrentNav, setCurrentSubNav, language } = useMainContext();
  const [inscriptionConfirmed, setInscriptionConfirmed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setCurrentNav("inscription");
    setCurrentSubNav("");
  }, []);

  return (
    <div className="flex flex-col  bg-black gap-0 bg-no-repeat overflow-hidden bg-cover bg-center relative w-screen h-dvh">
      {/*bg image */}

      <div className=" absolute scale-100 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-[100%] h-[100%]">
        <div className="absolute h-dvh w-dvw inset-0 z-10">
          <Image
            src="/contact/Bg.svg"
            fill
            priority
            sizes="100vw"
            className="object-cover md:opacity-100 opacity-0"
            alt=""
          />

          <Image
            src="/contact/Bg.svg"
            fill
            priority
            sizes="100vw"
            className="object-cover md:opacity-0 opacity-100"
            alt=""
          />
        </div>
      </div>

      {/*content */}
      <div className=" relative w-full mt-auto gap-0 lg:gap-[1.5dvw]  justify-center items-center lg:items-end h-[90dvh] flex flex-col-reverse  lg:flex-row  z-30">
        <div className=" w-[90%] lg:w-2/5 xl:w-1/2 h-1/8 lg:h-1/3 flex justify-center lg:justify-center items-center flex-col" />

        {/*inscerption form */}
        <div className=" w-[90dvw] md:w-[55dvw] lg:w-[45dvw] xl:w-[35dvw] shrink-0 flex text-black gap-5  justify-center items-center flex-col my-auto h-[70dvh] md:h-[70%] lg:h-[80%] bg-white">
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
  const { language } = useMainContext();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const defaultFormData = { email: "", name: "", message: "" };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !formData.email.trim() ||
      !formData.name.trim() ||
      !formData.message.trim()
    ) {
      toast.error(t("inscription.form.errors.missingFields", language));

      return;
    }

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      );

      setSuccess(true);
      setFormData(defaultFormData);
      toast.success(
        "your message has been sent successfully \n  thank you for contacting us!.",
      );
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi.");
      setError("Une erreur est survenue lors de l'envoi.");
    } finally {
      setLoading(false);
    }
  };

  if (confirmed) return null;

  return (
    <div className="flex justify-start flex-col gap-[2%] items-center w-[95%] h-[85%]  md:h-[80%]">
      {" "}
      <span className="flex flex-col px-[6%] justify-center gap-2 w-full items-start">
        <span className="font-serif72 font-semibold text-[clamp(1rem,2vw,1.8rem)] ">
          Assistance & Contact
        </span>
        <span className=" text-start w-[85%] text-[#403E37] text-[clamp(0.4rem,2vw,0.65rem)] lg:text-[clamp(0.8rem,5vw,0.8rem)]">
          Comment pouvons-nous vous aider ?
        </span>
      </span>
      <Input
        type={"text"}
        field={"name"}
        placeholder={t("inscription.form.namePlaceholder", language)}
        setFormData={setFormData}
        formData={formData}
        label={"Nom"}
      />
      <Input
        type="email"
        field={"email"}
        placeholder={t("inscription.form.emailPlaceholder", language)}
        setFormData={setFormData}
        formData={formData}
        label={t("inscription.form.emailLabel", language)}
      />
      <TextArea
        type="message"
        field={"message"}
        placeholder={"Décrivez votre demande ou votre problème..."}
        setFormData={setFormData}
        formData={formData}
        label={"Message"}
      />
      {error && <p className="w-[85%] text-sm text-red-500">{error}</p>}
      <button
        disabled={
          loading ||
          !formData.email.trim() ||
          !formData.name.trim() ||
          !formData.message.trim()
        }
        onClick={sendEmail}
        className="relative w-[50%] lg:w-[40%] h-[6dvh] shrink-0 text-[clamp(0.8rem,1vw,0.8rem)] text-center items-center justify-center flex border border-white/30 outline-2 outline-primary cursor-pointer disabled:cursor-not-allowed overflow-hidden disabled:opacity-70 duration-500 px-0 py-0 bg-primary"
      >
        <span
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-90 outline-2 outline-primary-light bg-[linear-gradient(90deg,#B39D72_0%,#F3D69C_44%,#D9BF8C_68%,#E5CA95_91%)] ${acceptTerms ? "flex" : "hidden"}`}
        />

        <span className="relative z-10 pointer-events-none text-white font-medium">
          {loading
            ? t("inscription.form.submitBtnLoading", language)
            : "Envoyer"}
        </span>
      </button>
    </div>
  );
}

function InscriptionConfirmed({ confirmed }) {
  const { language } = useMainContext();
  const [formData, setFormData] = useState({ email: "", name: "" });
  const [acceptTerms, setAcceptTerms] = useState(false);

  if (!confirmed) return null;

  return (
    <div className="flex justify-start flex-col gap-[7%] items-center w-[95%] h-[80%]">
      {" "}
      <span className="font-serif72 font-semibold text-[clamp(1rem,2vw,1.8rem)] ">
        {t("inscription.confirmed.title", language)}
      </span>
      <span className=" text-center w-[85%] text-[#403E37] text-[clamp(0.8rem,5vw,0.8rem)]">
        {t("inscription.confirmed.description", language)}
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
        value={formData[field] || ""}
        className=" p-3 bg-[#F9F8F8] text-black/70 focus:outline-2 text-[clamp(0.7rem,1vw,0.9rem)]   outline-primary-light outline-0 border-b-2 border-primary-light w-[85%] h-[60%] "
        type={type}
      />
    </div>
  );
}

function TextArea({ placeholder, label, field, formData, setFormData }) {
  const TextriaRef = useRef(null);
  return (
    <div className="w-full group h-[30%] md:h-[35%] gap-2 justify-center items-center flex flex-col">
      <label className="w-[85%] text-[clamp(0.7rem,1vw,0.9rem)] group-focus-within:text-primary transition-all duration-300 font-medium">
        {label}
      </label>

      <div className="relative w-[85%] h-[70%]">
        <textarea
          ref={TextriaRef}
          placeholder={placeholder}
          value={formData[field] || ""}
          onChange={(e) => {
            const words = e.target.value.trim();

            if (words.length <= 500 || e.target.value === "") {
              setFormData((prev) => ({
                ...prev,
                [field]: e.target.value,
              }));
            }
          }}
          className="p-3 bg-[#F9F8F8] text-black/70 focus:outline-2
      text-[clamp(0.7rem,1vw,0.9rem)]
      outline-primary-light outline-0
      border-b-2 border-primary-light
      w-full h-full resize-none"
          rows={6}
        />

        <span className="absolute bottom-2 right-10  text-[clamp(0.7rem,1vw,0.9rem)]  text-xs text-primary ">
          {TextriaRef.current?.value.length} / 500
        </span>
      </div>
    </div>
  );
}
