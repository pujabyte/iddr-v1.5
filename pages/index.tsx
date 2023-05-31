// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";

import { ScreenVariantProvider } from "../components/plasmic/iddr/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/iddr/PlasmicHomepage";
import { useRouter } from "next/router";

function Homepage() {
  
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage />
    </ph.PageParamsProvider>
  );
}

export default Homepage;
