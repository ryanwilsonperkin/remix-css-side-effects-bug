import "../styles.css";

// Decorator that does nothing
// Just here to show that the module fails when a decorator is present
function noopDecorator(target) {
  return target;
}

@noopDecorator
class Greeter {
  greet() {
    return "Hello World";
  }
}

export default function Index() {
  const greeter = new Greeter();
  return <h1 className="header">{greeter.greet()}</h1>;
}
