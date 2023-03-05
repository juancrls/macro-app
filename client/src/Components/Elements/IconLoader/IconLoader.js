import feather from "feather-icons";
import Parser from "../Parser/Parser";

export default function IconLoader({name, ...args}) {
  return (
    <Parser
      content={feather.icons[name].toSvg(
        args ? args : { width: 24, height: 24 }
      )}
    />
  );
}
