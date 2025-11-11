"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import type { z } from "zod";
import { FormView, type formSchema } from "@/components/form-view";
import { LoadingView } from "@/components/loading-view";
import { ReportView } from "@/components/report-view";
import { Progress } from "@/components/ui/progress";
import type { AnalyzeResponse } from "@/types/analyze.type";
import { Header } from "@/components/header";

export default function Home() {
  const [step, setStep] = useState(1);
  const [screen, setScreen] = useState<"form" | "loading" | "report">("form");

  const { mutateAsync: analyze, data } = useMutation<
    AnalyzeResponse,
    Error,
    z.infer<typeof formSchema>
  >({
    mutationKey: ["analyze"],
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Erro ao analisar os dados");
      }

      const data = await response.json();
      return data;
    },
    retry: 3,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setScreen("loading");
    await analyze(values);
    setScreen("report");
  }

  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto w-full py-8 px-4 space-y-6">
        {screen === "form" && (
          <header className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Passo {step} de 2</span>
              <span>{(step * 100) / 2}%</span>
            </div>
            <Progress value={(step * 100) / 2} />
          </header>
        )}
        <main className="space-y-6">
          {screen === "form" && (
            <FormView onSubmit={onSubmit} setStep={setStep} step={step} />
          )}
          {screen === "loading" && <LoadingView />}
          {screen === "report" && data?.analysis && (
            <ReportView {...data.analysis} />
          )}
        </main>
      </div>
    </div>
  );
}
