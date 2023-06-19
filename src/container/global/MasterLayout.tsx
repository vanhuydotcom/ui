import { Inter } from "next/font/google";
import { MasterContainer } from "./styled.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  children: ReactNode;
}

export default function MasterLayout({ children }: IProps) {
  return (
    <MasterContainer className={inter.className}>{children}</MasterContainer>
  );
}
