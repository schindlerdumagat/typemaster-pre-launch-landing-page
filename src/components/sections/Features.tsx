import FeatureCard from "components/cards/FeatureCard";
import Section from "components/layouts/Section";

import IconBattery from "/shared/icon-battery.svg";
import IconBluetooth from "/shared/icon-bluetooth.svg";
import IconCompatible from "/shared/icon-compatible.svg";
import IconLight from "/shared/icon-light.svg";

export default function Features() {
  return (
    <Section className="px-6 flex flex-wrap gap-28 justify-center md:gap-14 md:justify-start lg:justify-between xl:gap-8">
      <FeatureCard
        title="HIGHLY COMPATIBLE"
        imageSrc={IconCompatible}
        imageAlt="display"
      >
        Easy to use and works well with all major computer brands, gaming
        consoles and mobile devices. Plug & play, no installation or driver
        needed.
      </FeatureCard>
      <FeatureCard
        title="WIRELESS WITH BLUETOOTH"
        imageSrc={IconBluetooth}
        imageAlt="bluetooth"
      >
        Powerful 2.4G RF technology allows you to connect the cordless keyboard
        from up to 30ft away. Simply plug the unifying receiver into your
        computer.
      </FeatureCard>
      <FeatureCard
        title="HIGH CAPACITY BATTERY"
        imageSrc={IconBattery}
        imageAlt="battery"
      >
        Equipped with a long-lasting built-in battery, you’ll never have to
        spend a dime on replaceable ones. Enjoy 40 hours of usage time between
        charges.
      </FeatureCard>
      <FeatureCard
        title="RGB BACKLIT MODES"
        imageSrc={IconLight}
        imageAlt="light"
      >
        Choose from 4 backlight brightness levels and adjustable breathing
        speed. Each key glows intensely in the dark and helps you type in low
        light conditions.
      </FeatureCard>
    </Section>
  );
}
