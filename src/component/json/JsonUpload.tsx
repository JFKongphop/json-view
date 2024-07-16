import { JsonLine } from "@/type/type";
import { iterate } from "@/utils/json-render";
import { useState } from "react";

const JsonUpload = () => {
  const [fileContent, setFileContent] = useState<JsonLine[] | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        try {
          const jsonContent = JSON.parse(content);
          setFileContent(iterate(jsonContent));
        } catch (error) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid JSON file');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      {fileContent && (
        <div>
          <h3>File Content:</h3>
          {fileContent.map((line, index) => (
            <div 
              key={index} 
              style={{ 
                paddingLeft: `${line.indent * 20}px` 
              }}
            >
              {line.line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JsonUpload;