import Button from "components/buttons/Button";
import Section from "components/layouts/Section";
import H1 from "components/typography/H1";
import P from "components/typography/P";

import keyboardMobile from "/mobile/image-keyboard.jpg";
import keyboardTablet from "/tablet/image-keyboard.jpg";
import keyboardDesktop from "/desktop/image-keyboard.jpg";

export default function PageIntroSection() {
  return (
    <Section className="mb-6 md:mb-10 lg:mb-6 md:flex md:items-center md:gap-16 md:h-[425px] max-lg:pr-0 max-lg:overflow-hidden">
      <div className="px-6 flex flex-col gap-8 mb-8 md:px-0 md:mb-0">
        <H1>Typemaster Keyboard</H1>
        <P>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </P>
        <div className="flex">
          <Button className="bg-darkorange text-white hover:bg-lightorange">
            PRE-ORDER NOW
          </Button>
          <Button className="bg-transparent text-lightgray hover:text-darkblue">
            RELEASE ON 5/27
          </Button>
        </div>
      </div>
      <picture className="pl-6 inline-block h-[331px] md:pl-0 md:h-full">
        <source srcSet={keyboardDesktop} media="(min-width: 90rem)" width="1080" height="960" />
        <source srcSet={keyboardTablet} media="(min-width: 48rem)" width="956" height="850" />
        <img className="rounded-l-2xl h-full max-w-fit sm:rounded-2xl lg:rounded-[20px]" src={keyboardMobile} alt="keyboard" width="744" height="662" 
         />
        </picture>
    </Section>
  );
}
