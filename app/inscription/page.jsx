"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

const createPreInscription = async (data) => {
  try {
    const res = await fetch("https://api.ascendiarise.com/pre-inscription/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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
            src="/inscerption/Bg.png"
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
            <span>{t("inscription.info.paragraph1", language)}</span>
            <span>{t("inscription.info.paragraph2", language)}</span>
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
  const { language } = useMainContext();
  const [formData, setFormData] = useState({ email: "", name: "" });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.email.trim() || !acceptTerms) {
      toast.error(t("inscription.form.errors.missingFields", language));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error(t("inscription.form.errors.invalidEmail", language));
      return;
    }

    try {
      setLoading(true);

      await createPreInscription({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
      });

      toast.success(t("inscription.form.success", language));

      setConfirmed(true);
    } catch (err) {
      toast.error(
        err.message || t("inscription.form.errors.generic", language),
      );
    } finally {
      setLoading(false);
    }
  };

  if (confirmed) return null;

  return (
    <div className="flex justify-start flex-col gap-[7%] items-center w-[95%] h-[55dvh] md:h-[80%]">
      {" "}
      <span className="flex flex-col justify-center gap-2 w-full items-center">
        <span className="font-serif72 font-semibold text-[clamp(1rem,2vw,1.8rem)] ">
          {t("inscription.form.title", language)}
        </span>
        <span className=" text-center w-[85%] text-[#403E37] text-[clamp(0.4rem,2vw,0.65rem)] lg:text-[clamp(0.8rem,5vw,0.8rem)]">
          {t("inscription.form.subtitle", language)}
        </span>
      </span>
      <Input
        type={"text"}
        field={"name"}
        placeholder={t("inscription.form.namePlaceholder", language)}
        setFormData={setFormData}
        formData={formData}
        label={t("inscription.form.nameLabel", language)}
      />
      <Input
        type="email"
        field={"email"}
        placeholder={t("inscription.form.emailPlaceholder", language)}
        setFormData={setFormData}
        formData={formData}
        label={t("inscription.form.emailLabel", language)}
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
          {t("inscription.form.consentText", language)}
        </span>
      </div>
      {error && <p className="w-[85%] text-sm text-red-500">{error}</p>}
      <button
        disabled={
          loading ||
          !formData.email.trim() ||
          !formData.name.trim() ||
          !acceptTerms
        }
        onClick={handleSubmit}
        className="relative w-[50%] lg:w-[40%] h-[6.5dvh] shrink-0 text-[clamp(0.6rem,1vw,0.7rem)] text-center items-center justify-center flex border border-white/30 outline-2 outline-primary cursor-pointer disabled:cursor-not-allowed overflow-hidden disabled:opacity-70 duration-500 px-0 py-0 bg-primary"
      >
        <span
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-90 outline-2 outline-primary-light bg-[linear-gradient(90deg,#B39D72_0%,#F3D69C_44%,#D9BF8C_68%,#E5CA95_91%)] ${acceptTerms ? "flex" : "hidden"}`}
        />

        <span className="relative z-10 pointer-events-none text-white font-medium">
          {loading
            ? t("inscription.form.submitBtnLoading", language)
            : t("inscription.form.submitBtn", language)}
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
        className=" p-3 bg-[#F9F8F8] text-black/70 focus:outline-2 text-[clamp(0.7rem,1vw,0.9rem)]   outline-primary-light outline-0 border-b-2 border-primary-light w-[85%] h-[60%] "
        type={type}
      />
    </div>
  );
}
