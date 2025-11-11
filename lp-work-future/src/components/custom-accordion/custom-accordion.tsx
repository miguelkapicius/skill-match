import { ChevronDownIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Card, CardContent } from "../ui/card";

const items = [
  {
    id: "1",
    title: "Crie seu perfil",
    sub: "Conte quem você é e onde quer chegar.",
    content:
      "O primeiro passo é simples: o usuário informa sua profissão, experiência, nível de estudo e área de interesse. Esses dados alimentam o sistema de IA, que entende o ponto de partida de cada pessoa e traça um caminho personalizado para o crescimento profissional.",
  },
  {
    id: "2",
    title: "A inteligência artificial entra em ação",
    sub: "Sua carreira analisada com base em dados reais do mercado.",
    content:
      "A IA da SkillMatch cruza seu perfil com milhares de vagas e tendências do mercado. Com isso, identifica as habilidades mais valorizadas, as profissões em ascensão e o que falta para você se destacar nas novas oportunidades do futuro do trabalho.",
  },
  {
    id: "3",
    title: "Receba sua trilha de aprendizado",
    sub: "Cursos e habilidades sob medida para o seu perfil.",
    content:
      "Com base na análise, a IA cria um plano de aprendizado individualizado, com cursos gratuitos e pagos, certificações e materiais práticos. Nada genérico — tudo alinhado com o que o mercado realmente está pedindo.",
  },
  {
    id: "4",
    title: "Cresça junto com a IA",
    sub: "Quanto mais você aprende, mais inteligente ela fica.",
    content:
      "A plataforma acompanha o seu progresso e atualiza as recomendações conforme você evolui. Assim, seu aprendizado nunca para, e você permanece sempre alinhado às novas demandas do mercado de trabalho digital.",
  },
];

export function CustomAccordion() {
  return (
    <Card>
      <CardContent>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="3"
        >
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="py-2">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between rounded-md py-2 text-left text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&[data-state=open]>svg]:rotate-180">
                  <span className="flex flex-col space-y-1">
                    <span>{item.title}</span>
                    {item.sub && (
                      <span className="text-lg md:text-xl font-normal">
                        {item.sub}
                      </span>
                    )}
                  </span>
                  <ChevronDownIcon
                    size={16}
                    className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-2 text-muted-foreground text-sm md:text-lg">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
