import React from "react";
import imgIcon from "../../assets/imgs/icons/exclamation.webp";

function CardsImportants({ title, paragraph, colorMode }) {
  //precisa fazer colorMode
  let bgCircle, bgCircleHover;
  switch (colorMode) {
    case "light":
      bgCircle = "text-corTitulosPreto";
      bgCircleHover =
        "group-hover:bg-white group-hover:border-2 group-hover:border-black";

      break;
    case "dark":
      bgCircle = "text-corTitulosPreto";
      bgCircleHover =
        "group-hover:bg-white group-hover:border-2 group-hover:border-black";
      break;
    default:
      bgCircle = "text-corTitulosPreto";
      bgCircleHover =
        "group-hover:bg-white group-hover:border-2 group-hover:border-black";
  }
  return (
    <div className="relative h-full bg-white shadow-lg max-w-[400px] py-12 px-10 rounded-[18px] flex flex-col gap-4 font-secondFont group hover:bg-black hover:text-white transition-all duration-700">
      <h1 className="font-bold text-start text-corTitulosPreto group-hover:text-white">
        {title}
      </h1>
      <p className="text-center desktop1:text-start text-corOutrosTextosPreto group-hover:text-white/80">
        {paragraph}
      </p>

      <div className="absolute p-3 transition-all duration-700 border-2 border-white rounded-full bg-primaryLight group-hover:bg-white group-hover:border-2 group-hover:border-black -top-6 left-6">
        <img
          src={imgIcon}
          width={32}
          height={32}
          alt="Ícone de exclamação"
          className="w-8 transition-all duration-700 invert"
        />
      </div>
    </div>
  );
}

export default CardsImportants;
