import Link from "next/link";
import React from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  link?: string;
  color?: string;
  onClick?: () => void;
};

const Button = ({ text, link, color, onClick }: ButtonProps) => {
  if (link) {
    return (
      <Link href={link}>
        <div className={styles.button}>
          <button className={styles.buttonBody}>{text}</button>
        </div>
      </Link>
    );
  } else {
    return (
      <div className={styles.button}>
        <button
          className={styles.buttonBody}
          onClick={onClick}
          style={
            color === "unactive"
              ? { background: "#D8D8D8", fontWeight: "400", borderRadius: "4px" }
              : {}
          }
        >
          {text}
        </button>
      </div>
    );
  }
};

export default Button;
