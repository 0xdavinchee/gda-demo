import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import {
  superfluidPoolABI,
  useGdAv1EstimateFlowDistributionActualFlowRate,
  useGdAv1IsMemberConnected,
  usePrepareSuperfluidCallAgreement,
  usePrepareSuperfluidPoolClaimAll,
  usePrepareSuperfluidPoolUpdateMember,
  useSuperfluidCallAgreement,
  useSuperfluidPoolAdmin,
  useSuperfluidPoolClaimAll,
  useSuperfluidPoolSuperToken,
  useSuperfluidPoolUpdateMember,
} from "../src/generated";
import { BigNumber, ethers } from "ethers";
import {
  Card,
  CardContent,
  Link,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Interface } from "@ethersproject/abi";
import EntryPoint from "../component/EntryPoint";
import TabPanel from "../component/TabPanel";
import { gdaContract, superfluidContract } from "../src/constants";
import PoolInfoCard from "../component/PoolInfo";

enum LocalStorage {
  ExistingPools = "existingPools",
}

enum TabType {
  Admin,
  Distributor,
  Member,
}

const GDA_INTERFACE = new Interface([
  "function connectPool(address,bytes calldata) returns(bytes memory)",
  "function disconnectPool(address,bytes calldata) returns(bytes memory)",
  "function distribute(address,address,address,uint256,bytes calldata) returns(bytes memory)",
  "function distributeFlow(address,address,address,uint256,bytes calldata) returns(bytes memory)",
]);

const tryCatchWrapper = async (func?: () => any) => {
  if (!func) return;
  try {
    await func();
  } catch (err) {
    console.error(err);
  }
};

