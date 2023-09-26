import React from "react";

interface Icontainer {
  style?: React.CSSProperties;
  title?: string;
  children: React.ReactNode;
}

export default function Container(props: Icontainer) {
  const { style, title, children } = props;
  return (
    <div style={{ ...style ,padding:40}} className="">
      <div style={{fontSize:18,fontWeight:'bold'}}>{title}</div>
      {children}
    </div>
  );
}
