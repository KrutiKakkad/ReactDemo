import { isPropertySignature } from "typescript"

export const Currency=(props:any)=>{

    return (
        <div>
            {props.value} {props.symbol}
        </div>
    )
}