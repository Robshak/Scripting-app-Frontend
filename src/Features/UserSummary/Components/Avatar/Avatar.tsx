"use client";

import styles from "./Avatar.module.scss";
import cn from "classnames";
import { AvatarProps } from "./Avatar.props";

import ImgIcon from "./icons/img.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import Image from "next/image";
import { updateField } from "@/Store/Slices/userData";

export default function Avatar({
  isInput,
  className,
  ...props
}: AvatarProps) {
  const picture = useSelector(
    (state: RootState) => state.userDataSlice.picture
  );
  const dispatch = useDispatch();

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64Image = reader.result as string;
        dispatch(
          updateField({
            field: "picture",
            value: base64Image,
          })
        );
      };

      reader.readAsDataURL(file);
    }
  };

  if (!isInput) {
    return (
      <>
        {picture ? (
          <Image
            width={160}
            height={160}
            src={picture}
            alt="Uploaded"
            className={cn(styles["picture"], className)}
          />
        ) : (
          <ImgIcon className={cn(styles["img-icon"], className)} />
        )}
      </>
    );
  }

  return (
    <>
      <label
        htmlFor="file-upload"
        className={cn(styles["label"], {
          [styles["active"]]: picture,
        })}
      >
        {picture ? (
          <Image
            width={160}
            height={160}
            src={picture}
            alt="Uploaded"
            className={cn(styles["picture"], className)}
          />
        ) : (
          <ImgIcon className={cn(styles["img-icon"])} />
        )}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className={cn(styles["input"], className)}
        {...props}
      />
    </>
  );
}
