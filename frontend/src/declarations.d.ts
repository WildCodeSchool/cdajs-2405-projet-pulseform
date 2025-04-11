// type declarations for other third party libraries that don't come with types

declare module "react-simple-flipclock" {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const FlipClock: React.ComponentType<any>;
  export default FlipClock;
}
