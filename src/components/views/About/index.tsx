import Flex from "@/components/shared/Flex";
import PageHeader from "@/components/shared/PageHeader";
import ParagraphHeading from "@/components/shared/ParagraphHeading";
import ParagraphText from "@/components/shared/ParagraphText";
import { skillSet } from "@/constants";

const About = () => {
  return (
    <div>
      <PageHeader
        title="Who am I?"
        subtitle="Developer inquisitive about technical details, Jack of all trades."
      />
      <div>
        <ParagraphText text="I'm a fullstack software engineer with a unique background in architectural design. This diverse experience allows me to approach software development with a creative and structured mindset. I specialize in building robust, scalable applications that bridge the gap between functionality and user experience. With a passion for continuous learning and problem-solving, I thrive in dynamic environments where I can contribute innovative solutions to complex challenges." />
      </div>
      <div className="mt-8">
        <ParagraphHeading heading="My daily life" />
        <ParagraphText text="My daily life is a blend of coding, designing, and continuous learning. I start my day with a good cup of coffee and a review of my current projects. Whether I’m debugging code, brainstorming with my team, or diving into new technologies, I strive to maintain a balance between productivity and creativity. " />
        <ParagraphText
          className="mt-2"
          text="In my free time, I enjoy watching podcasts, reading a variety of books, and playing or watching football. Staying active with these hobbies helps keep my mind fresh and inspired. Every day is an opportunity to learn, create, and make a meaningful impact through my work."
        />
      </div>
      <div className="w-full bg-gray-200 my-10 h-[1px]"></div>

      <div>
        <ParagraphHeading heading="Skills" />
        <Flex className="gap-4 flex-wrap">
          {skillSet.map((skill, i) => (
            <div className="border border-[2px] rounded-lg p-4" key={i}>
              <skill.icon className="size-[33px] text-gray-800" />
            </div>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default About;
