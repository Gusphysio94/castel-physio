import Button from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/site";

type BookingButtonProps = {
  /** Où se trouve le bouton (pour savoir quels emplacements fonctionnent le mieux) */
  source: string;
  className?: string;
  children?: React.ReactNode;
};

export default function BookingButton({ source, className, children }: BookingButtonProps) {
  return (
    <Button
      href={BOOKING_URL}
      variant="primary"
      className={className}
      track={{ event: "rdv-click", source }}
    >
      {children ?? "Prendre rendez-vous"}
    </Button>
  );
}
