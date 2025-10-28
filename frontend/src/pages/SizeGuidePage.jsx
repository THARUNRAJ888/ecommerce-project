import React from "react";
import "./SizeGuide.css";

export default function SizeGuidePage() {
  const menSizes = [
    { size: "S", shoulder: 15.5, chest: 38, waist: 33, sleeve: 24, length: 27 },
    { size: "M", shoulder: 16.5, chest: 40, waist: 35, sleeve: 24.5, length: 27.5 },
    { size: "L", shoulder: 17.25, chest: 42, waist: 37, sleeve: 25, length: 28 },
    { size: "XL", shoulder: 18, chest: 44, waist: 39, sleeve: 25.5, length: 28.5 },
    { size: "XXL", shoulder: 18.75, chest: 46, waist: 41, sleeve: 26, length: 29 },
    { size: "XXXL", shoulder: 19.5, chest: 48, waist: 43, sleeve: 26.5, length: 29.5 },
  ];

  const womenSizes = [
    { size: "XS", bust: 32, waist: 26, hips: 34, sleeve: 22, length: 24 },
    { size: "S", bust: 34, waist: 28, hips: 36, sleeve: 22.5, length: 24.5 },
    { size: "M", bust: 36, waist: 30, hips: 38, sleeve: 23, length: 25 },
    { size: "L", bust: 38, waist: 32, hips: 40, sleeve: 23.5, length: 25.5 },
    { size: "XL", bust: 40, waist: 34, hips: 42, sleeve: 24, length: 26 },
    { size: "XXL", bust: 42, waist: 36, hips: 44, sleeve: 24.5, length: 26.5 },
  ];

  return (
    <div className="size-guide-page">
      <h2 className="page-title">Size Guide</h2>

      <section>
        <h3>Men’s Size Chart (Top)</h3>
        <p>Measurements in inches. For relaxed fit, add 1–2 inches to chest/waist.</p>
        <table className="size-guide-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>Shoulder</th>
              <th>Chest</th>
              <th>Waist</th>
              <th>Sleeve</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>
            {menSizes.map((row) => (
              <tr key={row.size}>
                <td>{row.size}</td>
                <td>{row.shoulder}</td>
                <td>{row.chest}</td>
                <td>{row.waist}</td>
                <td>{row.sleeve}</td>
                <td>{row.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h3>Women’s Size Chart (Top)</h3>
        <p>Measurements in inches. For comfort fit, add 1 inch to bust/waist.</p>
        <table className="size-guide-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>Bust</th>
              <th>Waist</th>
              <th>Hips</th>
              <th>Sleeve</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>
            {womenSizes.map((row) => (
              <tr key={row.size}>
                <td>{row.size}</td>
                <td>{row.bust}</td>
                <td>{row.waist}</td>
                <td>{row.hips}</td>
                <td>{row.sleeve}</td>
                <td>{row.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="size-guide-notes">
        <h4>Measurement Notes:</h4>
        <ul>
          <li>Shoulder: seam-to-seam across back (men).</li>
          <li>Bust: around fullest part of chest (women).</li>
          <li>Waist: natural waistline, relaxed.</li>
          <li>Sleeve: shoulder seam to cuff edge.</li>
          <li>Length: high shoulder to hem.</li>
        </ul>
      </div>
    </div>
  );
}
