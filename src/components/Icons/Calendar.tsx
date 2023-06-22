interface IProps {
  color?: string;
  size?: number;
}

export const CalendarIcon = ({ color, size }: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.34783 1C5.87228 1 5.47826 1.39402 5.47826 1.86957V2.73913H2.86957C2.36515 2.73913 2 3.10428 2 3.6087V6.65217H22V3.6087C22 3.10428 21.6348 2.73913 21.1304 2.73913H18.5217V1.86957C18.5217 1.39402 18.1277 1 17.6522 1H16.7826C16.3071 1 15.913 1.39402 15.913 1.86957V2.73913H8.08696V1.86957C8.08696 1.39402 7.69293 1 7.21739 1H6.34783ZM6.34783 1.86957H7.21739V4.47826H6.34783V1.86957ZM16.7826 1.86957H17.6522V4.47826H16.7826V1.86957ZM2 7.52174V21C2 21.5044 2.36515 21.8696 2.86957 21.8696H21.1304C21.6348 21.8696 22 21.5044 22 21V7.52174H2ZM6.34783 10.1304H8.52174V12.3043H6.34783V10.1304ZM9.3913 10.1304H11.5652V12.3043H9.3913V10.1304ZM12.4348 10.1304H14.6087V12.3043H12.4348V10.1304ZM15.4783 10.1304H17.6522V12.3043H15.4783V10.1304ZM6.34783 13.1739H8.52174V15.3478H6.34783V13.1739ZM9.3913 13.1739H11.5652V15.3478H9.3913V13.1739ZM12.4348 13.1739H14.6087V15.3478H12.4348V13.1739ZM15.4783 13.1739H17.6522V15.3478H15.4783V13.1739ZM6.34783 16.2174H8.52174V18.3913H6.34783V16.2174ZM9.3913 16.2174H11.5652V18.3913H9.3913V16.2174ZM12.4348 16.2174H14.6087V18.3913H12.4348V16.2174ZM15.4783 16.2174H17.6522V18.3913H15.4783V16.2174Z"
        fill={color ?? "#888"}
      />
    </svg>
  );
};
