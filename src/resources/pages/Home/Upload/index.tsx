import { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import Container from "@components/Container";
import HomeLayout from "@resources/layouts/Home";
import useStore, { ALLOWED_IMAGE_EXTENSIONS } from "@/hooks/useStore";
import AnimatedButton from "@components/AnimatedButton";
import ChevronLeft from "@components/ChevronLeft";
import { Link } from "react-router-dom";
import { ROUTES } from "@common/routes";

const UploadPage = () => {

    const setUploadedFiles = useStore(state => state.setUploadedFiles)
    const uploadedFiles = useStore(state => state.uploadedFiles)

    const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
        console.log("Accepted files:", acceptedFiles);
        console.log("Rejected files:", fileRejections);
        setUploadedFiles(acceptedFiles)
    }, [setUploadedFiles]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { image: ALLOWED_IMAGE_EXTENSIONS }, // Accept only image files,
        maxFiles: 1
    });

    const createObjectURL = (file: File) => URL.createObjectURL(file)

    return (
        <HomeLayout>
            <Container className="flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  min-h-full">
                    <div className="col-span-1 flex flex-col gap-5 py-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[25px] font-bold">Upload Images</h3>
                            <Link to={ROUTES['LANDING_PAGE']['PATH']}>
                                <ChevronLeft />
                            </Link>
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

                        {uploadedFiles.length ?
                            <div className="w-full flex h-[81px] items-center p-4 bg-(--secondary-blue) rounded-xl">
                                <div className="flex h-full">
                                    <img src={createObjectURL(uploadedFiles[0])} alt="" />
                                </div>
                                <div className="flex flex-grow">
                                    <AnimatedButton >
                                        Upload
                                    </AnimatedButton>
                                </div>
                            </div> : null
                        }
                    </div>
                    <div className="col-span-1 lg:col-span-2 bg-(--secondary-blue)">
                        <div className="flex w-full h-full">
                            {uploadedFiles?.length ? (
                                <p className="m-auto text-[25px] max-w-[341px] text-center">
                                    <span className="text-(--primary-sky)">Upload your image</span> to start
                                    verification
                                </p>
                            ) : (
                                <div>HELLO WOL</div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </HomeLayout>
    );
};

export default UploadPage;