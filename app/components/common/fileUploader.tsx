import React, { ChangeEvent, useState } from 'react';
import {axiosFileInstance} from '../../api/apiClient';

interface FileUploaderProps {
  onUpload: (url: string) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onUpload }) => {
    const [file, setFile] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [status, setStatus] = useState<string>('');
    const [loadedBytes, setLoadedBytes] = useState<number>(0);
    const [totalBytes, setTotalBytes] = useState<number>(0);

    const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
          setStatus('Please upload an image file');
          return;
      }
        setFile(URL.createObjectURL(file));
        const formData = new FormData();
        formData.append("file", file);

        axiosFileInstance.post('files/upload', formData, {
          onUploadProgress: (progressEvent) => {
            const loaded = progressEvent.loaded;
            const total = progressEvent.total as number; // Add type assertion here
            setLoadedBytes(loaded);
            setTotalBytes(total); 
            const percent = (loaded / total) * 100;
            setUploadProgress(Math.round(percent));
            setStatus(Math.round(percent) + "% uploaded...");
          }
        })
        .then((response) => {
            setStatus("Upload successful!");
            setUploadProgress(100);
            onUpload(response.data.location);
            console.log(response.data);
        })
        .catch((error) => {
            setStatus("Upload failed!");
            console.error(error);
        });
    };

    return (
        <div className="file-uploader-container">
            <input type="file" name="file" onChange={uploadFile} />
            <label>
                File progress: <progress value={uploadProgress} max="100" />
            </label>
            <p>{status}</p>
            <p>uploaded {loadedBytes} bytes of {totalBytes}</p>
            {file && <img src={file} alt="Preview" style={{ width: "250px", height: "250px" }} />}
        </div>
    );
}

export default FileUploader;