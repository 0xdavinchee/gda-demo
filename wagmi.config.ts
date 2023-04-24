import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import GeneralDistributionAgreementV1Build from "./abis/IGeneralDistributionAgreementV1.json";
import SuperTokenBuild from "./abis/ISuperToken.json";
import SuperfluidBuild from "./abis/ISuperfluid.json";
import SETHProxyBuild from "./abis/ISETH.json";
import SuperTokenPoolBuild from "./abis/ISuperTokenPool.json";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    { name: "GDAv1", abi: GeneralDistributionAgreementV1Build.abi as any },
    { name: "SuperToken", abi: SuperTokenBuild.abi as any },
    { name: "Superfluid", abi: SuperfluidBuild.abi as any },
    { name: "SETHProxy", abi: SETHProxyBuild.abi as any },
    { name: "SuperTokenPool", abi: SuperTokenPoolBuild.abi as any },
  ],
  plugins: [react()],
});
