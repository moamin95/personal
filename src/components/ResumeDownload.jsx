import { MdOutlineFileDownload } from "react-icons/md";

const ResumeDownload = () => {
  return (
    <div className="mt-8">
      <div className="_subheading">
        <a
          href="/resume.docx"
          download="MoAminResume.docx"
          className="text-white flex flex-row gap-2 items-center"
        >
          <span>Download My Resume</span>
          <MdOutlineFileDownload className="animate-bounce w-6 h-6 lg:w-8 lg:h-8" />
        </a>
      </div>
    </div>
  );
};

export default ResumeDownload;
