import { projectsData } from "@/constants";
import ParagraphHeading from "@/components/shared/ParagraphHeading";
import { BsArrowRightCircle } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";

export const Projects = () => {
  const projectsMapped = projectsData.map(
    ({ key, title, description, github, hosted }) => {
      return (
        <div key={key} className="p-6 rounded-lg border ">
          <h3 className="text-black text-gray-800 font-semibold text-[27px]">
            {title}
          </h3>
          <p className="text-[19px] text-gray-600 mb-[24px]">{description}</p>
          <div className="in-links flex gap-6 items-center ">
            {github && (
              <a
                href={github}
                target="_blank"
                className="underline text-green-600 flex gap-[6px] items-center"
              >
                <RxGithubLogo className="size-[18px] -rotate-[45deg]" />
                <span>Github</span>
              </a>
            )}
            <a
              href={hosted}
              target="_blank"
              className="underline text-green-600 flex gap-[6px] items-center"
            >
              <span>Demo</span>
              <BsArrowRightCircle className="size-[18px] -rotate-[45deg]" />
            </a>
          </div>
        </div>
      );
    }
  );

  return (
    <div id="projects" data-aos="zoom-out">
      <ParagraphHeading heading="Recent Works" />
      <div className="projects grid lg:grid-cols-2 gap-4">{projectsMapped}</div>
    </div>
  );
};
