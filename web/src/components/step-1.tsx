import type { UseFormReturn } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

export function Step1({
  form,
}: {
  form: UseFormReturn<
    {
      current_role: string;
      goal_role: string;
      experience_years: unknown;
      skills: {
        communication: number;
        leadership: number;
        problem_solving: number;
        teamwork: number;
      };
    },
    unknown,
    {
      current_role: string;
      goal_role: string;
      experience_years: number;
      skills: {
        communication: number;
        leadership: number;
        problem_solving: number;
        teamwork: number;
      };
    }
  >;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Qual a situação atual?</CardTitle>
        <CardDescription>
          Isso nos ajudará a personalizar suas recomendações
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={form.control}
          name="current_role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cargo Atual</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Estoquista" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="experience_years"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anos de Experiência</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: 1"
                    type="number"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="goal_role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cargo Desejado</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Operador de Máquinas"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
