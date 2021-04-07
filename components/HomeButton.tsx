import Link from "next/link";
import { HTMLAttributes } from "react";

export default (props: HTMLAttributes<HTMLButtonElement>) => {
  const { ...rest } = props;
  return (
    <Link href="/">
      <button className="btn__back" {...rest}>
        <i className="fas fa-home"></i>
      </button>
    </Link>
  );
};
