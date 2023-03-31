
import { ethers } from "ethers";
import { memo, ReactElement } from "react";
import useFlowingBalance from "../hooks/useFlowingBalance";

export interface FlowingBalanceProps {
    balance: string;
    /**
     * Timestamp in seconds.
     */
    balanceTimestamp: number;
    flowRate: string;
    disableRoundingIndicator?: boolean;
    tokenSymbol?: string;
}

export default memo(function FlowingBalance({
    balance,
    balanceTimestamp,
    flowRate,
}: FlowingBalanceProps): ReactElement {
    const { weiValue } = useFlowingBalance(balance, balanceTimestamp, flowRate);

    return (
        <>
            {ethers.utils.formatUnits(weiValue.toString())}
        </>

    );
});