const Home: NextPage = () => {
  const { address } = useAccount();
  const [tab, setTab] = useState(TabType.Distributor);
  const [existingPools, setExistingPools] = useState<string[]>([]);
  const [memberAddress, setMemberAddress] = useState("");
  const [memberUnits, setMemberUnits] = useState("");
  const [distributionAmount, setDistributionAmount] = useState("");
  const [distributionFlowRate, setDistributionFlowRate] = useState("");

  const [currentPool, setCurrentPool] = useState("");

  const poolContract = {
    superfluidPoolABI,
    address: currentPool as any,
  };

  const hasValidPoolAddress = useMemo(
    () => ethers.utils.isAddress(currentPool),
    [currentPool]
  );

  // HOOKS
  // REACT HOOKS
  useEffect(() => {
    const localStorageExistingPools = JSON.parse(
      localStorage.getItem(LocalStorage.ExistingPools) || "[]"
    );
    if (localStorageExistingPools.length > 0) {
      setExistingPools(localStorageExistingPools);
    }
  }, []);

  useEffect(() => {
    if (!existingPools.includes(currentPool) && currentPool !== "") {
      const newExistingPools = [...existingPools, currentPool];
      setExistingPools(newExistingPools);
      localStorage.setItem(
        LocalStorage.ExistingPools,
        JSON.stringify(newExistingPools)
      );
    }
  }, [currentPool, existingPools]);

  // READ HOOKS
  // SUPERfluidPOOL
  const { data: poolAdmin, isFetchedAfterMount: poolAdminLoaded } =
    useSuperfluidPoolAdmin({
      ...poolContract,
      enabled: hasValidPoolAddress,
    });

  const {
    data: superTokenAddress,
    isFetchedAfterMount: superTokenAddressLoaded,
  } = useSuperfluidPoolSuperToken({
    ...poolContract,
    enabled: hasValidPoolAddress,
  });

  const {
    data: isMemberConnected,
    isFetchedAfterMount: isMemberConnectedLoaded,
  } = useGdAv1IsMemberConnected({
    ...gdaContract,
    args: [superTokenAddress as any, poolContract.address, address as any],
    watch: true,
    enabled: address != null && hasValidPoolAddress,
  });

  const {
    data: flowDistributionActualFlowRate,
    isFetchedAfterMount: flowDistributionActualFlowRateLoaded,
  } = useGdAv1EstimateFlowDistributionActualFlowRate({
    ...gdaContract,
    args: [
      superTokenAddress as any,
      address as any,
      poolContract.address,
      ethers.BigNumber.from(distributionFlowRate || "0"),
    ],
    watch: true,
    enabled:
      superTokenAddress != null &&
      address != null &&
      hasValidPoolAddress &&
      distributionFlowRate !== "",
  });

  // WRITE HOOKS
  // Call Agreement Write Hook

  // SUPERTOKEN POOL
  const { config: updateMemberConfig } = usePrepareSuperfluidPoolUpdateMember({
    ...poolContract,
    args: [memberAddress as any, BigNumber.from(memberUnits || "0")],
    enabled:
      ethers.utils.isAddress(currentPool) &&
      ethers.utils.isAddress(memberAddress) &&
      memberUnits !== "",
  });
  const { writeAsync: updateMemberWrite } =
    useSuperfluidPoolUpdateMember(updateMemberConfig);

  const { config: claimAllConfig } = usePrepareSuperfluidPoolClaimAll({
    ...poolContract,
    enabled: currentPool !== "",
  });
  const { writeAsync: claimAllWrite } =
    useSuperfluidPoolClaimAll(claimAllConfig);

  // SUPERFLUID
  const { config: distributeConfig } = usePrepareSuperfluidCallAgreement({
    ...superfluidContract,
    args: [
      gdaContract.address,
      currentPool === "" || !superTokenAddress || !address
        ? "0x"
        : (GDA_INTERFACE.encodeFunctionData("distribute", [
            superTokenAddress,
            address,
            currentPool,
            distributionAmount == "" ? "0" : distributionAmount,
            "0x",
          ]) as any),
      "0x",
    ],
    enabled:
      currentPool !== "" &&
      ethers.utils.isAddress(superTokenAddress as any) &&
      distributionAmount !== "",
  });
  const { writeAsync: distributeWrite } =
    useSuperfluidCallAgreement(distributeConfig);
  const { config: distributeFlowConfig } = usePrepareSuperfluidCallAgreement({
    ...superfluidContract,
    args: [
      gdaContract.address,
      currentPool === "" || !superTokenAddress || !address
        ? "0x"
        : (GDA_INTERFACE.encodeFunctionData("distributeFlow", [
            superTokenAddress,
            address,
            currentPool,
            distributionFlowRate == "" ? "0" : distributionFlowRate,
            "0x",
          ]) as any),
      "0x",
    ],
    enabled:
      currentPool !== "" &&
      ethers.utils.isAddress(superTokenAddress as any) &&
      distributionFlowRate !== "",
  });
  const { writeAsync: distributeFlowWrite } =
    useSuperfluidCallAgreement(distributeFlowConfig);

  const { config: connectPoolConfig } = usePrepareSuperfluidCallAgreement({
    ...superfluidContract,
    args: [
      gdaContract.address,
      currentPool === ""
        ? "0x"
        : (GDA_INTERFACE.encodeFunctionData("connectPool", [
            currentPool,
            "0x",
          ]) as any),
      "0x",
    ],
    enabled: currentPool !== "",
  });
  const { writeAsync: connectPoolWrite } =
    useSuperfluidCallAgreement(connectPoolConfig);

  const { config: disconnectPoolConfig } = usePrepareSuperfluidCallAgreement({
    ...superfluidContract,
    args: [
      gdaContract.address,
      currentPool === ""
        ? "0x"
        : (GDA_INTERFACE.encodeFunctionData("disconnectPool", [
            currentPool,
            "0x",
          ]) as any),
      "0x",
    ],
    enabled: currentPool !== "",
  });
  const { writeAsync: disconnectPoolWrite } =
    useSuperfluidCallAgreement(disconnectPoolConfig);

  return (
    <Paper>
      <Head>
        <title>GDA Testnet Demo</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Paper className={styles.main}>
        <ConnectButton />
        {currentPool === "" && (
          <>
            <Typography variant="h1" className={styles.title}>
              GDA Testnet Demo
            </Typography>
            <Card elevation={3} style={{ maxWidth: "690px" }}>
              <CardContent>
                <Typography variant="subtitle1">
                  Welcome! This is a demo of the General Distribution Agreement.
                </Typography>
                <Typography variant="subtitle1">
                  Note that it is an alpha release in development and is not
                  ready for production use and it is possible you encounter some
                  issues. Please{" "}
                  <Link href="https://github.com/superfluid-finance/protocol-monorepo/issues/new?assignees=&labels=Type%3A+Bug&template=general-bug-report.md&title=%5BBUG%5D+">
                    submit any issues
                  </Link>{" "}
                  you find to our GitHub or hop into our Discord to report it.
                </Typography>
              </CardContent>
            </Card>
          </>
        )}

        {currentPool === "" && (
          <EntryPoint
            existingPools={existingPools || []}
            currentPool={currentPool}
            setCurrentPool={(x) => setCurrentPool(x)}
          />
        )}

        {currentPool !== "" && (
          <div>
            <PoolInfoCard
              poolAddress={currentPool}
              poolAdmin={poolAdminLoaded && poolAdmin ? poolAdmin : ""}
              superTokenAddress={
                superTokenAddressLoaded && superTokenAddress
                  ? superTokenAddress
                  : ""
              }
            />

            <Tabs value={tab} onChange={(_x, v) => setTab(v)}>
              <Tab label="Pool Admin" />
              <Tab label="Distributor" />
              <Tab label="Member" />
            </Tabs>

            <TabPanel value={tab} index={0}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1">Update Member Units</Typography>
                <TextField
                  style={{ marginTop: 10, marginBottom: 10 }}
                  value={memberAddress}
                  label="Member Address"
                  onChange={(e) => setMemberAddress(e.target.value)}
                />
                <TextField
                  style={{ marginBottom: 10 }}
                  value={memberUnits}
                  label="Member Units"
                  onChange={(e) => setMemberUnits(e.target.value)}
                />
                <Button
                  variant="contained"
                  disabled={
                    !ethers.utils.isAddress(memberAddress) || memberUnits === ""
                  }
                  onClick={() => tryCatchWrapper(updateMemberWrite)}
                >
                  Update Member Units
                </Button>
              </div>
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1">Instant Distribution</Typography>
                <TextField
                  style={{ marginTop: 10, marginBottom: 10 }}
                  value={distributionAmount}
                  label="Requested Distribution Amount"
                  onChange={(e) => setDistributionAmount(e.target.value)}
                />
                <Button
                  variant="contained"
                  disabled={Number(distributionAmount) === 0}
                  onClick={() => tryCatchWrapper(distributeWrite)}
                >
                  Distribute
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 25,
                }}
              >
                <Typography variant="body1">Flow Distribution</Typography>
                <TextField
                  style={{ marginBottom: 10, marginTop: 10 }}
                  value={distributionFlowRate}
                  label="Requested Distribution Flow Rate"
                  onChange={(e) => setDistributionFlowRate(e.target.value)}
                />
                <Typography variant="caption" style={{ marginBottom: 5}}>
                  Actual Distribution Flow Rate:{" "}
                  {flowDistributionActualFlowRateLoaded &&
                    flowDistributionActualFlowRate ?
                    flowDistributionActualFlowRate.toString() : "n/a"}
                </Typography>
                <Button
                  variant="contained"
                  disabled={Number(distributionFlowRate) === 0}
                  onClick={() => tryCatchWrapper(distributeFlowWrite)}
                >
                  Distribute Flow
                </Button>
              </div>
            </TabPanel>
            <TabPanel value={tab} index={2}>
              <div>
                {isMemberConnectedLoaded && !isMemberConnected && (
                  <Button
                    variant="contained"
                    onClick={() => tryCatchWrapper(connectPoolWrite)}
                    disabled={isMemberConnectedLoaded && isMemberConnected}
                  >
                    Connect to Pool
                  </Button>
                )}
                {isMemberConnectedLoaded && isMemberConnected && (
                  <>
                    <Typography variant="body1">Claim Units</Typography>
                    <Button
                      variant="contained"
                      onClick={() => tryCatchWrapper(claimAllWrite)}
                    >
                      Claim
                    </Button>
                    <Button
                      color="error"
                      variant="contained"
                      disabled={isMemberConnectedLoaded && !isMemberConnected}
                      onClick={() => tryCatchWrapper(disconnectPoolWrite)}
                    >
                      Disconnect from Pool
                    </Button>
                  </>
                )}
              </div>
            </TabPanel>
          </div>
        )}
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
