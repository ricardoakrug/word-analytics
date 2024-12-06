import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warning, setWarning] = useState({ show: false, message: "" });

  function handleChange(event) {
    let newText = event.target.value;
    let warningMessage = "";

    // Prevent XSS (e.g., script tags)
    if (/<\/?[a-z][\s\S]*>/i.test(newText)) {
      warningMessage = "HTML tags are not allowed.";
      newText = newText.replace(/<\/?[a-z][\s\S]*>/gi, "");
    }
    // Block SQL-like patterns
    else if (
      /(\bSELECT\b|\bDROP\b|\bINSERT\b|\bDELETE\b|\bUPDATE\b)/i.test(newText)
    ) {
      warningMessage = "SQL-like patterns are not allowed.";
      newText = newText.replace(
        /(\bSELECT\b|\bDROP\b|\bINSERT\b|\bDELETE\b|\bUPDATE\b)/gi,
        ""
      );
    }
    // Disallow dangerous JavaScript events and attributes
    else if (/\bon\w+=/i.test(newText) || /javascript:/i.test(newText)) {
      warningMessage = "JavaScript attributes or URLs are not allowed.";
      newText = newText.replace(/\bon\w+=/gi, "").replace(/javascript:/gi, "");
    }

    // Update the warning state
    if (warningMessage) {
      setWarning({ show: true, message: warningMessage });
    } else {
      setWarning({ show: false, message: "" });
    }

    setText(newText);
  }

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      ></textarea>
      {warning.show ? <Warning message={warning.message} /> : null}
    </div>
  );
}
