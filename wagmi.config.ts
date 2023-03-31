import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import GeneralDistributionAgreementV1Build from "./abis/GeneralDistributionAgreementV1.json";
import SuperTokenBuild from "./abis/SuperToken.json";
import SuperfluidBuild from "./abis/Superfluid.json";
import SETHProxyBuild from "./abis/SETHProxy.json";
import SuperTokenPoolBuild from "./abis/SuperTokenPool.json";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    { name: "GDAv1", abi: GeneralDistributionAgreementV1Build.abi },
    { name: "SuperToken", abi: SuperTokenBuild.abi },
    { name: "Superfluid", abi: SuperfluidBuild.abi },
    { name: "SETHProxy", abi: SETHProxyBuild.abi },
    { name: "SuperTokenPool", abi: SuperTokenPoolBuild.abi },
  ],
  plugins: [react()],
});
