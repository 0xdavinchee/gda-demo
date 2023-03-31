import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import {
  gdAv1ABI,
  superfluidABI,
  superTokenABI,
  superTokenPoolABI,
  useGdAv1IsMemberConnected,
  usePrepareSuperfluidCallAgreement,
  useSuperfluidCallAgreement,
  useSuperTokenName,
  useSuperTokenPoolGetClaimableNow,
  useSuperTokenPoolGetDistributionFlowRate,
  useSuperTokenPoolGetMemberFlowRate,
  useSuperTokenPoolGetTotalUnits,
  useSuperTokenPoolGetUnits,
  useSuperTokenRealtimeBalanceOfNow,
  useSuperTokenSymbol,
} from "../src/generated";
import { BigNumber, ethers } from "ethers";
import { IGeneralDistributionAgreementV1__factory } from "../typechain-types";
import FlowingBalance from "../component/FlowingBalance";
import {
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { useMemo } from "react";

const superTokenContract = {
  superTokenABI,
  address: "0xD3912Ab317fCFCE4ee9B8B03FeC7da1A44feA760" as any,
};
const superfluidContract = {
  superfluidABI,
  address: "0x61df7e94415b632d191bcd2106645ce8aeb38e33" as any,
};
const gdaContract = {
  gdAv1ABI,
  address: "0xaAa60FbA7E682864213502028024749B44164CC1" as any,
};
const poolContract = {
  superTokenPoolABI,
  address: "0x7E3466bbcc8E055c4030Cb2616aD25DB30063E61" as any,
};

const GDA_INTERFACE =
  IGeneralDistributionAgreementV1__factory.createInterface();
const connectPoolCalldata = GDA_INTERFACE.encodeFunctionData(
  "connectPool",
  [poolContract.address, true, "0x"]
);
const disconnectPoolCalldata = GDA_INTERFACE.encodeFunctionData(
  "connectPool",
  [poolContract.address, false, "0x"]
);


const Home: NextPage = () => {
  const { address } = useAccount();

  // HOOKS
  // REACT HOOKS
  const currentTime = useMemo(() => {
    return Math.round(new Date().getTime() / 1000);
  }, []);

  // READ HOOKS
  // SUPERTOKEN
  const { data: realTimeBalanceVector, isFetchedAfterMount: balanceOfLoaded } =
    useSuperTokenRealtimeBalanceOfNow({
      ...superTokenContract,
      args: [address as any],
      enabled: address != null
    });
  const { data: superTokenName, isFetchedAfterMount: tokenNameLoaded } =
    useSuperTokenName({
      ...superTokenContract,
      enabled: address != null
    });
  const { data: superTokenSymbol, isFetchedAfterMount: tokenSymbolLoaded } =
    useSuperTokenSymbol({
      ...superTokenContract,
      enabled: address != null
    });

  const {
    data: poolMemberFlowRate,
    isFetchedAfterMount: poolMemberFlowRateLoaded,
  } = useSuperTokenPoolGetMemberFlowRate({
    ...poolContract,
    args: [address as any],
    watch: true,
    enabled: address != null
  });

  const { data: poolTotalUnits, isFetchedAfterMount: poolTotalUnitsLoaded } =
    useSuperTokenPoolGetTotalUnits({
      ...poolContract,
      enabled: address != null
    });

  const { data: poolMemberUnits, isFetchedAfterMount: poolMemberUnitsLoaded } =
    useSuperTokenPoolGetUnits({
      ...poolContract,
      args: [address as any],
      enabled: address != null
    });

  const {
    data: claimableBalanceData,
    isFetchedAfterMount: claimableBalanceLoaded,
  } = useSuperTokenPoolGetClaimableNow({
    ...poolContract,
    args: [address as any],
    enabled: address != null
  });

  const {
    data: isMemberConnected,
    isFetchedAfterMount: isMemberConnectedLoaded,
  } = useGdAv1IsMemberConnected({
    ...gdaContract,
    args: [poolContract.address, address as any],
    watch: true,
    enabled: address != null
  });

  const {
    data: poolDistributionFlowRate,
    isFetchedAfterMount: poolDistributionFlowRateLoaded,
  } = useSuperTokenPoolGetDistributionFlowRate({
    ...poolContract,
    watch: true,
    enabled: address != null
  });

  // WRITE HOOKS
  // Call Agreement Write Hook

  // SUPERFLUID
  const { config: connectPoolConfig } = usePrepareSuperfluidCallAgreement({
    ...superfluidContract,
    args: [gdaContract.address, connectPoolCalldata as any, "0x"],
  });
  const { config: disconnectPoolConfig } = usePrepareSuperfluidCallAgreement({
    ...superfluidContract,
    args: [gdaContract.address, disconnectPoolCalldata as any, "0x"],
  });

  const {
    writeAsync: connectPoolWrite,
  } = useSuperfluidCallAgreement(connectPoolConfig);
  const {
    writeAsync: disconnectPoolWrite,
  } = useSuperfluidCallAgreement(disconnectPoolConfig);

  const formatUnits = (value?: BigNumber) => {
    if (!value) return "0";
    return ethers.utils.formatEther(value);
  };

  const connectPool = async () => {
    if (!connectPoolWrite) return;
    try {
      await connectPoolWrite();
    } catch (err) {
      console.error(err);
    }
  };

  const disconnectPool = async () => {
    if (!disconnectPoolWrite) return;
    try {
      await disconnectPoolWrite();
    } catch (err) {
      console.error(err);
    }

  };

  return (
    <Paper>
      <Head>
        <title>GDA Prototype Demo</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Paper className={styles.main}>
        <ConnectButton />

        <Typography variant="h1" className={styles.title}>
          🌊 GDA Prototype Demo 🌊
        </Typography>

        <div>
          <Card elevation={3} style={{ marginBottom: 10 }}>
            <CardContent>
              <Typography variant="h4">SuperToken Info</Typography>
              <Divider />
              <Typography
                style={{ marginRight: 5, marginTop: 10, marginBottom: 5 }}
                variant="body1"
              >
                Address: {superTokenContract.address || "n/a"}
              </Typography>
              <Typography
                style={{ marginRight: 5, marginBottom: 5 }}
                variant="body1"
              >
                Name: {tokenNameLoaded && superTokenName || "n/a"}
              </Typography>
              <Typography
                style={{ marginRight: 5, marginBottom: 5 }}
                variant="body1"
              >
                Symbol: {tokenSymbolLoaded && superTokenSymbol || "n/a"}
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ marginRight: 5 }} variant="body1">
                  Balance:
                </Typography>
                {balanceOfLoaded &&
                  realTimeBalanceVector &&
                  poolMemberFlowRate && (
                    <FlowingBalance
                      balance={realTimeBalanceVector.availableBalance.toString()}
                      balanceTimestamp={realTimeBalanceVector.timestamp.toNumber()}
                      flowRate={
                        isMemberConnected ? poolMemberFlowRate.toString() : "0"
                      }
                    />
                  ) || "n/a"}
              </div>
            </CardContent>
          </Card>
          <Card elevation={3} style={{ marginBottom: 20 }}>
            <CardContent>
              <Typography variant="h4">Pool Info</Typography>
              <Divider />
              <Chip
                style={{ marginTop: 10, marginBottom: 10 }}
                variant="outlined"
                color={
                  isMemberConnectedLoaded && isMemberConnected
                    ? "success"
                    : "error"
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
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ marginRight: 5 }} variant="body1">
                  Claimable SuperToken Balance:{" "}
                </Typography>
                {claimableBalanceLoaded &&
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
                  ) || "n/a"}
              </div>
              <Typography sx={{ fontSize: 16 }}>
                Total Units:{" "}
                {poolTotalUnitsLoaded && poolTotalUnits ? poolTotalUnits.toString() : "0"}
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Distribution Flow Rate:{" "}
                {poolDistributionFlowRateLoaded
                  ? formatUnits(poolDistributionFlowRate)
                  : "0"}{" " + (tokenSymbolLoaded && superTokenSymbol ? superTokenSymbol : "")}
                / s
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Your Units:{" "}
                {poolMemberUnitsLoaded && poolMemberUnits ? poolMemberUnits.toString() : "0"}
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Your Flow Rate:{" "}
                {poolMemberFlowRateLoaded
                  ? formatUnits(poolMemberFlowRate)
                  : "0"}{" " + (tokenSymbolLoaded && superTokenSymbol ? superTokenSymbol : "")}
                / s
              </Typography>
            </CardContent>
          </Card>

          <div className={styles.buttonContainer}>
            <Button
              variant="contained"
              onClick={() => connectPool()}
              disabled={isMemberConnectedLoaded && isMemberConnected}
            >
              Connect to Pool
            </Button>
            {/* <Button
              color="error"
              variant="contained"
              disabled={isMemberConnectedLoaded && !isMemberConnected}
              onClick={() => disconnectPool()}
            >
              Disconnect from Pool
            </Button> */}
          </div>
        </div>
      </Paper>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          🌊
        </a>
      </footer>
    </Paper>
  );
};

export default Home;
