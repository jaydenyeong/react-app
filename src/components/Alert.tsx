import type { ReactNode } from "react";

interface Props{
    children:ReactNode; //Reactnode pass html content
}

const Alert = ({children}: Props) => {
  return (
    <div className = "alert alert-primary">{children}</div>
  )
}

export default Alert