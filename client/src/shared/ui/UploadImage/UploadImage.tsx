import React, { useCallback, useEffect, useMemo, useState } from "react";

import memoize from "lodash/memoize";

import {
  FileChangeEvent,
  fileChangeEventCreator,
  InputFile,
  InputFileProps,
} from "../InputFile/InputFile";

export const IMG_TYPES = "image/jpeg,image/png,image/svg";
export const EXCEL_TYPES = ".xls, .xlsx";
export const PDF_TYPES = ".pdf";

export const Upload = React.forwardRef<HTMLInputElement, InputFileProps>(
  (props, ref) => {
    const {
      onChange,
      fileType,
      name,
      multiple,
      hasError,
      hideBtnOnLoad = false,
      value,
      label = "Upload",
      disabled,
      children,
    } = props;

    const [previewData, setPreviewData] = useState<File[]>(value || []);

    const generateFileUrl = useCallback(
      memoize((file: File) => URL.createObjectURL(file)),
      []
    );

    const urlArray = useMemo(() => {
      if (previewData && Array.isArray(previewData)) {
        return previewData.map(generateFileUrl);
      }
    }, [generateFileUrl, previewData]);

    const uploadFile = useCallback(
      (e: FileChangeEvent) => {
        if (onChange) onChange(e);

        setPreviewData(e.target.value);
      },
      [onChange]
    );

    useEffect(() => {
      if (!fileType) setPreviewData([]);
    }, [fileType]);

    useEffect(() => setPreviewData(value || []), [value]);

    // const removeFile = useCallback(
    //   (el: File): File => {
    //     if (onChange)
    //       setPreviewData((prev) => {
    //         const nextState = prev.filter((element) => element !== el);
    //         if (onChange) {
    //           onChange(fileChangeEventCreator(nextState, name));
    //         }
    //         return nextState;
    //       });
    //     return el;
    //   },
    //   [onChange, name]
    // );

    return (
      <div className="flex justify-center flex-row w-full h-full relative">
        {urlArray && (
          <img
            className="absolute w-full h-full object-cover"
            src={urlArray[0]}
          />
        )}
        {!(hideBtnOnLoad && previewData.length) && (
          <InputFile
            {...props}
            ref={ref}
            onChange={uploadFile}
            disabled={disabled}
            previewData={urlArray}
          >
            {children}
          </InputFile>
        )}
      </div>
    );
  }
);