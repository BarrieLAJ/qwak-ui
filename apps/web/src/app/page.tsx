import { Metadata } from "next";
import { Button } from "ui";

export const metadata: Metadata = {
  title: "TaxTrackPro",
};

export default function Home() {
  return (
    <div>
      <Button fullWidth href="https://github.com" intent="primary" size="sm">
        something
      </Button>
    </div>
  );
}
