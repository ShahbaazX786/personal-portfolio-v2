import { cliCommands } from "@/lib/constants/cliConstants";
import CustomCLI from "../customized/customCLI";
import WindowWrapper from "../wrappers/WindowWrapper";
import WindowControls from "./WindowControls";

const CommandCLI = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target={"terminal"} />
        <h2>Command Line Interface</h2>
      </div>

      <section tabIndex={1}>
        <CustomCLI
          welcomeMessage="Welcome Visitor...  use command 'help' to find more"
          prompt=">>> trav@mac:"
          commands={cliCommands}
        />
      </section>
    </>
  );
};

const CommandCLIWindow = WindowWrapper(CommandCLI, "terminal");

export default CommandCLIWindow;
