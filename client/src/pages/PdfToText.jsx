import { useState } from "react";

const PdfToText = () => {
    const [cid, setCid] = useState("");
    const [text, setText] = useState("");

    const handleCidChange = (e) => {
        setCid(e.target.value);
    };

    const handleUrlUpload = async () => {
        if (!cid) {
            alert("Please enter a valid CID.");
            return;
        }
        const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch PDF");
            const arrayBuffer = await response.arrayBuffer();
            await extractTextFromPdf(arrayBuffer);

        } catch (error) {
            console.error("Error fetching PDF:", error);
        }
    };

    const extractTextFromPdf = async (arrayBuffer) => {
        try {
            const pdfjsLib = await import("pdfjs-dist/build/pdf");
            const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.mjs?url");
            
            // Set worker source using the resolved URL
            pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker.default;
    
            const loadingTask = pdfjsLib.getDocument(new Uint8Array(arrayBuffer));
            const pdf = await loadingTask.promise;
    
            let extractedText = "";
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                extractedText += textContent.items.map(item => item.str).join(" ");
            }
    
            setText(extractedText);
            console.log(extractedText);
        } catch (error) {
            console.error("Error parsing PDF:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>PDF to Text Converter</h2>
            <div>
                <label>
                    Enter CID:&nbsp;
                    <input 
                        type="text" 
                        value={cid} 
                        onChange={handleCidChange} 
                        placeholder="e.g., QmXg8NjXYZ5au8vttsxbEFvgx9gHwYNoB7QnFiHMbt6jVQ" 
                    />
                </label>
                &nbsp;
                <button onClick={handleUrlUpload}>Extract from URL</button>
            </div>
            <br />
            <textarea 
                value={text} 
                rows="10" 
                cols="60" 
                readOnly 
                placeholder="Extracted text will appear here..."
            />
        </div>
    );
};

export default PdfToText;