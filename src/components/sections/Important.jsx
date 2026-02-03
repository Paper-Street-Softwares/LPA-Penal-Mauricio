import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import CardsImportants from "../cards/CardsImportants";
import content from "../../content/content";
import ButtonReflexo from "../../components/interactives/ButtonReflexo";
import { Phone } from "lucide-react";

function Important({ colorMode }) {
  const listCards = Object.values(content.texts.important.cards);

  let backgroundMode, text, textOpacity, textDestaque, cardBg, iconBg;
  switch (colorMode) {
    case "light":
      backgroundMode = "bg-terciary/60";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      iconBg = "bg-white text-primaryDark";

      break;
    case "dark":
      backgroundMode = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      iconBg = "bg-darkOpacity text-primaryLight";

      break;
    default:
      backgroundMode = "bg-secondary/60";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      iconBg = "bg-white text-primaryDark";
  }

  return (
    <SectionArea className={`${backgroundMode}`}>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle="atenção"
          title={content.texts.important.title}
          colorMode={colorMode}
        />
        <div className="grid gap-12 tablet1:grid-cols-2">
          {listCards.map((item) => (
            <CardsImportants title={item.title} paragraph={item.paragraph} />
          ))}
        </div>
        <p
          className={`flex justify-center font-secondFont text-center w-full my-12 ${textOpacity}`}
        >
          {content.texts.important.fraseObs}
        </p>

        <div className="flex flex-col items-start justify-center gap-4 mx-auto mt-6 w-fit">
          <ButtonReflexo
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
              </svg>
            }
            link={content.texts.links.ctaWhatsapp}
            label={content.texts.important.ctaButtonText}
            colorMode={colorMode}
            className=""
          />
          {/* <ButtonReflexo
            id="ligar"
            icon={<Phone width={20} />}
            link={`tel:${content.texts.infos.phone}`}
            label="Emergência? Ligue agora!"
            colorMode={colorMode}
            className="mx-auto text-white"
          /> */}
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Important;
