import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Section07Audience,
  Section08Testimonials,
  Section09PricingTrust,
  Section10FaqCta,
  SiteFooter,
} from "../components/landing/landing-bottom-sections";
import {
  Section01Hero,
  Section02Logos,
  Section03SingleFlow,
  Section04Process,
  Section04Why,
  Section05Opportunities,
  Section06Automation,
  LandingPage,
} from "../components/landing/landing-sections";

const meta = {
  title: "Landing/CarPulse",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Page: Story = {
  render: () => <LandingPage />,
};

export const S01Hero: Story = {
  render: () => <Section01Hero />,
};

export const S02Logos: Story = {
  render: () => <Section02Logos />,
};

export const S03SingleFlow: Story = {
  render: () => <Section03SingleFlow />,
};

export const S04Why: Story = {
  render: () => <Section04Why />,
};

export const S04Process: Story = {
  render: () => <Section04Process />,
};

export const S05Opportunities: Story = {
  render: () => <Section05Opportunities />,
};

export const S06Automation: Story = {
  render: () => <Section06Automation />,
};

export const S07Audience: Story = {
  render: () => <Section07Audience />,
};

export const S08Testimonials: Story = {
  render: () => <Section08Testimonials />,
};

export const S09PricingTrust: Story = {
  render: () => <Section09PricingTrust />,
};

export const S10FaqCta: Story = {
  render: () => <Section10FaqCta />,
};

export const Footer: Story = {
  render: () => <SiteFooter />,
};
