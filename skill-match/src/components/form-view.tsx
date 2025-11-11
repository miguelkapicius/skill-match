import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Step1 } from "../components/step-1";
import { Step2 } from "../components/step-2";
import { Button } from "../components/ui/button";
import { Form } from "../components/ui/form";

export const formSchema = z.object({
  current_role: z.string().min(1).max(255),
  goal_role: z.string().min(1).max(255),
  experience_years: z.coerce.number().min(0).max(100),
  skills: z.object({
    communication: z.number().min(1).max(5),
    leadership: z.number().min(1).max(5),
    problem_solving: z.number().min(1).max(5),
    teamwork: z.number().min(1).max(5),
  }),
});

export function FormView({
  onSubmit,
  setStep,
  step,
}: {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      current_role: "",
      goal_role: "",
      experience_years: 1,
      skills: {
        communication: 1,
        problem_solving: 1,
        teamwork: 1,
        leadership: 1,
      },
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && <Step1 form={form} />}
        {step === 2 && <Step2 form={form} />}
        <div className="flex items-center justify-between">
          <div>
            {step === 2 && (
              <Button
                variant={"outline"}
                type="button"
                onClick={() => setStep(1)}
              >
                <ArrowLeftIcon />
                Voltar
              </Button>
            )}
          </div>
          <div>
            {step === 1 ? (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
              >
                Próximo <ArrowRightIcon />
              </button>
            ) : (
              <Button type="submit">Requalificar</Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
