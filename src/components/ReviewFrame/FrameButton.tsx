enum COLORS {
  GREEN = 'bg-[#53C22C]',
  YELLOW = 'bg-[#E7C02A]',
  RED = 'bg-[#F35B53]',
}

interface Props {
  color: keyof typeof COLORS;
}

export default function FrameButton({ color }: Props) {
  return <div className={`w-3 h-3 rounded-full ${COLORS[color]}`}></div>;
}
