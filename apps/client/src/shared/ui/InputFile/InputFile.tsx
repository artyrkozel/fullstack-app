"use client";

import React, { ChangeEvent, useCallback, useRef } from "react";
import Button, { ButtonTheme } from "../Button/Button";

export type FileChangeEvent = {
  target: {
    value: File[];
    name?: string;
  };
};

export const fileChangeEventCreator = (
  files: File[],
  name?: string
): FileChangeEvent => ({
  target: {
    value: files,
    name,
  },
});

export type InputFileProps = {
  variant: ButtonTheme;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: FileChangeEvent) => void;
  onFiles?: (e: File[]) => void;
  children?: React.ReactNode;
  hasError?: boolean;
  fileType?: string;
  multiple?: boolean;
  fileSize?: number;
  size?: "small" | "medium" | "big";
  name?: string;
  hideBtnOnLoad?: boolean;
  value?: File[];
  id?: string;
  label?: string;
  disabled?: boolean;
  previewData?: string[];
};

export const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  (props) => {
    let inputRef = useRef<HTMLInputElement>(null);
    const triggerEditing = () => {
      inputRef.current?.click();
    };

    // const inputFileID = useUniqueId("input-file-id");

    const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) {
          props.onChange(
            fileChangeEventCreator(
              Array.from(e.target.files || []),
              e.target.name
            )
          );
        }
        e.target.value = "";
      },
      [props]
    );

    return (
      <div className="relative w-full h-full" onClick={triggerEditing}>
        <input
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onChange={onChange}
          type="file"
          accept={props.fileType}
          name={props.name}
          multiple={props.multiple}
          id={props.id}
          ref={inputRef}
          className="hidden"
          disabled={props.disabled}
        />
        <label
          className="absolute transition-all duration-300 group-hover:scale-110 z-10 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2"
          htmlFor={props.id}
        >
          <Button variant={props.variant}>
            {props.children}
          </Button>
        </label>
      </div>
    );
  }
);