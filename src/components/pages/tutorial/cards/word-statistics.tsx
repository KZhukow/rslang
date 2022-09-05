interface WordStatisticsProp{
  right: number,
  wrong: number,
}

export default function WordStatistics({ right, wrong }: WordStatisticsProp) {
  return (
    <div className="word-statistics-view">
      <div className="blur-block" />
      <p>{`${right} / ${wrong}`}</p>
    </div>
  );
}
