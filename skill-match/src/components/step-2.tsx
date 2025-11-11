import {
  BadgeAlertIcon,
  MessageSquareIcon,
  ShieldHalfIcon,
  UsersIcon,
} from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { FormControl, FormField, FormItem } from "../components/ui/form";
import { Slider } from "../components/ui/slider";

export function Step2({
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
        <CardTitle className="text-xl">Classifique suas habilidades</CardTitle>
        <CardDescription>
          Isso nos ajudará a oferecer sugestões mais relevantes para seu perfil.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Card className="flex-1">
          <CardHeader className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquareIcon />
              <CardTitle>Comunicação</CardTitle>
            </div>
            <CardTitle>{form.watch("skills.communication")}</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="skills.communication"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Slider
                      min={1}
                      max={5}
                      step={1}
                      value={[field.value || 1]}
                      onValueChange={(val) => field.onChange(val[0])}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex items-center justify-between text-sm">
            <span>Iniciante</span>
            <span>Avançado</span>
          </CardFooter>
        </Card>
        <Card className="flex-1">
          <CardHeader className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UsersIcon />
              <CardTitle>Liderança</CardTitle>
            </div>
            <CardTitle>{form.watch("skills.leadership")}</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="skills.leadership"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Slider
                      min={1}
                      max={5}
                      step={1}
                      value={[field.value || 1]}
                      onValueChange={(val) => field.onChange(val[0])}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex items-center justify-between text-sm">
            <span>Iniciante</span>
            <span>Avançado</span>
          </CardFooter>
        </Card>
        <Card className="flex-1">
          <CardHeader className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BadgeAlertIcon />
              <CardTitle>Resolução de Problemas</CardTitle>
            </div>
            <CardTitle>{form.watch("skills.problem_solving")}</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="skills.problem_solving"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Slider
                      min={1}
                      max={5}
                      step={1}
                      value={[field.value || 1]}
                      onValueChange={(val) => field.onChange(val[0])}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex items-center justify-between text-sm">
            <span>Iniciante</span>
            <span>Avançado</span>
          </CardFooter>
        </Card>
        <Card className="flex-1">
          <CardHeader className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldHalfIcon />
              <CardTitle>Trabalho em equipe</CardTitle>
            </div>
            <CardTitle>{form.watch("skills.teamwork")}</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="skills.teamwork"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Slider
                      min={1}
                      max={5}
                      step={1}
                      value={[field.value || 1]}
                      onValueChange={(val) => field.onChange(val[0])}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex items-center justify-between text-sm">
            <span>Iniciante</span>
            <span>Avançado</span>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
}
