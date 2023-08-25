import Panel from "../Panel/Panel";
import AsmrPanel from "../ASMR/AsmrPanel";
const DashBoard = () => {
  return (
    <div className="bg-[#021420] relative w-full h-screen flex items-center justify-center">
      {/**panel  */}
      <div className="w-1/2 h-1/3  ">
        <Panel></Panel>
      </div>
      {/*panel end */}

      {/* SoundPanel */}
      <AsmrPanel></AsmrPanel>
    </div>
  );
};

export default DashBoard;
