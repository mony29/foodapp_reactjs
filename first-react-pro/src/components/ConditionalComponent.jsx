import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponet() {
  const display = false;

  // Bad practice, one function should only one return
  //   if (display) {
  //     return <div>Display is true</div>;
  //   } else {
  //     return <div>Display is false</div>;
  //   }

  //   if (display) return <Code />;
  //   else return <Welcome />;

  // Good, only one return
  //   let msg;
  //   if (display) {
  //     msg = <h1>message 1</h1>;
  //   } else {
  //     msg = <h1>message 2</h1>;
  //   }
  //   return msg;

  // Better, Using Ternary condition
  //   return display ? <h1>Message 1</h1> : <h1>Message 2</h1>;
  return display ? <Welcome /> : <Code />;
}
