export default function Procent(a: number, b: number): number {
  return (a === 0) ? 0 : Math.ceil((a / (a + b)) * 100);
}

export function formatDate(date: Date) {
  let dd: string | number = date.getDate();
  if (dd < 10) dd = `0${dd}`;

  let mm: string | number = date.getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;

  let yy: string | number = date.getFullYear() % 100;
  if (yy < 10) yy = `0${yy}`;

  return `${dd}.${mm}.${yy}`;
}
