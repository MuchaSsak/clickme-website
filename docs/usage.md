## Usage/Examples

### Importing the component

```javascript
import ClickMe from "./components/global/clickmeButton";

export default function App() {
  return <ClickMe>Example text</ClickMe>;
}
```

### Passing in custom props along with regular ones for JSX button element

```javascript
import ClickMe from "react-clickme";

export default function App() {
  return (
    <ClickMe
      className="btn"
      hoverType="changeColor"
      aria-label="my-btn"
      onClick={() => alert("Hello")}
    >
      hello
    </ClickMe>
  );
}
```

### Destructuring props trick for cleaner JSX

```javascript
import ClickMe from "react-clickme";

const clickmeProps = {
  className: "btn",
  hoverType: "rectangleOut",
  ariaLabel: "my-btn",
  onClick: () => alert("Hello"),
};

export default function App() {
  return <ClickMe {...clickmeProps}>Example text</ClickMe>;
}
```

### Custom inline CSS styles

```javascript
import ClickMe from "react-clickme";

const clickmeStyles = {
  fontSize: "2rem",
  fontWeight: "500",
  padding: "1rem 0.5rem",
};

export default function App() {
  return <ClickMe style={clickmeStyles}>Example text</ClickMe>;
}
```

### You can using multiple animation types!

```javascript
import ClickMe from "react-clickme";

export default function App() {
  const clickmeProps = {
    hoverType: "changeColor",
    idleType: "pulse",
    clickType: "jello",
  };

  return <ClickMe {...clickmeProps}>Example text</ClickMe>;
}
```

### Example of consistant buttons across the entire app

```javascript
export const CLICKME_PRIMARY = {
  primaryBgColor: "#3D90F6",
  primaryTextColor: "#fff",

  idleType: "doublePulse",
};

export const CLICKME_SECONDARY = {
  primaryBgColor: "#F63D3D",
  primaryTextColor: "#fff",
  secondaryBgColor: "#000",
  // default secondaryTextColor is "#fff"

  hoverType: "changeColor",
  clickType: "rubberBand",

  onClick: () => alert("Cancelled!"),
};
```

```javascript
import ClickMe from "./components/global/clickmeButton";
import { CLICKME_PRIMARY, CLICKME_SECONDARY } from "./config";

export default function Modal() {
  return (
    <div>
      <h1>Are you sure?</h1>
      <ClickMe {...CLICKME_PRIMARY}>Yes</ClickMe>
      <ClickMe {...CLICKME_SECONDARY}>No</ClickMe>
    </div>
  );
}
```
