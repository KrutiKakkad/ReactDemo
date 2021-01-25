interface IProps {
  value: number;
  symbol: string;
}

export const Currency = (props: IProps) => {
  let fixedValue: string = props.value.toFixed(2);
  return (
    <div>
      {fixedValue} {props.symbol}
    </div>
  );
};
