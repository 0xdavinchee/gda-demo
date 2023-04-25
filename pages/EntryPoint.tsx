import {
  Tabs,
  Tab,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import TabPanel from "../component/TabPanel";
import { useEffect, useState } from "react";
import {
  gdAv1ABI,
  superTokenPoolABI,
  useGdAv1CreatePool,
  useGdAv1IsPool,
  usePrepareGdAv1CreatePool,
  useSuperTokenPoolSuperToken,
} from "../src/generated";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { gdaContract } from "../src/constants";

enum TabType {
  CreatePool,
  SavePool,
  SelectPool,
}

const GDAv1Interface = new ethers.utils.Interface(gdAv1ABI);

interface EntryPointProps {
  existingPools: string[];
  currentPool: string;
  setCurrentPool: (pool: string) => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const EntryPoint = (props: EntryPointProps) => {
  const { address } = useAccount();
  const [tab, setTab] = useState(TabType.CreatePool);
  const [superTokenAddress, setSuperTokenAddress] = useState("");
  const [poolAddress, setPoolAddress] = useState("");

  const superTokenPoolContract = {
    superTokenPoolABI,
    address: poolAddress as any,
  };

  const { existingPools, currentPool, setCurrentPool } = props;

  const { data: isPool } = useGdAv1IsPool({
    ...gdaContract,
    args: [superTokenAddress as any, poolAddress as any],
    enabled: superTokenAddress !== "" && poolAddress !== "",
  });

  const { data: superToken } = useSuperTokenPoolSuperToken({
    ...superTokenPoolContract,
    enabled: ethers.utils.isAddress(poolAddress),
  });

  const { config: createPoolConfig } = usePrepareGdAv1CreatePool({
    ...gdaContract,
    args: [address as any, superTokenAddress as any],
  });
  const { writeAsync: createPoolWrite } = useGdAv1CreatePool(createPoolConfig);

  useEffect(() => {
    if (superToken) {
      setSuperTokenAddress(superToken);
    }
  }, [superToken]);

  const createPool = async () => {
    if (!createPoolWrite) return;
    try {
      const tx = await createPoolWrite();
      const receipt = await tx.wait();
      const poolCreatedEventTopic = ethers.utils.id(
        "PoolCreated(address,address,address)"
      );
      const poolCreatedLog = receipt.logs.find((x) =>
        x.topics.includes(poolCreatedEventTopic)
      );
      if (!poolCreatedLog)
        throw new Error("PoolCreated event not found in tx receipt");
      const decoded = GDAv1Interface.decodeEventLog(
        "PoolCreated(address,address,address)",
        poolCreatedLog.data
      );
      setCurrentPool(decoded.pool);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Tabs value={tab} onChange={(_x, v) => setTab(v)}>
        <Tab label="Create Pool" {...a11yProps(0)} />
        <Tab label="View Pool" {...a11yProps(1)} />
        <Tab label="Select Pool" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography style={{ marginTop: 15 }}>
            Enter a super token address:
          </Typography>
          <TextField
            style={{ marginBottom: 15, width: 420 }}
            id="standard-basic"
            label="SuperToken address"
            variant="standard"
            value={superTokenAddress}
            onChange={(e) => setSuperTokenAddress(e.target.value)}
          />
          <Button variant="contained" onClick={createPool}>
            Create Pool
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography style={{ marginTop: 15 }}>
            Enter a pool address:
          </Typography>
          <TextField
            style={{ marginBottom: 15, width: 420 }}
            error={isPool != null && isPool === false}
            // helperText="The entered address is not a valid pool."
            id="standard-basic"
            label="Pool address"
            variant="standard"
            value={poolAddress}
            onChange={(e) => setPoolAddress(e.target.value)}
          />
          <Button
            variant="contained"
            disabled={isPool === false}
            onClick={() => setCurrentPool(poolAddress)}
          >
            View Pool
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={tab} index={2}>
        {existingPools.length === 0 && (
          <Typography>You don't have any pools saved currently.</Typography>
        )}
        {existingPools.length > 0 && (
          <>
            <div>
              <Typography variant="body1">Select an existing pool:</Typography>
              <FormControl
                sx={{ m: 1, minWidth: 120, maxWidth: 460, maxHeight: 100 }}
              >
                <InputLabel shrink htmlFor="select-multiple-native">
                  Pools
                </InputLabel>
                <Select
                  native
                  value={currentPool}
                  // @ts-ignore Typings are not considering `native`
                  onChange={(e) => setCurrentPool(e.target.value)}
                  label="Native"
                  inputProps={{
                    id: "select-multiple-native",
                  }}
                >
                  <option key="" value="">
                    Select a pool
                  </option>
                  {existingPools.map((pool) => (
                    <option key={pool} value={pool}>
                      {pool}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </div>
          </>
        )}
      </TabPanel>
    </div>
  );
};

export default EntryPoint;
