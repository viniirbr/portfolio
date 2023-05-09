import React from "react";

// eslint-disable-next-line react/display-name
export const ButtonTest = React.forwardRef<HTMLAnchorElement>((props, ref) => (
  <a ref={ref}>Test</a>
));
