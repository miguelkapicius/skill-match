import {
  BicepsFlexedIcon,
  CircleFadingArrowUpIcon,
  HandHelpingIcon,
  ListPlusIcon,
  SparkleIcon,
  TrainTrackIcon,
} from "lucide-react";
import type { AnalyzeResponse } from "@/types/analyze.type";
import { CardDescription, CardTitle } from "./ui/card";
import { Item, ItemContent, ItemMedia, ItemTitle } from "./ui/item";
import { Separator } from "./ui/separator";

export function ReportView({
  hard_skills,
  recommendations,
  soft_skills,
  summary,
}: AnalyzeResponse["analysis"]) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-4 rounded bg-linear-90 from-[#9CDFB7] to-[#6FB6E2] w-max">
          <SparkleIcon className="size-5 text-white" />
        </div>
        <div className="space-y-2">
          <CardTitle>Análise completa da IA</CardTitle>
          <CardDescription>
            Com base no seu perfil e objetivos, preparamos um plano de
            desenvolvimento personalizado. Selecione as habilidades que deseja
            priorizar.
          </CardDescription>
        </div>
      </div>
      <Separator />
      <div className="space-y-2">
        <CardTitle>Resumo</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </div>
      <section className="grid sm:grid-cols-2 gap-4">
        <div className="col-span-full space-y-2">
          <CardTitle className="text-xl">Soft Skills</CardTitle>
          <Separator />
        </div>
        <aside>
          <div className="mb-3">
            <CardTitle className="flex items-center gap-2">
              <BicepsFlexedIcon /> Pontos Fortes
            </CardTitle>
          </div>
          <div className="space-y-2">
            {soft_skills.strengths.map((strength) => (
              <Item key={strength} variant="muted">
                <ItemContent>
                  <ItemTitle>{strength}</ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </div>
        </aside>
        <aside>
          <div className="mb-3">
            <CardTitle className="flex items-center gap-2">
              <CircleFadingArrowUpIcon /> Pontos de Melhoria
            </CardTitle>
          </div>
          <div className="space-y-2">
            {soft_skills.to_improve.map((improvement) => (
              <Item key={improvement} variant="muted">
                <ItemContent>
                  <ItemTitle>{improvement}</ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </div>
        </aside>
        <div className="col-span-full space-y-2">
          <CardTitle className="text-xl">Hard Skills</CardTitle>
          <Separator />
        </div>
        <aside>
          <div className="mb-3">
            <CardTitle className="flex items-center gap-2">
              <ListPlusIcon /> Habilidades Necessárias
            </CardTitle>
          </div>
          <div className="space-y-2">
            {hard_skills.missing.map((missing) => (
              <Item key={missing} variant="muted">
                <ItemContent>
                  <ItemTitle>{missing}</ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </div>
        </aside>
        <aside>
          <div className="mb-3">
            <CardTitle className="flex items-center gap-2">
              <HandHelpingIcon /> Recomendações
            </CardTitle>
          </div>
          <div className="space-y-2">
            {hard_skills.recommended.map((recommended) => (
              <Item key={recommended} variant="muted">
                <ItemContent>
                  <ItemTitle>{recommended}</ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </div>
        </aside>
        <div className="col-span-full space-y-2">
          <CardTitle className="flex items-center gap-2">
            <TrainTrackIcon /> Trilha Recomendada
          </CardTitle>
          <Separator />
        </div>
        <div className="col-span-full">
          <div className="space-y-2">
            {recommendations.map((recommendation, index) => (
              <Item key={recommendation} variant="muted">
                <ItemMedia>
                  <div className="rounded aspect-square flex items-center justify-center p-4 bg-[#6FB6E2]">
                    {index + 1}
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{recommendation}</ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
