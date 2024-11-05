import React, { useState } from "react";
import './styles_json.css';
function JsonUpload() {

    const [json, setJson] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
        try {
            const json = JSON.parse(e.target.result);
            setJson(json);
            console.log("JSON data stored:", json);
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
        };
        reader.readAsText(file);
    };

    return (
        <div className="container_json">
        <h2>Upload a JSON file</h2>
        <input
            type="file"
            accept="application/json"
            onChange={handleFileChange}
        />
        {json && <pre>{JSON.stringify(json,null,2)}</pre>}
        </div>

    ); 
}

export default JsonUpload;