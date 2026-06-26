import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  Logo,
  LogoImageDesktop,
  LogoImageMobile,
} from "@/components/logo";

import { cn } from "@/lib/utils";
import Link from "next/link";


interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface FooterLogo {
  url: string;
  src: string;
  alt: string;
  title: string;
}

interface FooterBasicProps {
  logo?: FooterLogo;
  description?: string;
  sections?: FooterSection[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface Footer2Props extends FooterBasicProps {
  logoClassName?: string;
}
type Props = Partial<Footer2Props>;

const defaultProps: Footer2Props = {
  logo: {
    url: "/",
    src: "/images/logo/shadcnblocks-logo-word.svg",
    alt: "FoodHub Logo",
    title: "FoodHub",
  },

  description:
    "Discover delicious meals from trusted restaurants and enjoy fresh food delivered to your doorstep.",

  sections: [
    {
      title: "Explore",
      links: [
        { name: "Home", href: "/" },
        { name: "Meals", href: "/meals" },
        { name: "Categories", href: "#" },
        { name: "Restaurants", href: "#" },
      ],
    },
    {
      title: "Account",
      links: [
        { name: "Login", href: "/login" },
        { name: "Register", href: "/signup" },
        { name: "My Orders", href: "#" },
        { name: "Favorites", href: "#" },
      ],
    },
    {
      title: "Provider",
      links: [
        { name: "Become a Provider", href: "#" },
        { name: "Provider Dashboard", href: "#" },
        { name: "Manage Meals", href: "#" },
        { name: "Add Meal", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Help Center", href: "#" },
      ],
    },
  ],

  copyright: `© ${new Date().getFullYear()} FoodHub. All rights reserved.`,

  legalLinks: [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const MAX_SECTIONS = 4;

const Footer2 = (props: Props) => {
  const { logo, description, sections, copyright, legalLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center lg:justify-start">
                <Link href={logo?.url!}>
                  <img
                    src={logo?.src}
                    alt={logo?.alt}
                    title={logo?.title}
                    className="h-7 dark:invert"
                  />
                </Link>
              </div>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                {description}
              </p>
            </div>
            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {legalLinks?.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
