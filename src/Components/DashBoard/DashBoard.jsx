import Panel from "../Panel/Panel";
import AsmrPanel from "../ASMR/AsmrPanel";
const DashBoard = () => {
  return (
    <div className="bg-[#021420] relative">
      {/**panel  */}
      <div className="w-full flex items-center justify-center h-screen">
        <Panel></Panel>
      </div>
      {/*panel end */}

      {/* SoundPanel */}
      <AsmrPanel></AsmrPanel>
    </div>
  );
};

export default DashBoard;
