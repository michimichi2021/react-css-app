import { CssModules } from "./components/CssModules.jsx";
import { InlineStyle } from "./components/InlineStyle.jsx";
import { StyledJsx } from "./components/StyledJsx.jsx";
import { StyledComponents } from "./components/StyledComponents.jsx";
import { Emotion } from "./components/Emotion.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
