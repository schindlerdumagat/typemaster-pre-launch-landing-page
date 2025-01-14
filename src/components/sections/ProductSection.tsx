import Section from "components/layouts/Section";
import H2 from "components/typography/H2";
import P from "components/typography/P";

import phoneKeyboardMobile from "/mobile/image-phone-and-keyboard.jpg";
import phoneKeyboardTablet from "/tablet/image-phone-and-keyboard.jpg";
import phoneKeyboardDesktop from "/desktop/image-phone-and-keyboard.jpg";

import glassKeyboardMobile from "/mobile/image-glass-and-keyboard.jpg";
import glassKeyboardTablet from "/tablet/image-glass-and-keyboard.jpg";
import glassKeyboardDesktop from "/desktop/image-glass-and-keyboard.jpg";

export default function ProductSection() {
  return (
    <Section className="mb-28 overflow-hidden lg:flex lg:justify-between items-center">
      <div className="flex mb-20 pr-6 h-40 sm:h-48 md:h-80 md:gap-8 lg:mb-0 lg:h-80 xl:h-[480px]">
        <div className="bg-darkorange rounded-r-3xl relative right-4 sm:right-6 md:static md:right-0 md:rounded-3xl">
          <picture>
            <source
              srcSet={phoneKeyboardDesktop}
              media="(min-width: 64rem)"
              width="510"
              height="960"
            />
            <source
              srcSet={phoneKeyboardTablet}
              media="(min-width: 48rem)"
              width="428"
              height="640"
            />
            <img
              className="mix-blend-multiply rounded-r-3xl h-full md:static md:rounded-3xl lg:max-w-fit"
              src={phoneKeyboardMobile}
              alt="phone and keyboard"
              width="258"
              height="386"
            />
          </picture>
        </div>
        <picture>
          <source
            srcSet={glassKeyboardDesktop}
            media="(min-width: 64rem)"
            width="887"
            height="960"
          />
          <source
            srcSet={glassKeyboardTablet}
            media="(min-width: 48rem)"
            width="888"
            height="640"
          />
          <img
            className="rounded-3xl h-full lg:max-w-fit"
            src={glassKeyboardMobile}
            alt="glass and keyboard"
            width="440"
            height="386"
          />
        </picture>
      </div>
      <div className="flex flex-col items-center gap-6 px-6 text-center md:flex-row md:text-left md:gap-20 md:px-0 lg:flex-col lg:gap-7 lg:items-start xl:w-64">
        <H2 className="w-min">mechanical wireless Keyboard</H2>
        <P>
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </P>
      </div>
    </Section>
  );
}
