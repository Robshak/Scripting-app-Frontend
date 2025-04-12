import styles from "./SelectField.module.scss";
import cn from "classnames";
import { SelectFieldProps } from "./SelectField.props";
import { useState } from "react";
import ArrowIcon from "./icons/arrow.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function SelectField({
  field,
  className,
  ...props
}: SelectFieldProps) {
  const [currentState, setCurrentState] = useState<string>(
    field.initialValue
  );
  const [open, setOpen] = useState<boolean>(false);

  const onChangeHandler = (newValue: string) => {
    setOpen(false);
    if (newValue === currentState) return;

    field.onChange(newValue);

    setCurrentState(newValue);
  };

  return (
    <div className={cn(styles["select-wrapper"], className)}>
      <div
        className={cn(styles["select"], {
          [cn(styles["select-open"])]: open,
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
            className={cn(styles["options"])}
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
