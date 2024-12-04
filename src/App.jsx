import "./App.css";
import { LeftRail } from "./components/LeftRail";
import { RightRail } from "./components/RightRail";

export default function App() {
  return (
    <div className="relative isolate bg-gray-900 flex flex-col lg:flex-row lg:h-screen">
      <div className="relative px-6 py-12 lg:static lg:px-32 lg:py-48 flex-none w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-800">
        <LeftRail />
      </div>
      <div className="relative px-6 py-12 lg:px-16 lg:pt-48 lg:pb-12 flex-1 lg:overflow-y-scroll lg:h-screen">
        <RightRail />
      </div>
    </div>
  );
}
