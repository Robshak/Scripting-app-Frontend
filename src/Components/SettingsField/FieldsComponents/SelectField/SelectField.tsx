import styles from "./SelectField.module.scss";
import cn from "classnames";
import { SelectFieldProps } from "./SelectField.props";
import { useDispatch } from "react-redux";
import { updateField } from "@/Store/Slices/settingsSlice";
import { useState } from "react";
import ArrowIcon from "./icons/arrow.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function SelectField({
  sectionId,
  field,
  className,
  ...props
}: SelectFieldProps) {
  type UnionType = (typeof field.options)[number];
  const dispatch = useDispatch();
  const [currentState, setCurrentState] = useState<UnionType>(
    field.value
  );
  const [open, setOpen] = useState<boolean>(false);

  const onChangeHandler = (newValue: UnionType) => {
    setOpen(false);
    if (newValue === currentState) return;

    dispatch(
      updateField({
        sectionId,
        fieldId: field.id,
        value: newValue,
      })
    );

    setCurrentState(newValue);
  };

  return (
    <div className={cn(styles["select-wrapper"], className)}>
      <div
        className={cn(styles["select"], {
          [styles["select-open"]]: open,
        })}
        {...props}
        onClick={() => setOpen(!open)}
      >
        {currentState}
        <ArrowIcon />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles["options"]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {field.options.map((option) => (
              <div
                key={option}
                className={cn(styles["option"])}
                onClick={() => onChangeHandler(option)}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
