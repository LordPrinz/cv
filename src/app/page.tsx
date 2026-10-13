import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { LinkIcon } from "@/components/icons";
import Image from "next/image";
import { Suspense } from "react";
import profilePicture from "./opengraph-image.png";
import RodoParagraph from "@/components/rodo-paragraph";
import { getResumeData } from "@/data/resume-data";

const RESUME_DATA = getResumeData("en");

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="relative container mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:max-w-none print:overflow-visible print:p-0">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:max-w-none print:space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5 pr-4 md:pr-0">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="text-muted-foreground max-w-md text-sm text-pretty">
              {RESUME_DATA.about}
            </p>
            <p className="text-muted-foreground max-w-md items-center text-xs text-pretty">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="text-muted-foreground flex gap-x-1 pt-1 text-sm print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} target="_blank">
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="text-muted-foreground hidden flex-wrap gap-x-2 gap-y-0.5 pt-1 text-xs print:flex">
              {[
                RESUME_DATA.contact.email && {
                  href: `mailto:${RESUME_DATA.contact.email}`,
                  label: RESUME_DATA.contact.email,
                },
                RESUME_DATA.contact.tel && {
                  href: `tel:${RESUME_DATA.contact.tel}`,
                  label: RESUME_DATA.contact.tel,
                },
                { href: "https://cv.dzaj.de", label: "cv.dzaj.de" },
                ...RESUME_DATA.contact.social.map((social) => ({
                  href: social.url,
                  label: social.name,
                })),
              ]
                .filter((item) => !!item)
                .map((item, index) => (
                  <span key={item.href} className="inline-flex gap-x-2">
                    {index > 0 && <span aria-hidden>·</span>}
                    <a href={item.href} className="underline">
                      {item.label}
                    </a>
                  </span>
                ))}
            </div>
          </div>

          <Avatar className="size-28 md:size-32 print:size-24">
            <Image
              src={profilePicture}
              width={1312}
              height={1312}
              alt={RESUME_DATA.initials}
            />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        <Section>
          <h2 className="text-xl font-bold">
            About <span className="print:hidden">📝</span>
          </h2>
          <p className="text-muted-foreground text-justify text-sm text-pretty">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">
            Awards <span className="print:hidden">🏆</span>
          </h2>
          {RESUME_DATA.awards.map((award) => {
            return (
              <Card key={award.title}>
                <CardHeader>
                  <div className="after-dots relative ml-2.5 flex items-center justify-between gap-x-2 text-sm">
                    <h3 className="leading-none font-medium">
                      <a
                        className="flex items-center justify-start gap-1.5 underline print:no-underline"
                        target="_blank"
                        href={award.link}
                      >
                        {award.title}{" "}
                        <LinkIcon className="size-5 -translate-y-0.5 print:hidden" />
                      </a>
                    </h3>
                    <div className="text-right text-sm whitespace-nowrap text-gray-500 tabular-nums">
                      {award.date}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">
            Work Experience <span className="print:hidden">💼</span>
          </h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={`${work.company}-${work.start}`}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 leading-none font-semibold">
                      <a
                        className="hover:underline"
                        href={work.link}
                        target="_blank"
                      >
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-right text-sm text-gray-500 tabular-nums">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="text-sm leading-none">{work.title}</h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">
            Education <span className="print:hidden">📚</span>
          </h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="leading-none font-semibold">
                      {education.school}
                    </h3>
                    <div className="text-right text-sm text-gray-500 tabular-nums">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className="">
          <h2 className="text-xl font-bold">
            Skills <span className="print:hidden">🛠️</span>
          </h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section className="relative">
          <h2 className="text-xl font-bold">
            Certificates <span className="print:hidden">📜</span>
          </h2>
          {RESUME_DATA.certificates.map((certificate) => {
            return (
              <Card key={certificate.name}>
                <CardHeader>
                  <div className="after-dots relative ml-2.5 flex items-center justify-between gap-x-2 text-sm">
                    <h3 className="leading-none font-medium">
                      <a
                        target="_blank"
                        className="flex items-center justify-start gap-1.5 underline print:no-underline"
                        href={certificate.link}
                      >
                        {certificate.name}{" "}
                        <LinkIcon className="size-5 -translate-y-0.5 print:hidden" />
                      </a>
                    </h3>
                    <div className="text-right text-sm text-gray-500 tabular-nums">
                      {certificate.date}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">
            Languages <span className="print:hidden">🌍</span>
          </h2>
          <div className="ml-2.5 flex break-inside-avoid flex-col gap-2.5">
            {RESUME_DATA.languages.map((language) => {
              return (
                <Card key={language.name} className="after-dots relative">
                  <CardHeader>
                    <h3 className="inline-flex items-center gap-x-1.5 leading-none font-medium">
                      {language.name}
                      <span className="inline-flex gap-x-1">
                        <Badge
                          className="align-middle text-xs"
                          variant="outline"
                        >
                          {language.level}
                        </Badge>
                      </span>
                    </h3>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Section>
        <Section className="relative">
          <h2 className="text-xl font-bold">
            Interests <span className="print:hidden">🎮</span>
          </h2>
          {RESUME_DATA.interests.map((interest) => {
            return (
              <Card key={interest.name}>
                <CardHeader>
                  <h3 className="leading-none font-semibold">
                    {interest.link ? (
                      <a
                        target="_blank"
                        className="flex gap-1 underline print:no-underline"
                        href={interest.link}
                      >
                        {interest.name}
                        <LinkIcon className="size-5 -translate-y-0.5 print:hidden" />
                      </a>
                    ) : (
                      interest.name
                    )}
                  </h3>
                </CardHeader>
                <CardContent className="mt-2">
                  {interest.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="relative scroll-mb-16">
          <h2 className="text-xl font-bold">
            Projects <span className="print:hidden">💻</span>
          </h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:mx-0 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  extraLinks={
                    "extraLinks" in project ? project.extraLinks : undefined
                  }
                />
              );
            })}
          </div>
        </Section>
      </section>
      <Suspense>
        <RodoParagraph />
      </Suspense>
      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
