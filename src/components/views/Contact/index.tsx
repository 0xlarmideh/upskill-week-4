import Flex from "@/components/shared/Flex";
import PageHeader from "@/components/shared/PageHeader";
import ParagraphHeading from "@/components/shared/ParagraphHeading";
import ParagraphText from "@/components/shared/ParagraphText";
import { contactInfos } from "@/constants";
const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Contact"
        subtitle="Want to connect with me? Contact me!"
      />
      <ParagraphText text="If you have any questions, project inquiries, or just want to discuss the latest in software engineering, I’d love to hear from you! Feel free to reach out through any of the means below. Whether you're interested in collaborating on a project, need assistance with software development, or have feedback to share, I'm here to help. I look forward to connecting with you!" />

      <div className="w-full bg-gray-200 my-10 h-[1px]"></div>

      <div>
        <ParagraphHeading heading="Socials" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {contactInfos.map(({ Icon, label, url }, i) => (
            <a key={i} target="_blank" href={url}>
              <Flex className="rounded-[16px]  border p-4">
                <Icon className="size-[24px] text-green-900" />
                <p className="text-gray-800 tracking-tight font-[500]">
                  {label}
                </p>
              </Flex>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
