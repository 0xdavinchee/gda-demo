import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import {
  superfluidABI,
  superTokenPoolABI,
  useGdAv1IsMemberConnected,
  usePrepareSuperfluidCallAgreement,
  usePrepareSuperTokenPoolClaimAll,
  usePrepareSuperTokenPoolUpdateMember,
  useSuperfluidCallAgreement,
  useSuperTokenPoolAdmin,
  useSuperTokenPoolClaimAll,
  useSuperTokenPoolSuperToken,
  useSuperTokenPoolUpdateMember,
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
import EntryPoint from "./EntryPoint";
import TabPanel from "../component/TabPanel";
import { gdaContract } from "../src/constants";
import PoolInfoCard from "../component/PoolInfo";

enum TabType {
  Admin,
  Distributor,
  Member,
}

const superfluidContract = {
  superfluidABI,
  address: "0x61df7e94415b632d191bcd2106645ce8aeb38e33" as any,
};
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
  const [existingPools, setExistingPools] = useState<string[]>([
    "0xfbd3363e2fc4db7ce069dd422a54cc5c5eaca9b7",
    "0xfajdj",
    "0xjllas",
  ]);
  const [memberAddress, setMemberAddress] = useState("");
  const [memberUnits, setMemberUnits] = useState("");
  const [distributionAmount, setDistributionAmount] = useState("");
  const [distributionFlowRate, setDistributionFlowRate] = useState("");

  // useEffect if existingPools.length > 0, setEntryPoint to SelectPool
  const [currentPool, setCurrentPool] = useState("");

  const poolContract = {
    superTokenPoolABI,
    address: currentPool as any,
  };

  // HOOKS
  // REACT HOOKS
  useEffect(() => {
    if (!existingPools.includes(currentPool)) {
      setExistingPools([...existingPools, currentPool]);
    }
  }, [currentPool, existingPools]);

  // READ HOOKS
  // SUPERTOKENPOOL
  const { data: poolAdmin, isFetchedAfterMount: poolAdminLoaded } =
    useSuperTokenPoolAdmin({
      ...poolContract,
      enabled: ethers.utils.isAddress(currentPool),
    });

  const {
    data: superTokenAddress,
    isFetchedAfterMount: superTokenAddressLoaded,
  } = useSuperTokenPoolSuperToken({
    ...poolContract,
    enabled: ethers.utils.isAddress(currentPool),
  });

  const isAdmin = useMemo(() => address === poolAdmin, [address, poolAdmin]);

  const {
    data: isMemberConnected,
    isFetchedAfterMount: isMemberConnectedLoaded,
  } = useGdAv1IsMemberConnected({
    ...gdaContract,
    args: [superTokenAddress as any, poolContract.address, address as any],
    watch: true,
    enabled: address != null,
  });

  // WRITE HOOKS
  // Call Agreement Write Hook

  // SUPERTOKEN POOL
  const { config: updateMemberConfig } = usePrepareSuperTokenPoolUpdateMember({
    ...poolContract,
    args: [memberAddress as any, BigNumber.from(memberUnits || "0")],
    enabled:
      currentPool !== "" &&
      ethers.utils.isAddress(memberAddress) &&
      memberUnits !== "",
  });
  const { writeAsync: updateMemberWrite } =
    useSuperTokenPoolUpdateMember(updateMemberConfig);

  const { config: claimAllConfig } = usePrepareSuperTokenPoolClaimAll({
    ...poolContract,
    enabled: currentPool !== "",
  });
  const { writeAsync: claimAllWrite } =
    useSuperTokenPoolClaimAll(claimAllConfig);

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
      !ethers.utils.isAddress(superTokenAddress as any) &&
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
      !ethers.utils.isAddress(superTokenAddress as any) &&
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
            existingPools={existingPools}
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
                  disabled={
                    !ethers.utils.isAddress(memberAddress) || memberUnits === ""
                  }
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
                  style={{ marginBottom: 10 }}
                  value={distributionFlowRate}
                  label="Requested Distribution Flow Rate"
                  onChange={(e) => setDistributionFlowRate(e.target.value)}
                />
                <Button
                  variant="contained"
                  disabled={
                    !ethers.utils.isAddress(memberAddress) || memberUnits === ""
                  }
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
                    <Button variant="contained" onClick={() => claimAllWrite}>
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
