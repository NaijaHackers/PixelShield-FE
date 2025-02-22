import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import Container from "@components/Container";
import HomeLayout from "@resources/layouts/Home";
import useStore, { ALLOWED_IMAGE_EXTENSIONS } from "@/hooks/useStore";
import AnimatedButton from "@components/AnimatedButton";
import ChevronLeft from "@components/ChevronLeft";
import { Link } from "react-router-dom";
import { ROUTES } from "@common/routes";
import useUploadStatus from "@/hooks/useUploadStatus";
import ProofProgress from "@components/ProofProgress";
import FlagBadge from "@components/FlagBadge";

const UploadPage = () => {

    const setUploadedFiles = useStore(state => state.setUploadedFiles)
    const uploadedFiles = useStore(state => state.uploadedFiles)
    const [showResult, setShowResult] = useState<boolean>(false)

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

    const style = {
        gap: 10,
        borderRadius: 12,
        borderWidth: 1,
        background: 'transparent',
        borderColor: 'var(--primary-sky)',
    };

    const createObjectURL = (file: File) => file ? URL.createObjectURL(file) : undefined
    const { uploadImage, status, messages, isLoading, progress } = useUploadStatus();

    const ImageverificationProgress = (
        <div className="flex flex-col text-center gap-4">
            <div className="max-w-[355px]">
                <ProofProgress progress={70} statusText="Generating ZK Proof" />
            </div>
            <div className="">
                <p className="text-[22.38px]">This would take approximately <span className="text-(--primary-sky)">20minutes</span></p>
                <p className="text-[22.38px]"> Image Verification complete </p>
            </div>
            <AnimatedButton
                onClick={() => setShowResult(true)}
                label="View results"
            />
        </div>
    )

    const ImageverificationResult = (
        <div className="flex flex-col text-center gap-4">
            <h3 className="text-[20px] w-full text-left">
                Verification Result
            </h3>
            <div className="bg-(--primary-blue) flex flex-col pt-4 rounded-[12px] overflow-hidden w-[602px] max-w-full">
                <div className="px-4 flex items-center flex-grow justify-center w-full max-h-[408px]">
                    <img src={createObjectURL(uploadedFiles[0])} className="w-full object-contain max-h-[408px]" />
                </div>
                <div className="flex items-center gap-4 backdrop-blur-[110.3px] bg-[#DBEFDC4D]">
                    <FlagBadge type="safe" />
                    <p className="text-sx">
                        HELLO WOLRD
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 ">
                <AnimatedButton
                    label="Report Suspicious Image"
                    style={{ borderRadius: 12 }}
                />
                <AnimatedButton
                    style={style}
                    label="Learn More"
                />
            </div>
        </div>
    )

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
                                    <AnimatedButton
                                        onClick={() => uploadImage(uploadedFiles[0])}
                                        isLoading={isLoading}
                                        loadingLabel={'Uploading...'}
                                    >
                                        Upload
                                    </AnimatedButton>
                                </div>
                            </div> : null
                        }
                    </div>

                    {/*  */}

                    <div className="col-span-1 lg:col-span-2 bg-(--secondary-blue)">
                        <div className="flex w-full h-full text-center justify-center items-center">
                            {!uploadedFiles?.length ? (
                                <p className="text-[25px] max-w-[341px]">
                                    <span className="text-(--primary-sky)">Upload your image</span> to start
                                    verification
                                </p>
                            ) : (showResult ? ImageverificationResult : ImageverificationProgress)
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </HomeLayout>
    );
};

export default UploadPage;