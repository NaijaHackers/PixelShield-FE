import { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import Container from "@components/Container";
import HomeLayout from "@resources/layouts/Home";
import useStore, { ALLOWED_IMAGE_EXTENSIONS } from "@/hooks/useStore";

const UploadPage = () => {

    const addUploadedFiles = useStore(state => state.addUploadedFiles)
    const uploadedFiles = useStore(state => state.uploadedFiles)

    const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
        console.log("Accepted files:", acceptedFiles);
        console.log("Rejected files:", fileRejections);
        addUploadedFiles(acceptedFiles)
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { image: ALLOWED_IMAGE_EXTENSIONS }, // Accept only image files
    });

    return (
        <HomeLayout>
            <Container className=" p-5 flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  min-h-full">
                    <div className="col-span-1 flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <span className="">Upload Images</span>
                        </div>

                        {/* Drag and drop area */}
                        <div
                            {...getRootProps()}
                            className="rounded-xl flex justify-center items-center bg-(--secondary-blue) flex-grow cursor-pointer border-2 border-dashed border-gray-400 p-4"
                        >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p className="flex flex-col justify-center items-center text-center">
                                    Drop the images here...
                                </p>
                            ) : (
                                <p className="flex flex-col justify-center items-center text-center gap-3">
                                    Drag & drop your image,<br />
                                    <strong>OR</strong>
                                    <span className="text-(--primary-sky)">browse your PC</span>
                                    <span className="text-[#8E9AAB]">
                                        Supports: <small className="uppercase">{ALLOWED_IMAGE_EXTENSIONS.join(', ')}</small>
                                    </span>
                                </p>
                            )}
                        </div>

                        <div className="">
                            HELLO WORLD {uploadedFiles.length}
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 bg-(--secondary-blue)">
                        sd
                    </div>
                </div>
            </Container>
        </HomeLayout>
    );
};

export default UploadPage;