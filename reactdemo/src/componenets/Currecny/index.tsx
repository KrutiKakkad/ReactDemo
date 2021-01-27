import { Button } from "semantic-ui-react";

interface IProps {
  value: number;
  symbol: string;
}

export const Currency = (props: IProps) => {
  let fixedValue: string = props.value.toFixed(2);

  const childClick = () => {
    console.log("child click");
  };
  return (
    <div>
      {fixedValue} {props.symbol}
      <br></br>
      <hr></hr>
      <Button color={props.value > 50 ? "teal" : "orange"} onClick={childClick}>
        Recalc
      </Button>
    </div>
  );
};
