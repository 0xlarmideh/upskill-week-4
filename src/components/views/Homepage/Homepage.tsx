import PageHeader from "../../shared/PageHeader";
import ParagraphText from "../../shared/ParagraphText";
import { Projects } from "./Projects";

const Homepage = () => {
  return (
    <div>
      <PageHeader
        title="Abdulhameed Busari"
        subtitle="Full-stack Developer (MERN)"
      />
      <ParagraphText
        text="I am skilled in using various technologies for frontend and backend
        development, always looking to improve and stay current with industry
        trends. I am excited to continue to push the boundaries of what is
        possible and create visually stunning designs and functional APIs and
        backend infrastructure."
      />
      <div className="w-full bg-gray-200 my-10 h-[1px]"></div>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default Homepage;
