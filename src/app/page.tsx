import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent } from "@/components/ui/Card"
import { Accordion } from "@/components/ui/Accordion"
import { ArrowRight, Clock, Database, CheckCircle2, ShieldCheck } from "lucide-react"
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 z-10 w-full animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
              Exclusivo para fundadores B2B no teto operacional
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.1]">
              Você construiu um negócio, não uma <span className="text-primary relative">prisão<span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span></span>.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-sans leading-relaxed">
              Centralize dados, automatize rotinas manuais e elimine o 'achismo' da sua gestão. Transformamos o seu caos operacional em um ecossistema de vendas previsível.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <a href="#cta" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 font-heading bg-primary text-white shadow hover:bg-primary/90 hover:shadow-lg h-14 px-8 text-base w-full sm:w-auto font-bold animate-pulse-button group">
                👉 Agendar Meu Diagnóstico
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-sm text-slate-500 max-w-[200px] leading-tight">
                (Sessão inicial estratégica 100% confidencial)
              </span>
            </div>
          </div>
          <div className="flex-1 relative w-full flex items-center justify-center animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-slate-200/50 group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 pointer-events-none" />
              <img src="/hero_lifestyle.png" alt="Empreendedor no controle do seu tempo" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              
              {/* Tag de Sucesso Flutuante */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-panel-dark bg-slate-900/80 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 animate-float border border-white/10 shadow-xl">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm font-heading">Operação Escalando</p>
                  <p className="text-slate-300 text-xs pt-0.5">Sistemas 100% Sincronizados.</p>
                </div>
              </div>
            </div>
            
            {/* Elemento Decorativo de Fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-secondary/15 to-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </section>

        {/* --- INDICADORES --- */}
        <section className="bg-white border-y border-slate-100 py-12 px-4 md:px-8 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-2">11</span>
              <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Anos de Mercado</span>
              <span className="text-slate-500 text-xs mt-1">Expertise comprovada</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-2">+90</span>
              <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Empresas Otimizadas</span>
              <span className="text-slate-500 text-xs mt-1">Projetos entregues</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-2">30%</span>
              <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Crescimento Anual</span>
              <span className="text-slate-500 text-xs mt-1">Média entre clientes</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-2">25%</span>
              <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Produtividade</span>
              <span className="text-slate-500 text-xs mt-1">Ganho médio em horas</span>
            </div>
          </div>
        </section>

        {/* --- AGITAÇÃO (DOR) --- */}
        <section className="bg-slate-900 text-white py-24 px-4 md:px-8 relative overflow-hidden" id="agitacao">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold leading-tight">
              Se você parar por 24 horas, a sua empresa continua rodando ou o castelo de cartas desmorona?
            </h2>
            <p className="text-xl text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
              Cobranças fora do prazo, perda de timing com leads quentes, planilhas fragmentadas que não se conversam. A exaustão que você sente hoje tem nome: ausência de processo executável.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Sempre Apagando Incêndio", text: "Você toma decisões reativas, baseado no 'feeling', gastando a sua energia mental onde o sistema deveria agir." },
              { icon: Database, title: "Silos de Informação", text: "Marketing não fala com Vendas. Vendas não avisa o Financeiro. Seu cliente sente a fricção em cada etapa." },
              { icon: ShieldCheck, title: "Crescimento Perigoso", text: "Vender mais parece atraente, mas sem infraestrutura, o aumento de caixa vira o epicentro do estresse." },
            ].map((item, i) => (
              <div key={item.title} className="glass-panel-dark p-8 rounded-xl flex flex-col items-center text-center space-y-4 hover:border-secondary/50 transition-colors">
                <div className="p-4 rounded-full bg-slate-800 text-secondary">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SOLUÇÃO --- */}
        <section className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden" id="solucao">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
            <div className="flex-1 relative animate-slide-in-right opacity-0 [animation-timeline:view()] [animation-range:entry_20%_cover_50%]">
              {/* Background subtil da Logo */}
              <img src="/LogoByprocessTransparente.png" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 opacity-[0.03] pointer-events-none" />
              {/* Imagem do Dashboard Mockup */}
              <img src="/dashboard_solucao.png" alt="Dashboard By Process Automation" className="relative z-10 w-full max-w-xl mx-auto rounded-xl shadow-2xl shadow-primary/10 border border-slate-200" />
            </div>
            
            <div className="flex-1 space-y-8">
               <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
                 A tecnologia deve ser o seu motor de tração, <span className="text-secondary">não a sua âncora.</span>
               </h2>
               <p className="text-lg text-slate-600 font-sans leading-relaxed">
                 Desenvolvemos arquiteturas exclusivas que conectam suas ferramentas, preenchem as lacunas humanas e automatizam as tarefas que engolem as horas úteis da sua equipe. Você ganha a visão "de cima".
               </p>
               <ul className="space-y-4 pt-4">
                 {[
                   "Visão 360º de toda a cadeia operacional em tempo real.",
                   "Automação de rotinas administrativas, financeiras e de gestão.",
                   "Padronização de processos para ganho de escala e previsibilidade."
                 ].map((t, i) => (
                   <li key={t} className="flex items-center gap-3 text-slate-800 font-medium">
                     <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                     {t}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

        {/* --- NOSSOS SERVIÇOS --- */}
        <section className="py-24 px-4 md:px-8 bg-white relative" id="servicos">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900">
                Nosso Catálogo de Soluções
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Transformamos o conhecimento técnico de engenharia de processos em arquiteturas acionáveis para sua empresa escalar com tecnologia.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { image: "/images/service_mapeamento.png", title: "Mapeamento de Processos", text: "Desenhamos o fluxo real de trabalho da sua empresa para encontrar gargalos e desperdícios ocultos." },
                { image: "/images/service_otimizacao.png", title: "Otimização de Processos", text: "Redesenhamos a operação para eliminar passos redundantes e acelerar o tempo de entrega (Lead Time)." },
                { image: "/images/service_procedimentos.png", title: "Procedimentos Operacionais", text: "Criamos POPs claros para padronizar o trabalho e facilitar o treinamento de novos colaboradores." },
                { image: "/images/service_produtividade.png", title: "Estudo de Produtividade", text: "Medimos a capacidade da sua equipe e identificamos onde estão os maiores ganhos de eficiência." },
                { image: "/images/service_auditoria.png", title: "Audit (Auditoria)", text: "Avaliamos a aderência da equipe aos processos definidos para garantir que o padrão está sendo mantido." },
                { image: "/images/service_indicadores.png", title: "Indicadores de Processo", text: "Estruturamos KPIs cruciais para que a diretoria possa gerenciar com base em dados, não em intuição." },
                { image: "/images/service_seguranca.png", title: "Segurança em Processos", text: "Mitigamos riscos operacionais, blindando a empresa contra falhas humanas e sistêmicas." },
                { image: "/images/service_automacao.png", title: "Automação de Processos", text: "Substituímos rotinas manuais repetitivas por robôs e integrações de sistema, devolvendo horas úteis à equipe." },
                { image: "/images/service_implantacao.png", title: "Implantação de Sistemas", text: "Garantimos que o ERP/CRM se molde ao seu processo, com arquitetura inteligente e adoção plena." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group overflow-hidden flex flex-col">
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex-1 bg-white">
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- COMO FUNCIONA --- */}
        <section className="py-24 px-4 md:px-8 bg-white" id="como-funciona">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900">
                Um processo cirúrgico, sem atrito.
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Não paralisamos a sua operação para implementar. O nosso método corre em um fluxo lateral, transparente e agressivamente eficaz.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 relative items-start">
               {[
                 { step: "01", title: "Raio-X da Operação", text: "Mapeamos seus processos com metodologias internacionais, entendendo todo o gargalo da sua operação" },
                 { step: "02", title: "Arquitetura Sob Medida", text: "Desenhamos as integrações e processos ideais. Cada ferramenta no seu lugar exato." },
                 { step: "03", title: "A Virada de Chave", text: "A implantação acontece ativamente, a equipe é treinada, e o processo assumido." }
               ].map((item, i) => (
                 <div key={item.step} className="flex-1 relative flex flex-col items-center text-center space-y-6">
                   <div className="w-16 h-16 rounded-full bg-secondary text-white font-heading font-bold text-2xl flex items-center justify-center shadow-xl shadow-secondary/20 relative z-10">
                     {item.step}
                   </div>
                   <div className="pt-4">
                     <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                     <p className="text-slate-600">{item.text}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- PROVA SOCIAL --- */}
        <section className="py-24 px-4 md:px-8 bg-slate-50" id="prova-social">
          <div className="max-w-6xl mx-auto">
             <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
               <div className="space-y-4 text-center md:text-left">
                 <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
                   Quem já estruturou a operação<br className="hidden md:block" /> com a By Process
                 </h2>
                 <div className="flex items-center justify-center md:justify-start gap-3">
                   <div className="flex gap-1 text-amber-400">
                     {[1, 2, 3, 4, 5].map((key) => <span key={`star-${key}`} className="text-2xl">★</span>)}
                   </div>
                   <span className="font-bold text-slate-700 text-lg">5.0 no Google</span>
                 </div>
               </div>
               
               <div className="shrink-0">
                  <a href="https://share.google/w4okzB4gP8hJVk7nT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold transition-all focus-visible:outline-none h-12 px-6 py-3 border-2 border-slate-200 bg-white shadow-sm hover:bg-slate-50 hover:border-slate-300 text-slate-700 group">
                    <svg className="w-5 h-5 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Ler avaliações no Google
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
               </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
               {[
                 { name: "Rafael Tavares", company: "ETC Soluções", review: "Os sócios da ETC me pediram indicação de um profissional para avaliar os processos internos na busca de ganho em produtividade, frente os desafios de uma rotina operacional complexa onde os sócios perdiam muito tempo acompanhando a equipe.\n\nDe forma bem resumida, o que posso falar, foi que eles não só melhoraram os processos tornando-os mais ágil, como criaram e implantaram um sistema customizado, automatizando diversas tarefas e planilhas soltas que tínhamos. Isso resultou num menor prazo de resposta aos nossos clientes.\n\nSe a sua empresa está com algum processo lento ou demandando muito esforço sem qualidade, recomendo fortemente a consulta da BY PROCESS." },
                 { name: "Juliana Cavalcanti", company: "Local Guide", review: "Iniciamos o projeto com a By Process no comercial para mapear os processos e melhorar nosso atendimento. Eles entregaram muito mais do que o esperado, pois além de organizarem o setor, realmente acompanharam nossa evolução. Fazendo as coisas realmente acontecerem na prática." },
                 { name: "Paulo Vitor Soares", company: "Cliente By Process", review: "Excelente qualidade na entrega, prazos e previsões de trabalho! A consultoria transformou nossos processos e aumentou a produtividade significativamente por meio de uma organização e lógica que nem nós achávamos que já tínhamos, mas na verdade estávamos perdendo tempo." }
               ].map((r, i) => (
                 <Card key={`review-${r.name}`} className="hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl border-slate-200 h-full">
                   <CardContent className="pt-6 h-full flex flex-col">
                     <div className="flex gap-1 text-amber-400 mb-4 text-sm">★★★★★</div>
                     <p className="text-slate-700 mb-6 flex-1 whitespace-pre-wrap">{r.review}</p>
                     <div className="flex items-center gap-3 mt-auto">
                       <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-heading font-extrabold text-secondary text-lg border border-slate-200 shadow-sm">
                         {r.name.charAt(0)}
                       </div>
                       <div>
                         <p className="font-bold text-sm text-slate-900">{r.name}</p>
                         <p className="text-xs text-slate-500">{r.company}</p>
                       </div>
                     </div>
                   </CardContent>
                 </Card>
               ))}
             </div>
          </div>
        </section>

        {/* --- AUTORIDADE --- */}
        <section className="relative py-32 px-4 md:px-8 bg-slate-900 overflow-hidden" id="autoridade">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-slate-900 to-slate-900 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">Por que a By Process?</h2>
              <div className="space-y-6 text-lg text-slate-300 font-sans leading-relaxed">
                <p>
                  Nós não somos curiosos ou entusiastas; <strong className="text-white">somos um time técnico de engenheiros</strong>, com foco acadêmico (mestrado) e <strong className="text-white">mais de 10 anos de expertise</strong> no mercado.
                </p>
                <p>
                  Possuímos certificações em gerenciamento e otimização, com total domínio das notações e metodologias internacionais. Porém, o nosso real diferencial está na execução.
                </p>
                <p>
                  Nosso serviço vai muito além de apenas desenhar os processos e dar um treinamento. Nós transportamos todo esse conhecimento técnico de engenharia para um <strong className="text-white">ambiente tecnológico robusto</strong>.
                </p>
                <p>
                  Essa forte integração tecnológica proporciona segurança e efetividade. A tecnologia garante que a sua equipe realmente execute, na prática, tudo o que foi planejado, blindando a operação e aumentando drasticamente os resultados da sua empresa.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full glass-panel-dark rounded-2xl p-8 border-white/10 shadow-2xl flex flex-col items-center justify-center min-h-[300px]">
               <img src="/LogoByprocessTransparente.png" alt="By Process Automation" className="h-20 w-auto brightness-0 invert opacity-80 mb-8" />
               <div className="grid grid-cols-2 gap-4 w-full">
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-center">
                   <div className="text-secondary font-bold text-xl mb-1">Engenharia</div>
                   <div className="text-slate-400 text-sm">Time Técnico & Mestres</div>
                 </div>
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-center">
                   <div className="text-secondary font-bold text-xl mb-1">Tecnologia</div>
                   <div className="text-slate-400 text-sm">Integração Prática</div>
                 </div>
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-center">
                   <div className="text-secondary font-bold text-xl mb-1">+10 Anos</div>
                   <div className="text-slate-400 text-sm">De Expertise</div>
                 </div>
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 text-center">
                   <div className="text-secondary font-bold text-xl mb-1">Global</div>
                   <div className="text-slate-400 text-sm">Padrão Internacional</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-24 px-4 md:px-8 bg-zinc-50" id="faq">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center text-slate-900">
              Ainda tem dúvidas se este é o momento certo?
            </h2>
            
            <Accordion 
              items={[
                { question: "Gestão de processos é só para grandes empresas?", answer: "Não. Na verdade, pequenas e médias empresas são as que mais perdem dinheiro com a falta de processos, pois os desperdícios comprometem diretamente o caixa. A gestão organiza a casa para permitir o crescimento escalável." },
                { question: "Preciso investir muito em infraestrutura e sistemas novos?", answer: "Na maioria dos casos, não. Nós usamos metodologias inteligentes e agimos como um 'tecido conectivo' para integrar e otimizar o que você já usa, sem a necessidade imediata de comprar infraestruturas caras." },
                { question: "A By Process apenas desenha o processo e vai embora?", answer: "De forma alguma. Nosso foco é a integração com a tecnologia e a execução. Nós implementamos ativamente as ferramentas tecnológicas e garantimos que a equipe seja treinada, transportando a engenharia de processos para a prática diária." },
                { question: "A minha empresa terá que parar para implementar as melhorias?", answer: "Não. Nosso método de transição em paralelo garante que todo novo fluxo seja desenhado e implementado sem afetar um único dia do seu faturamento ou atendimento atual." }
              ]} 
            />
          </div>
        </section>

        {/* --- CTA FINAL --- */}
        <section className="py-24 px-4 md:px-8 bg-primary relative overflow-hidden" id="cta">
           <div className="absolute -top-32 -left-32 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black opacity-10 rounded-full blur-3xl"></div>
           
           <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
               Você não pode escalar a exaustão.
             </h2>
             <p className="text-xl text-white/90 font-medium">
               Continuar fazendo a mesma gestão fragmentada fará você chegar ao ano que vem exatamente com a mesma carga penal.
             </p>
             <div className="pt-8 block">
               <a href="https://wa.me/numerodefinido" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-center whitespace-normal rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 font-heading bg-slate-900 text-white hover:bg-slate-800 shadow-2xl shadow-slate-900/50 text-lg px-6 py-4 min-h-[4rem] w-full md:w-auto animate-pulse-button">
                 👉 Quero Agendar Meu Mapeamento Estratégico
               </a>
             </div>
             <p className="text-white/70 text-sm mt-6">
               (Atenção: Por sermos uma consultoria de alta complexidade, operamos com vagas escassas de imersão por mês.)
             </p>
           </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
