import { Box, Typography } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

type Props = {
  // links: string[];
  heading: string;
  action?: ReactNode;
};

const HeaderBreadcrumbs: FunctionComponent<Props> = ({
  // links,
  action,
  heading,
}) => {
  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" variantMapping={{ h4: "h1" }} gutterBottom>
            {heading}
          </Typography>
          {/* <Breadcrumbs links={links} {...other} /> */}
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>
    </Box>
  );
};

export default HeaderBreadcrumbs;
