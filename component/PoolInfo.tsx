import { useMemo } from "react";
import { Card, CardContent, Typography, Divider, Chip } from "@mui/material";
import { formatUnits } from "ethers/lib/utils.js";
import FlowingBalance from "./FlowingBalance";
import { useAccount } from "wagmi";
import {
  superTokenABI,
  superfluidPoolABI,
  useGdAv1IsMemberConnected,
  useSuperTokenName,
  useSuperfluidPoolGetClaimableNow,
  useSuperfluidPoolGetConnectedFlowRate,
  useSuperfluidPoolGetMemberFlowRate,
  useSuperfluidPoolGetTotalUnits,
  useSuperfluidPoolGetUnits,
  useSuperTokenRealtimeBalanceOfNow,
  useSuperTokenSymbol,
  useSuperfluidPoolGetDisconnectedFlowRate,
} from "../src/generated";
import { gdaContract } from "../src/constants";
import { ethers } from "ethers";

interface PoolInfoProps {
  poolAddress: string;
  poolAdmin: string;
  superTokenAddress: string;
}

const PoolInfoCard = (props: PoolInfoProps) => {
  console.log(props)
  const { address } = useAccount();
  const { poolAddress, poolAdmin, superTokenAddress } = props;

  const poolContract = {
    superfluidPoolABI,
    address: poolAddress as any,
  };

  const isAdmin = useMemo(() => address === poolAdmin, [address, poolAdmin]);

  const hasValidSuperTokenAddress = useMemo(() => ethers.utils.isAddress(superTokenAddress), [superTokenAddress]);

  const hasValidPoolAddress = useMemo(() => ethers.utils.isAddress(poolAddress), [poolAddress]);

  // SUPERTOKEN
  const superTokenContract = {
    superTokenABI,
    address: superTokenAddress as any,
  };
  const { data: realTimeBalanceVector, isFetchedAfterMount: balanceOfLoaded } =
    useSuperTokenRealtimeBalanceOfNow({
      ...superTokenContract,
      args: [address as any],
      enabled: address != null && hasValidSuperTokenAddress,
    });

  const { data: superTokenName, isFetchedAfterMount: tokenNameLoaded } =
    useSuperTokenName({
      ...superTokenContract,
      enabled: address != null && hasValidSuperTokenAddress,
    });

  const {
    data: superTokenSymbol,
    isFetchedAfterMount: superTokenSymbolLoaded,
  } = useSuperTokenSymbol({
    ...superTokenContract,
    enabled: address != null && hasValidSuperTokenAddress,
  });

  // GDAv1
  const {
    data: isMemberConnected,
    isFetchedAfterMount: isMemberConnectedLoaded,
  } = useGdAv1IsMemberConnected({
    ...gdaContract,
    args: [superTokenAddress as any, poolContract.address, address as any],
    watch: true,
    enabled: address != null && hasValidSuperTokenAddress && hasValidPoolAddress,
  });

  // superfluidPool
  const {
    data: poolMemberFlowRate,
    isFetchedAfterMount: poolMemberFlowRateLoaded,
  } = useSuperfluidPoolGetMemberFlowRate({
    ...poolContract,
    args: [address as any],
    watch: true,
    enabled: address != null,
  });

  const { data: poolTotalUnits, isFetchedAfterMount: poolTotalUnitsLoaded } =
    useSuperfluidPoolGetTotalUnits({
      ...poolContract,
      enabled: address != null,
    });

  const { data: poolMemberUnits, isFetchedAfterMount: poolMemberUnitsLoaded } =
    useSuperfluidPoolGetUnits({
      ...poolContract,
      args: [address as any],
      enabled: address != null,
    });

  const {
    data: claimableBalanceData,
    isFetchedAfterMount: claimableBalanceLoaded,
  } = useSuperfluidPoolGetClaimableNow({
    ...poolContract,
    args: [address as any],
    enabled: address != null,
  });

  const {
    data: connectedFlowRate,
    isFetchedAfterMount: connectedFlowRateLoaded,
  } = useSuperfluidPoolGetConnectedFlowRate({
    ...poolContract,
    watch: true,
    enabled: address != null,
  });

  const {
    data: disconnectedFlowRate,
    isFetchedAfterMount: disconnectedFlowRateLoaded,
  } = useSuperfluidPoolGetDisconnectedFlowRate({
    ...poolContract,
    watch: true,
    enabled: address != null,
  });

  return (
    <Card elevation={3} style={{ marginTop: 50 }}>
      <CardContent>
        <Typography variant="h4">Pool Info</Typography>
        <Divider />
        <Chip
          style={{ marginTop: 10, marginBottom: 10 }}
          variant="outlined"
          color={
            isMemberConnectedLoaded && isMemberConnected ? "success" : "error"
          }
          label={
            isMemberConnectedLoaded && isMemberConnected
              ? "Connected"
              : "Disconnected"
          }
        />
        <Typography sx={{ fontSize: 16 }}>
          Address: <code>{poolContract.address}</code>
        </Typography>
        <Typography sx={{ fontSize: 16 }}>
          Admin: <code>{poolAdmin}</code>
          {isAdmin ? " (you)" : ""}
        </Typography>
        <Typography sx={{ fontSize: 16 }}>
          SuperToken:{" "}
          <code>
            {superTokenAddress} | {tokenNameLoaded && superTokenName ? superTokenName : ""} | {superTokenSymbol}
          </code>
        </Typography>
        <Typography sx={{ fontSize: 16 }}>
          Total Units:{" "}
          {poolTotalUnitsLoaded && poolTotalUnits
            ? poolTotalUnits.toString()
            : "0"}
        </Typography>
        <Typography sx={{ fontSize: 16 }}>
          Connected Flow Rate:{" "}
          {connectedFlowRateLoaded && connectedFlowRate
            ? formatUnits(connectedFlowRate)
            : "0"}
          {" " + superTokenSymbol} / s
        </Typography>
        <Typography sx={{ fontSize: 16 }}>
          Disconnected Flow Rate:{" "}
          {disconnectedFlowRateLoaded && disconnectedFlowRate
            ? formatUnits(disconnectedFlowRate)
            : "0"}
          {" " + superTokenSymbol} / s
        </Typography>
        <Typography sx={{ fontSize: 16 }}>
          Your Units:{" "}
          {poolMemberUnitsLoaded && poolMemberUnits
            ? poolMemberUnits.toString()
            : "0"}
        </Typography>
        <Typography sx={{ fontSize: 16 }}>
          Your Flow Rate:{" "}
          {poolMemberFlowRateLoaded && poolMemberFlowRate
            ? formatUnits(poolMemberFlowRate)
            : "0"}
          {" " + superTokenSymbol} / s
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography style={{ marginRight: 5 }} variant="body1">
            Claimable SuperToken Balance:{" "}
          </Typography>
          {(claimableBalanceLoaded &&
            claimableBalanceData &&
            poolMemberFlowRate && (
              <FlowingBalance
                balance={
                  isMemberConnected
                    ? "0"
                    : claimableBalanceData.claimableBalance.toString()
                }
                balanceTimestamp={claimableBalanceData.timestamp.toNumber()}
                flowRate={
                  isMemberConnected ? "0" : poolMemberFlowRate.toString()
                }
              />
            )) ||
            "n/a"}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography style={{ marginRight: 5 }} variant="body1">
            Balance:
          </Typography>
          {(balanceOfLoaded &&
            superTokenSymbolLoaded &&
            poolMemberFlowRate &&
            realTimeBalanceVector && (
              <FlowingBalance
                balance={realTimeBalanceVector.availableBalance.toString()}
                balanceTimestamp={realTimeBalanceVector.timestamp.toNumber()}
                flowRate={
                  isMemberConnected ? poolMemberFlowRate.toString() : "0"
                }
              />
            )) ||
            "n/a"}
        </div>
      </CardContent>
    </Card>
  );
};

export default PoolInfoCard;
