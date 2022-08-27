export default function Procent(a: number, b: number): number {
  return (a === 0) ? 0 : Math.ceil((a / (a + b)) * 100);
}
