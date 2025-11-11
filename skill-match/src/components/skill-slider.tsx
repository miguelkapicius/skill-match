import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function SkillSlider() {
  return (
    <div className="*:not-first:mt-4">
      <Label>Slider with labels and tooltip</Label>
      <div>
        <span
          className="mb-3 flex w-full items-center justify-between gap-2 text-xs font-medium text-muted-foreground"
          aria-hidden="true"
        >
          <span>Low</span>
          <span>High</span>
        </span>
        <Slider
          min={1}
          step={1}
          max={5}
          aria-label="Slider with labels and tooltip"
        />
      </div>
    </div>
  );
}
