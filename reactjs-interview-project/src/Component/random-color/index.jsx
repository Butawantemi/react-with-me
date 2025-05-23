import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRgaColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgaColor
    else handleCreateRandomHexColor
  }, [typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        gap: "10px"
      }}>
      <button onClick={() => setTypeOfColor("hex")}>Creaate HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgaColor
        }
      >
        Generate Random Color
      </button>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "60px",
        marginTop: "50px",
        flexDirection: "column",
        gap: "20px"
      }}>
        <h3>{typeOfColor === "rgb"? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
