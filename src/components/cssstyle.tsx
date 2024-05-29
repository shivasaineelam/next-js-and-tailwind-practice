type cssStyle = {
  styles: React.CSSProperties;
};
export default function CssProp(props: cssStyle) {
  return <h1 style={props.styles}>hello world</h1>;
}
