type props = {
  message: string;
}

export function ErrorDiv({ message }: props) {
  return (
    <div className="errorForm hidden" id="divError">
      {message}
    </div>
  );
}

type propsTwo = {
  message: string;
}

export function ErrorDivEmail({ message }: propsTwo) {
  return (
    <div className="errorForm hidden" id="divErrorEmail">
      {message}
    </div>
  );
}
