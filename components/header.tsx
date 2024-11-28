import { Box, Breadcrumbs, Typography, Link as MLink } from "@mui/material";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

type Links = {
  label: string;
  href?: string;
};
type Props = {
  links: Links[];
  heading: string;
  action?: ReactNode;
};

const HeaderBreadcrumbs: FunctionComponent<Props> = ({
  links,
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
          <Breadcrumbs aria-label="breadcrumb">
            {links.map(({ href = "", label }, i) => {
              const isLast = i === links.length - 1;

              if (isLast) {
                return (
                  <Typography sx={{ color: "text.muted" }} key={label}>
                    {label}
                  </Typography>
                );
              }
              return (
                <MLink
                  key={href}
                  component={Link}
                  underline="hover"
                  color="inherit"
                  href={href}
                >
                  <Typography sx={{ color: "text.muted" }}>{label}</Typography>
                </MLink>
              );
            })}
          </Breadcrumbs>
          {/* <Breadcrumbs links={links} {...other} /> */}
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>
    </Box>
  );
};

export default HeaderBreadcrumbs;
