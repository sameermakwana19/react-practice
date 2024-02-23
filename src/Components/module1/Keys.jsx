import React from "react";

const data = [
  {
    id: "001",
    alt: "person with curly hair and a black T-shirt",
  },
  {
    id: "002",
    alt: "person wearing a hijab and glasses",
  },
  {
    id: "003",
    alt: "person with short hair wearing a blue hoodie",
  },
  {
    id: "004",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
];

const ImageIcon = ({ src, alt }) => {
  const style = {
    width: "200",
    height: "200",
    borderRadius: "50%",
    display: "inline-block",
    backgroundColor: "white",
    overflow: "hidden",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
  };

  const baseUrl = "https://sandpack-bundler.vercel.app/img/avatars/";

  return (
    <>
      <div style={style}>
        <img src={`${baseUrl}${src}.png`} style={imgStyle} alt={alt} />
      </div>
    </>
  );
};

const Keys = () => {
  return (
    <>
      {data.map((img) => (
        <ImageIcon key={img.id} src={img.id} alt={img.alt} />
      ))}
    </>
  );
};

export default Keys;
