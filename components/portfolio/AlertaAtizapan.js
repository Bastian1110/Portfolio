import { BackButton } from "../misc";

export default function AlertaAtizapan(props) {
  return (
    <div className="h-[100vh] bg-[#b6b6ff]">
      <BackButton clickHandler={props.back} iconColor="text-white" />
    </div>
  );
}
