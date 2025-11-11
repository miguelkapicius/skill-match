import {
  BrainIcon,
  LoaderCircleIcon,
  SparkleIcon,
  TrendingUp,
  ZapIcon,
} from "lucide-react";
import { LoadingBar } from "./loading-bar";
import { CardDescription, CardTitle } from "./ui/card";

export function LoadingView() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xl px-6 w-full mx-auto">
      <div className="relative flex items-center justify-center">
        <div className="absolute rounded-full size-24 border border-[#6FB6E2] animate-ping"></div>

        <div className="absolute rounded-full size-20 border border-[#9CDFB7] animate-ping"></div>

        <div className="relative flex items-center justify-center rounded-full bg-linear-90 from-[#9CDFB7] to-[#6FB6E2] size-32 animate-[spin_3s_linear_infinite]">
          <BrainIcon className="size-12 text-white" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CardTitle className="text-xl text-center">
          A IA está analisando suas habilidades
        </CardTitle>
        <CardDescription className="text-center text-base">
          Estamos processando seus dados para criar recomendações personalizadas
        </CardDescription>
      </div>
      <main className="max-w-lg w-full space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded p-4 bg-neutral-800">
              <SparkleIcon className="size-5" />
            </div>
            <CardTitle>Analisando perfil profissional</CardTitle>
          </div>
          <LoaderCircleIcon
            className="animate-spin"
            size={16}
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded p-4 bg-neutral-800">
              <TrendingUp className="size-5" />
            </div>
            <CardTitle>Identificando áreas de melhoria</CardTitle>
          </div>
          <LoaderCircleIcon
            className="animate-spin"
            size={16}
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded p-4 bg-neutral-800">
              <ZapIcon className="size-5" />
            </div>
            <CardTitle>Gerando recomendações personalizadas</CardTitle>
          </div>
          <LoaderCircleIcon
            className="animate-spin"
            size={16}
            aria-hidden="true"
          />
        </div>
        <LoadingBar />
      </main>
    </div>
  );
}
