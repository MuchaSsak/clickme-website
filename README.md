# 🎈 ClickMe 🎈

### A react library full of highly customizable and animated buttons out of the box

![Preview of a few available animations](public/preview.gif)

## Quick installation and usage

- NPM installation

```bash
npm i react-clickme
```

- Importing in a React component

```javascript
import ClickMe from "./components/global/clickmeButton";

export default function App() {
  return <ClickMe>Example text</ClickMe>;
}
```

- Customization

```javascript
import ClickMe from "./components/global/clickmeButton";

const clickmeProps = {
  ariaLabel: "my-btn",
  style: { fontWeight: "500", padding: "0.5rem 1rem" },
  primaryBgColor: "#3D7DF6",
  primaryTextColor: "#fff",
  secondaryBgColor: "#000",
  hoverType: "slideToRight",
  idleType: "pulse",
};

export default function App() {
  return <ClickMe {...clickmeProps}>Example text</ClickMe>;
}
```

## Documentation

- [Docs on the official website](https://react-clickme.vercel.app/docs)
- [Installation](docs/installation.md)
- [Usage/Examples](docs/usage.md)

# To see all of the available custom options and presets, click <a href="https://react-clickme.vercel.app" target="_blank" rel="noreferrer">here</a>. 👈

<img width="300" src="public/logo.svg" alt="ClickMe logo" />
