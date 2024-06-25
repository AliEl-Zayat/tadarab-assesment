import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  width?: string;
  height?: string;
  xSpacing?: string;
  ySpacing?: string;
  color?: string;
};

const Divider = ({
  width,
  height,
  color,
  xSpacing,
  ySpacing,
  ...rest
}: Props) => {
  return (
    <div
      className="divider"
      style={{
        width,
        height,
        margin: `${ySpacing} ${xSpacing}`,
        backgroundColor: color,
      }}
      {...rest}
    />
  );
};

export default Divider;
