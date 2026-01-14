import { WindowKey } from "@/store/types/window.store.type";
import useWindowStore from "@/store/window.store";

const WindowControls = ({ target }: { target: WindowKey }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <button className="close" onClick={() => closeWindow(target)} />
      <button className="minimize" />
      <button className="maximize" />
    </div>
  );
};

export default WindowControls;
