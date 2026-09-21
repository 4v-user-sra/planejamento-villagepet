import React, { useState } from "react"
import { presentationData } from "../data"
import { ArrowUpRight, ArrowRight, Target, Lightbulb, PlayCircle, Star, Calendar, CheckCircle2, ChevronRight, FileSpreadsheet, Network, FileText, Video, Rocket, ExternalLink } from "lucide-react"

const themeMap: Record<string, string> = {
  "01_capa": "bg-[#F5842A] text-white border-[#FE7801]",
  "02_recapitulando_jornada": "bg-[#FCCB01] text-[#2A2D2A] border-[#F5842A]",
  "03_sumario": "bg-[#F5EDE6] text-[#2A2D2A] border-[#00AAA7]",
  "04_divisor_secao_1": "bg-[#00AAA7] text-white border-[#F5842A]",
  "05_analise_social": "bg-[#F5EDE6] text-[#2A2D2A] border-[#00AAA7]",
  "06_analise_site": "bg-white text-[#2A2D2A] border-[#FCCB01]",
  "07_analise_meta": "bg-[#00AAA7] text-white border-[#FED021]",
  "08_diferenciais": "bg-[#FCCB01] text-[#2A2D2A] border-[#F5842A]",
  "10_benchmarking_petz": "bg-[#F5EDE6] text-[#2A2D2A] border-[#00AAA7]",
  "11_benchmarking_cobasi": "bg-[#F5842A] text-white border-[#FE7801]",
  "11b_benchmarking_petcamp": "bg-[#F5EDE6] text-[#2A2D2A] border-[#00AAA7]",
  "10_benchmarking_1": "bg-[#F5EDE6] text-[#2A2D2A] border-[#00AAA7]",
  "11_benchmarking_2": "bg-[#F5842A] text-white border-[#FE7801]",
  "12_moodboard": "bg-white text-[#2A2D2A] border-[#FCCB01]",
  "14_persona_1": "bg-[#00AAA7] text-white border-[#FED021]",
  "15_persona_2": "bg-[#FCCB01] text-[#2A2D2A] border-[#F5842A]",
  "17_objetivo_smart": "bg-[#F5842A] text-white border-[#00AAA7]",
  "13_estrategia": "bg-[#F5EDE6] text-[#2A2D2A] border-[#00AAA7]",
  "13_estrategia_campanhas": "bg-white text-[#2A2D2A] border-[#FCCB01]",
  "13b_projecoes": "bg-[#00AAA7] text-white border-[#FED021]",
  "18_drawflow_funil": "bg-[#FCCB01] text-[#2A2D2A] border-[#F5842A]",
  "19_cronograma": "bg-[#F5842A] text-white border-[#FE7801]",
  "20_projecoes_trafego": "bg-[#F5842A] text-white border-[#FE7801]"
}

// Helper to determine section background based on type
function getSectionTheme(id: string, type: string) {
  if (themeMap[id]) return themeMap[id]
  return 'bg-[#F5EDE6] text-[#2A2D2A] border-[#00AAA7]'
}

function SectionWrapper({ children, themeClass }: { children: React.ReactNode; themeClass: string; key?: React.Key }) {
  return (
    <section className={`w-full min-h-[60vh] flex flex-col justify-center px-8 md:px-24 py-24 ${themeClass} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        {children}
      </div>
    </section>
  )
}

function RenderBlock({ slide }: { slide: any }) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const type = slide.slide_type
  const d = slide.content_slots
  const themeClass = getSectionTheme(slide.id, type)
  const isLight = themeClass.includes('bg-white') || themeClass.includes('bg-[#F5EDE6]') || themeClass.includes('bg-[#FCCB01]')

  let titleColor = isLight ? "text-[#2A2D2A]" : "text-white"
  let subtitleColor = isLight ? "text-[#2A2D2A]/70" : "text-white/80"
  let cardBg = isLight ? "bg-white border-[#00AAA7]/20 shadow-sm" : "bg-black/10 border-white/20"

  if (type === 'cover') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FED021] to-[#F5842A] -z-10 rounded-3xl opacity-20"></div>
        
        {/* Logo Replica */}
        <div className="bg-[#FE7801] bg-gradient-to-b from-[#FE7801] to-[#F5842A] rounded-[2rem] rounded-tl-xl rounded-br-xl shadow-2xl p-8 md:p-12 rotate-[-2deg] flex flex-col items-center relative z-10">
           <div className="flex items-center gap-4 mb-2">
             <div className="h-4 w-12 bg-[#00AAA7]"></div>
             <span className="text-[#00AAA7] font-sans font-black tracking-[0.3em] uppercase text-xl">RAÇÕES</span>
             <div className="h-4 w-12 bg-[#00AAA7]"></div>
           </div>
           
           <div className="relative">
             <h1 className="text-6xl md:text-8xl font-display text-[#F5842A] tracking-tighter uppercase" style={{ textShadow: '-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff' }}>
               VILLAGE
             </h1>
             <span className="absolute -bottom-4 -right-8 text-5xl font-script text-[#00AAA7] rotate-[-5deg]">Pet</span>
           </div>
           
           <div className="mt-6 flex flex-col gap-1 w-full max-w-[200px]">
             <div className="h-0.5 w-full bg-[#00AAA7]"></div>
             <div className="h-0.5 w-[90%] bg-[#00AAA7]"></div>
             <div className="h-0.5 w-[80%] bg-[#00AAA7]"></div>
           </div>
        </div>

        <div className="pt-16 flex flex-col items-center gap-4 text-white z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-sans">
            {d.titulo_principal}
          </h2>
          <p className="text-xl max-w-md opacity-90">{d.legenda_rodape}</p>
        </div>
      </div>
    )
  }


  if (type === 'table_of_contents') {
    return (
      <div className="flex flex-col md:flex-row h-full w-full max-w-5xl mx-auto items-center py-12">
        {/* Left Side: Title */}
        <div className={`w-full md:w-[40%] flex md:justify-end md:pr-16 md:border-r ${isLight ? 'border-zinc-300' : 'border-white/20'} mb-12 md:mb-0`}>
           <h2 className={`text-5xl md:text-6xl font-bold ${titleColor} md:text-right`}>{d.titulo}</h2>
        </div>
        
        {/* Right Side: Items vertically */}
        <div className="w-full md:w-[60%] md:pl-16 flex flex-col justify-center gap-5">
          {d.itens_agenda?.map((item: string, idx: number) => (
            <div key={idx} className="flex items-center gap-5 group">
              <span className={`text-2xl font-bold font-display ${isLight ? 'text-zinc-400 group-hover:text-[#00AAA7]' : 'text-white/40 group-hover:text-[#F5842A]'} transition-colors`}>
                {idx + 1}
              </span>
              <span className={`text-xl font-medium ${titleColor}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'process_timeline') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} mb-16 text-center`}>{d.titulo}</h2>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-4 bottom-0 w-px bg-[#00AAA7]/20 md:hidden" />
          <div className="absolute top-4 left-0 right-0 h-px bg-[#00AAA7]/20 hidden md:block" />
          
          {d.etapas_timeline?.map((etapa: string, i: number) => {
            const isCurrent = etapa === d.etapa_atual_destacada
            return (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 flex-1 px-2 my-4 md:my-0">
                <div className="h-8 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center relative z-10 ${isCurrent ? 'border-[#FE7801] bg-white' : 'border-[#00AAA7]/40 bg-white'}`}>
                    {isCurrent && <div className="w-2 h-2 rounded-full bg-[#F5842A]" />}
                  </div>
                </div>
                <span className={`text-sm md:text-base font-medium text-center ${isCurrent ? 'text-[#FE7801]' : subtitleColor}`}>
                  {etapa}
                </span>
              </div>
            )
          })}
        </div>
        <div className="mt-20 text-center">
          {d.label_fase_rodape && (
            <p className={`inline-block px-6 py-2 rounded-full ${isLight ? 'bg-[#F5EDE6] text-[#F5842A] border-[#00AAA7]/20' : 'bg-red-950/30 text-red-400 border-red-900/50'} mb-4`}>
              {d.label_fase_rodape}
            </p>
          )}
          {d.anotacoes_contextuais && (
            <p className={`${subtitleColor} max-w-xl mx-auto`}>{d.anotacoes_contextuais}</p>
          )}
        </div>
      </div>
    )
  }

  if (type === 'agenda_toc') {
    return (
      <div className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto w-full">
        <div className="w-full md:w-1/3 pt-4">
           <h2 className={`text-4xl font-bold ${titleColor} sticky top-32`}>{d.titulo}</h2>
        </div>
        <div className={`w-full md:w-2/3 flex flex-col gap-3 border-l ${isLight ? 'border-[#00AAA7]/20' : 'border-white/20'} pl-8 md:pl-12`}>
          {d.itens_agenda?.map((item: string, i: number) => (
            <div key={i} className="flex gap-6 group items-center transition-colors">
              <span className="text-xl font-bold text-[#FE7801] font-mono w-6 text-right opacity-80">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`text-xl font-medium ${titleColor} opacity-80 group-hover:opacity-100 transition-opacity`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'section_divider') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
        <Target className={`w-16 h-16 text-[#FE7801] mb-8 opacity-80`} />
        <h2 className={`text-5xl font-bold ${titleColor} max-w-3xl leading-tight`}>{d.titulo_secao}</h2>
      </div>
    )
  }

  if (type === 'diagnostic_analysis') {
    return (
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col h-full justify-center">
          <h2 className={`text-4xl font-bold ${titleColor} mb-8`}>{d.titulo_slide}</h2>
          <div className="w-16 h-1 bg-[#F5842A] mb-8"></div>
          
          {/* Sessão de Imagem / Print */}
          {(d.imagem_url || d.image_placeholder) && (
            <div className="flex flex-col gap-4">
              <div className={`mt-4 w-full rounded-2xl border-2 ${d.imagem_url ? (isLight ? 'border-[#00AAA7]/20 shadow-xl' : 'border-white/20 shadow-2xl') : (isLight ? 'border-dashed border-[#00AAA7]/40 bg-[#F5EDE6]' : 'border-dashed border-white/20 bg-black/10/50')} overflow-hidden flex items-center justify-center relative`}>
                 {d.imagem_url ? (
                    <img 
                      src={d.imagem_url} 
                      alt="Print da Plataforma" 
                      className="w-full h-auto object-contain cursor-pointer transition-transform hover:scale-[1.02]" 
                      style={{ maxHeight: '650px' }} 
                      onClick={() => setExpandedImage(d.imagem_url)}
                    />
                 ) : (
                    <div className="flex flex-col items-center justify-center text-center p-12 opacity-50 min-h-[250px]">
                       <Target className="w-12 h-12 mb-4" />
                       <p className="font-bold text-lg">{d.image_placeholder}</p>
                       <p className="text-sm mt-2">Área reservada para inserir a imagem</p>
                    </div>
                 )}
              </div>
              {d.imagens_secundarias && (
                <div className="flex gap-4 w-full">
                  {d.imagens_secundarias.map((imgUrl: string, idx: number) => (
                    <div key={idx} className={`flex-1 rounded-xl border-2 ${isLight ? 'border-[#00AAA7]/20 shadow-md' : 'border-white/20 shadow-xl'} overflow-hidden cursor-pointer transition-transform hover:scale-105`} onClick={() => setExpandedImage(imgUrl)}>
                      <img src={imgUrl} alt={`Destaque ${idx + 1}`} className="w-full h-full object-cover aspect-square" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6">
          {d.insights_estruturados ? d.insights_estruturados.map((insight: any, i: number) => {
            const isPositivo = insight.tipo === 'positivo';
            const Icon = isPositivo ? CheckCircle2 : Lightbulb;
            const iconColor = isPositivo ? 'text-emerald-500' : 'text-amber-500';
            const borderColor = isPositivo ? (isLight ? 'border-emerald-200 bg-emerald-50' : 'border-emerald-900/50 bg-emerald-950/20') : (isLight ? 'border-amber-200 bg-amber-50' : 'border-amber-900/50 bg-amber-950/20');
            
            return (
              <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl border ${borderColor}`}>
                <Icon className={`w-6 h-6 shrink-0 mt-1 ${iconColor}`} />
                <div>
                   {insight.titulo && <span className={`font-bold ${iconColor} block mb-1 uppercase text-sm`}>{insight.titulo}</span>}
                   <p className={`text-[17px] leading-relaxed ${titleColor}`}>{insight.texto}</p>
                </div>
              </div>
            )
          }) : d.insights_bullets?.map((bullet: string, i: number) => (
            <div key={i} className={`flex items-start gap-4 p-6 rounded-2xl border ${cardBg}`}>
              <ArrowUpRight className="w-6 h-6 text-[#F5842A] shrink-0 mt-1" />
              <p className={`text-lg leading-relaxed ${titleColor}`}>{bullet}</p>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {expandedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300"
            onClick={() => setExpandedImage(null)}
          >
            <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
              <img 
                src={expandedImage} 
                alt="Fullscreen" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
              />
            </div>
          </div>
        )}
      </div>
    )
  }

  if (type === 'three_pillar_framework') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} text-center mb-16`}>{d.titulo}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className={`p-8 rounded-2xl border ${cardBg} flex flex-col items-center text-center group transition-colors`}>
              <div className={`w-16 h-16 rounded-2xl ${isLight ? 'bg-white/50 border-[#00AAA7]/20' : 'bg-black/20 border-white/20'} flex items-center justify-center mb-6 shadow-inner`}>
                <span className="text-2xl font-bold text-[#FE7801]">{num}</span>
              </div>
              <h3 className={`text-2xl font-bold ${titleColor} mb-4`}>{d[`pilar_${num}_nome`]}</h3>
              <p className={`text-lg ${subtitleColor} leading-relaxed`}>{d[`pilar_${num}_texto`]}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'competitor_benchmark') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} mb-12`}>{d.titulo}</h2>
        <div className="grid md:grid-cols-12 gap-8">
          <div className={`col-span-12 md:col-span-4 rounded-2xl border ${cardBg} p-8 flex flex-col justify-center items-center text-center`}>
            <span className="text-sm font-bold text-[#FE7801] uppercase tracking-widest mb-4">{d.subtitulo}</span>
            <h3 className={`text-4xl md:text-5xl font-bold ${titleColor} mb-4 leading-tight`}>{d.nome_concorrente}</h3>
          </div>
          <div className={`col-span-12 md:col-span-8 flex flex-col gap-4 rounded-2xl border ${cardBg} p-8`}>
            <h4 className={`text-xl font-bold ${titleColor} mb-4 flex items-center gap-2`}>
              <Lightbulb className="text-[#F5842A]" />
              Análise Estratégica
            </h4>
            {d.insights_bullets?.map((insight: string, i: number) => (
              <div key={i} className={`flex gap-4 items-start pb-4 border-b ${isLight ? 'border-[#00AAA7]/20' : 'border-white/20'} last:border-0 last:pb-0`}>
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <p className={`text-lg ${subtitleColor} leading-relaxed`}>{insight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'moodboard_identity') {
    return (
      <div className="flex flex-col h-full justify-center">
        <h2 className={`text-4xl md:text-5xl font-bold ${titleColor} mb-12 text-center`}>{d.titulo}</h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12 mt-4">
            <div>
              <h4 className={`text-sm font-bold ${subtitleColor} uppercase tracking-widest mb-4`}>Tipografia Principal</h4>
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`text-6xl font-display uppercase tracking-tighter text-[#F5842A]`}>{d.tipografia_principal}</span>
                <span className={`text-5xl font-script text-[#00AAA7]`}>Pet</span>
              </div>
              <p className={`text-xl font-display ${subtitleColor}`}>{d.fonte_principal_nome}</p>
            </div>
            <div>
              <h4 className={`text-sm font-bold ${subtitleColor} uppercase tracking-widest mb-4`}>Tipografia Secundária</h4>
              <p className={`text-4xl font-sans font-bold ${titleColor} mb-2`}>{d.tipografia_secundaria}</p>
              <p className={`text-xl font-sans ${subtitleColor}`}>{d.fonte_secundaria_nome}</p>
            </div>
          </div>
          <div>
            <h4 className={`text-sm font-bold ${subtitleColor} uppercase tracking-widest mb-6`}>Paleta de Cores</h4>
            <div className="grid grid-cols-3 gap-4">
              {d.paleta_cores?.map((cor: string, i: number) => (
                <div key={i} className="flex flex-col gap-2">
                  <div 
                    className={`w-full aspect-square rounded-2xl shadow-sm border ${isLight ? 'border-[#00AAA7]/10' : 'border-white/10'}`}
                    style={{ backgroundColor: cor }}
                  />
                  <span className={`text-xs font-mono font-bold ${subtitleColor} text-center uppercase`}>{cor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {d.quadros_extras && d.quadros_extras.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mt-16">
             {d.quadros_extras.map((quadro: any, idx: number) => (
               <div key={idx} className={`p-8 rounded-3xl border ${cardBg}`}>
                  <h4 className={`text-xl font-bold ${titleColor} mb-4`}>{quadro.titulo}</h4>
                  <p className={`text-base ${subtitleColor} leading-relaxed`}>{quadro.texto}</p>
               </div>
             ))}
          </div>
        )}
      </div>
    )
  }

  if (type === 'vertical_feature_list') {
    const hasFeatures = d.features && d.features.length > 0;
    return (
      <div className="flex flex-col w-full items-center">
        <h2 className={`text-4xl font-bold ${titleColor} text-center ${d.descricao_secao ? 'mb-8' : hasFeatures ? 'mb-16' : 'mb-10'}`}>{d.titulo}</h2>
        {d.descricao_secao && <p className={`text-xl ${subtitleColor} text-center max-w-4xl mx-auto mb-12 leading-relaxed`}>{d.descricao_secao}</p>}
        <div className={`flex flex-col gap-6 ${hasFeatures ? 'max-w-4xl' : 'max-w-5xl'} mx-auto w-full items-center`}>
          {hasFeatures && d.features.map((f: any, i: number) => (
            <div key={i} className={`p-8 rounded-2xl border ${cardBg} flex flex-col md:flex-row gap-8 items-start hover:border-[#F5842A]/50 transition-colors w-full`}>
              <div className={`w-16 h-16 shrink-0 rounded-2xl ${isLight ? 'bg-white/50 border-[#00AAA7]/20' : 'bg-black/20 border-white/20'} flex items-center justify-center shadow-inner`}>
                <span className="text-2xl font-bold text-[#FE7801]">0{i + 1}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className={`text-2xl font-bold ${titleColor}`}>{f.titulo}</h3>
                <p className={`text-lg ${subtitleColor} leading-relaxed`}>{f.descricao}</p>
              </div>
            </div>
          ))}
          
          {d.imagem_url && (
            <div className={`w-full flex flex-col items-center gap-6 ${hasFeatures ? 'mt-8' : 'mt-2'}`}>
              <div className="w-full bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden flex flex-col p-2">
                <img src={d.imagem_url} alt="Visualização" className="w-full h-auto object-contain rounded-lg" />
              </div>
              {d.link_planilha && (
                <a href={d.link_planilha} target="_blank" rel="noreferrer" 
                   className="group flex items-center gap-3 px-8 py-4 bg-[#00AAA7] hover:bg-[#009693] text-white font-bold rounded-xl transition-all shadow-xl shadow-[#00AAA7]/30 border border-teal-400/40 hover:scale-[1.02] active:scale-[0.98]">
                   {d.link_planilha.includes('spreadsheets') ? (
                     <FileSpreadsheet className="w-5 h-5 text-white" />
                   ) : (
                     <ExternalLink className="w-5 h-5 text-white" />
                   )}
                   <span>{d.link_texto || "Acessar Planilha Completa"}</span>
                   <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
  if (type === 'persona_profile') {
    return (
      <div className={`p-8 md:p-12 rounded-3xl border ${cardBg}`}>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isLight ? 'bg-[#F5EDE6]' : 'bg-red-950/30'} text-[#F5842A] font-bold mb-6`}>
              <Target className="w-5 h-5" /> Persona {d.numero_persona}
            </div>
            <h2 className={`text-4xl font-bold ${titleColor} mb-8 leading-tight`}>{d.nome_persona}</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              <div className={`px-4 py-2 rounded-xl text-sm font-bold border ${isLight ? 'bg-white/50 border-[#00AAA7]/20' : 'bg-black/10 border-white/20'}`}>
                 <span className="text-white/50 block text-xs uppercase mb-1">Dispositivo</span>
                 <span className={titleColor}>{d.dispositivo}</span>
              </div>
              <div className={`px-4 py-2 rounded-xl text-sm font-bold border ${isLight ? 'bg-white/50 border-[#00AAA7]/20' : 'bg-black/10 border-white/20'}`}>
                 <span className="text-white/50 block text-xs uppercase mb-1">Canais</span>
                 <span className={titleColor}>{d.canais}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className={`grid grid-cols-[100px_1fr] border-b ${isLight ? 'border-[#00AAA7]/20' : 'border-white/20'} pb-2`}>
                <span className={`${subtitleColor} font-bold text-sm uppercase tracking-wider`}>Local</span>
                <span className={`${titleColor} font-medium`}>{d.local}</span>
              </div>
              <div className={`grid grid-cols-[100px_1fr] border-b ${isLight ? 'border-[#00AAA7]/20' : 'border-white/20'} pb-2`}>
                <span className={`${subtitleColor} font-bold text-sm uppercase tracking-wider`}>Idade</span>
                <span className={`${titleColor} font-medium`}>{d.idade}</span>
              </div>
              <div className={`grid grid-cols-[100px_1fr] border-b ${isLight ? 'border-[#00AAA7]/20' : 'border-white/20'} pb-2`}>
                <span className={`${subtitleColor} font-bold text-sm uppercase tracking-wider`}>Renda</span>
                <span className={`${titleColor} font-medium`}>{d.renda}</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col justify-center gap-8">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-[#F5EDE6] border-[#00AAA7]/20' : 'bg-black/20 border-white/20'}`}>
              <h4 className="text-lg font-bold text-[#F5842A] mb-4 flex items-center gap-2">Dores</h4>
              <ul className="space-y-3">
                {d.dores_bullets?.map((item: string, i: number) => (
                  <li key={i} className={`flex gap-3 text-lg ${subtitleColor} leading-relaxed`}><span className="text-[#FE7801] mt-1.5">•</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-[#F5EDE6] border-[#00AAA7]/20' : 'bg-black/20 border-white/20'}`}>
              <h4 className="text-lg font-bold text-emerald-500 mb-4 flex items-center gap-2">Desejos</h4>
              <ul className="space-y-3">
                {d.desejos_bullets?.map((item: string, i: number) => (
                  <li key={i} className={`flex gap-3 text-lg ${subtitleColor} leading-relaxed`}><span className="text-emerald-600 mt-1.5">•</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-[#F5EDE6] border-[#00AAA7]/20' : 'bg-black/20 border-white/20'}`}>
              <h4 className="text-lg font-bold text-amber-500 mb-4 flex items-center gap-2">Objeções de Compra</h4>
              <ul className="space-y-3">
                {d.objecoes_bullets?.map((item: string, i: number) => (
                  <li key={i} className={`flex gap-3 text-lg ${subtitleColor} leading-relaxed`}><span className="text-amber-600 mt-1.5">•</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'smart_goal_okr') {
    return (
      <div className={`p-12 rounded-3xl border border-red-900/50 bg-gradient-to-br from-zinc-950 to-red-950/20`}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{d.titulo}</h2>
          <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-medium">{d.fase_projeto}</p>
        </div>
        <div className="grid md:grid-cols-1 max-w-xl mx-auto gap-6">
          <div className="bg-black/50 border border-red-900/30 p-6 rounded-2xl flex flex-col gap-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-950 flex items-center justify-center text-[#F5842A] font-bold font-mono">KR1</div>
            </div>
            <p className="text-lg text-white/80">{d.kr1_texto}</p>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'projections_view') {
    return (
      <div className="flex flex-col h-full w-full py-8">
        <h2 className={`text-4xl font-bold ${titleColor} mb-12 text-center`}>{d.titulo}</h2>
        <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
          {d.projecoes?.map((proj: any, idx: number) => (
            <div key={idx} className={`p-8 rounded-2xl border ${cardBg} flex flex-col md:flex-row gap-8 items-start shadow-sm`}>
              <div className="flex flex-col justify-center items-center bg-[#F5842A] text-white rounded-xl w-24 h-24 shrink-0 shadow-lg shadow-orange-900/20">
                <span className="text-4xl font-bold font-display">{proj.letra}</span>
              </div>
              <div className="flex flex-col pt-2">
                <h3 className={`text-2xl font-bold ${titleColor} mb-3`}>{proj.nome}</h3>
                <p className={`text-lg ${subtitleColor} leading-relaxed`}>{proj.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'campaign_strategy_boxes') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} text-center ${d.descricao_secao ? 'mb-8' : 'mb-16'}`}>{d.titulo}</h2>
        {d.descricao_secao && <p className={`text-xl ${subtitleColor} text-center max-w-4xl mx-auto mb-16 leading-relaxed`}>{d.descricao_secao}</p>}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {d.boxes?.map((box: any, i: number) => (
            <div key={i} className={`flex-1 ${cardBg} border rounded-2xl p-8 flex flex-col shadow-sm hover:-translate-y-1 transition-transform`}>
              <span className="text-5xl font-bold text-[#FE7801] mb-4">{box.percentual}</span>
              <h3 className={`text-2xl font-bold ${titleColor} mb-4`}>{box.nome}</h3>
              <p className={`text-lg ${subtitleColor} leading-relaxed`}>{box.detalhes}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'creative_workflow') {
    const icons: any = { FileText, CheckCircle2, Video, Rocket };

    return (
      <div className="flex flex-col items-center max-w-4xl mx-auto w-full">
        <h2 className={`text-4xl font-bold ${titleColor} mb-4 text-center`}>{d.titulo}</h2>
        <p className={`text-xl ${subtitleColor} mb-16 text-center`}>{d.subtitulo}</p>

        {/* Horizontal Workflow timeline */}
        <div className="flex flex-col md:flex-row items-center w-full justify-between relative mb-16 px-4">
           {/* Connecting Line */}
           <div className={`hidden md:block absolute top-8 left-12 right-12 h-1 -translate-y-1/2 rounded-full ${isLight ? 'bg-zinc-200' : 'bg-black/5'} z-0`} />

           {d.passos?.map((passo: any, i: number) => {
             const Icon = icons[passo.icone] || FileText;
             return (
               <div key={i} className="flex flex-col items-center text-center gap-4 group relative z-10 mb-8 md:mb-0 w-32">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xl transition-all duration-300 group-hover:-translate-y-2 
                    ${isLight ? 'bg-white border-[#00AAA7]/20 shadow-zinc-200/50' : 'bg-black/20 border-white/20 shadow-black/50'}`}>
                    <Icon className="w-7 h-7 text-[#F5842A]" />
                  </div>
                  <h4 className={`font-bold ${titleColor} leading-tight`}>{passo.titulo}</h4>
               </div>
             )
           })}
        </div>

        {/* Link / Button */}
        {d.link_exemplo && (
          <div className={`w-full mt-8 p-8 rounded-3xl border ${cardBg} flex flex-col items-center text-center gap-6 shadow-xl`}>
             <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-2">
                <FileText className="w-6 h-6 text-[#F5842A]" />
             </div>
             <h3 className={`text-2xl font-bold ${titleColor}`}>Documento de Direcionamento Exemplo:</h3>
             <a href={d.link_exemplo} target="_blank" rel="noreferrer" 
                className="group flex items-center gap-3 px-8 py-4 bg-[#F5842A] hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-red-900/20">
                Acessar Documento no Google Docs
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
             <p className={subtitleColor}>Veja o exemplo prático de um roteiro e direcionamento validado em campo.</p>
          </div>
        )}
      </div>
    )
  }

  if (type === 'visual_drawflow') {
    const nodes = d.nodes || {
      top: { title: "Campanhas Geolocalizadas", subtitle: "Meta Ads & Google Maps" },
      mid_left: { title: "Intenção de Rota", subtitle: "Google Maps • Proteção" },
      mid_center: { title: "Ofertas Alto Giro", subtitle: "Meta Ads • Comprar Agora" },
      mid_right: { title: "Alcance Local", subtitle: "Meta Ads • Awareness" },
      bottom_left: { title: "Atendimento WhatsApp", subtitle: "MQL • Dúvidas e Pedido" },
      bottom_right: { title: "Visita ao PDV", subtitle: "Tráfego Físico Direto" },
      final: { title: "Retirada & Upsell (SQL)", subtitle: "Serviços Extras e ERP" }
    };

    return (
      <div className="flex flex-col items-center py-12 w-full overflow-x-auto">
         <h2 className={`text-4xl font-bold ${titleColor} mb-16 self-start`}>{d.titulo}</h2>
         
         <div className="min-w-[900px] w-full flex flex-col items-center relative font-sans">
           {/* Top Node */}
           <div className={`bg-[#F5EDE6] text-[#2A2D2A] font-bold px-8 py-4 rounded-xl flex flex-col items-center gap-1 z-10 shadow-lg border border-white/20`}>
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-[#00AAA7]" />
                <span className="text-lg">{nodes.top.title}</span>
              </div>
              {nodes.top.subtitle && <span className="text-sm font-medium opacity-80">{nodes.top.subtitle}</span>}
           </div>

           {/* Vertical line from Top */}
           <div className={`h-12 w-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'}`} />
           
           {/* Horizontal span line covering all 3 branches */}
           <div className={`w-[75%] h-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'}`} />
           
           {/* 3 Dropdown lines */}
           <div className="flex w-[75%] justify-between">
              <div className={`h-12 w-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'} relative`}>
                <ChevronRight className={`absolute -bottom-2 -left-2.5 w-5 h-5 ${isLight ? 'text-zinc-400' : 'text-white/50'} rotate-90`} />
              </div>
              <div className={`h-12 w-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'} relative`}>
                <ChevronRight className={`absolute -bottom-2 -left-2.5 w-5 h-5 ${isLight ? 'text-zinc-400' : 'text-white/50'} rotate-90`} />
              </div>
              <div className={`h-12 w-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'} relative`}>
                <ChevronRight className={`absolute -bottom-2 -left-2.5 w-5 h-5 ${isLight ? 'text-zinc-400' : 'text-white/50'} rotate-90`} />
              </div>
           </div>

           {/* Branch Nodes */}
           <div className="flex w-full justify-between gap-6 px-12 mt-4 z-10">
             <div className={`flex-1 ${cardBg} p-6 rounded-xl text-center shadow-md relative border ${isLight ? 'border-zinc-200' : 'border-white/5'}`}>
                <h4 className="font-bold text-[#F5842A] mb-2 text-lg">{nodes.mid_left.title}</h4>
                <p className={`text-xs ${subtitleColor}`}>{nodes.mid_left.subtitle}</p>
             </div>
             <div className={`flex-1 ${cardBg} p-6 rounded-xl text-center shadow-md relative border ${isLight ? 'border-zinc-200' : 'border-white/5'}`}>
                <h4 className="font-bold text-[#F5842A] mb-2 text-lg">{nodes.mid_center.title}</h4>
                <p className={`text-xs ${subtitleColor}`}>{nodes.mid_center.subtitle}</p>
             </div>
             <div className={`flex-1 ${cardBg} p-6 rounded-xl text-center shadow-md relative border ${isLight ? 'border-zinc-200' : 'border-white/5'}`}>
                <h4 className="font-bold text-[#F5842A] mb-2 text-lg">{nodes.mid_right.title}</h4>
                <p className={`text-xs ${subtitleColor}`}>{nodes.mid_right.subtitle}</p>
             </div>
           </div>

           {/* Separate Convergence Paths */}
           <div className="flex w-full justify-between gap-6 px-12 mt-0">
             
             {/* Left Group (Converges to Bottom Left) */}
             <div className="flex-[2] flex flex-col items-center relative pt-6">
                <div className="flex w-[55%] justify-between absolute top-0">
                  <div className={`h-8 w-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'}`} />
                  <div className={`h-8 w-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'}`} />
                </div>
                <div className={`w-[55%] h-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'} mt-8`} />
                <div className={`h-8 w-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'} relative`}>
                  <ChevronRight className={`absolute -bottom-2 -left-2.5 w-5 h-5 ${isLight ? 'text-zinc-400' : 'text-white/50'} rotate-90`} />
                </div>
                <div className="bg-[#F5842A] text-white font-bold px-12 py-5 rounded-xl shadow-lg flex flex-col items-center gap-1 text-center mt-2 z-10 w-full max-w-sm justify-center border border-[#FE7801]">
                   <span className="text-lg">{nodes.bottom_left.title}</span>
                   <span className="text-xs font-normal text-white/90">{nodes.bottom_left.subtitle}</span>
                </div>
             </div>

             {/* Right Group (Goes to Bottom Right) */}
             <div className="flex-[1] flex flex-col items-center relative pt-6">
                <div className={`h-16 w-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'} relative`}>
                  <ChevronRight className={`absolute -bottom-2 -left-2.5 w-5 h-5 ${isLight ? 'text-zinc-400' : 'text-white/50'} rotate-90`} />
                </div>
                <div className="bg-[#00AAA7] text-white font-bold px-8 py-5 rounded-xl shadow-lg flex flex-col items-center gap-1 text-center mt-2 z-10 w-full border border-teal-500">
                   <span className="text-lg">{nodes.bottom_right.title}</span>
                   <span className="text-xs font-normal text-white/90">{nodes.bottom_right.subtitle}</span>
                </div>
             </div>
             
           </div>

           {/* Connectors from Bottom Left to Final */}
           <div className="w-full relative h-12">
             {/* Vertical drop from Bottom Left */}
             <div className={`absolute top-0 h-12 w-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'}`} style={{ left: 'calc(48px + (100% - 120px) / 3)' }} />
             
             {/* Horizontal line from Bottom Left to Center */}
             <div className={`absolute top-12 h-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'}`} style={{ left: 'calc(48px + (100% - 120px) / 3)', right: '50%' }} />

             {/* Vertical drop down into Final */}
             <div className={`absolute top-12 h-8 w-px ${isLight ? 'bg-zinc-300' : 'bg-white/20'}`} style={{ left: '50%' }}>
               <ChevronRight className={`absolute -bottom-2 -left-2.5 w-5 h-5 ${isLight ? 'text-zinc-400' : 'text-white/50'} rotate-90`} />
             </div>
           </div>

           {/* Final node */}
           <div className="flex w-full flex-col items-center mt-8 relative z-10">
              <div className="bg-[#F5EDE6] text-[#2A2D2A] font-bold px-12 py-5 rounded-xl flex flex-col items-center gap-1 shadow-lg border border-white/20">
                 <span className="text-lg">{nodes.final.title}</span>
                 <span className="text-sm font-medium opacity-80">{nodes.final.subtitle}</span>
              </div>
           </div>

         </div>
      </div>
    )
  }

  if (type === 'spreadsheet_placeholder') {
    return (
      <div>
         <div className="flex items-center gap-4 mb-12">
           <FileSpreadsheet className="w-10 h-10 text-[#FE7801]" />
           <h2 className={`text-4xl font-bold ${titleColor}`}>{d.titulo}</h2>
         </div>
         
         {d.imagem_url ? (
           <div className="w-full flex flex-col gap-6">
             <div className="w-full bg-white border border-[#00AAA7]/20 rounded-xl shadow-lg overflow-hidden flex flex-col p-4">
               <img src={d.imagem_url} alt={d.titulo} className="w-full h-auto object-contain rounded-lg" />
             </div>
             {d.link_planilha && (
               <div className="w-full flex justify-center mt-4">
                 <a href={d.link_planilha} target="_blank" rel="noreferrer" 
                    className="group flex items-center gap-3 px-8 py-4 bg-[#F5842A] hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-red-900/20">
                    <FileSpreadsheet className="w-5 h-5" />
                    Acessar {d.tipo_planilha} Completa
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
             )}
           </div>
         ) : (
           <div className="w-full h-[500px] bg-white border border-[#00AAA7]/20 rounded-xl shadow-sm overflow-hidden flex flex-col relative">
             {/* Excel Header */}
             <div className="w-full h-8 bg-white/50 border-b border-[#00AAA7]/20 flex">
                <div className="w-12 h-full border-r border-[#00AAA7]/20 bg-white/50" />
                {['A', 'B', 'C', 'D', 'E', 'F'].map(col => (
                  <div key={col} className="flex-1 border-r border-[#00AAA7]/20 flex items-center justify-center text-xs font-mono text-[#00AAA7]/50 font-bold">{col}</div>
                ))}
             </div>
             {/* Excel Rows */}
             <div className="flex-1 flex flex-col">
               {[1,2,3,4,5,6,7,8,9,10].map(row => (
                 <div key={row} className="flex-1 flex border-b border-zinc-100 last:border-0">
                    <div className="w-12 h-full border-r border-[#00AAA7]/20 bg-[#F5EDE6] flex items-center justify-center text-xs font-mono text-[#00AAA7]/50">{row}</div>
                    {['A', 'B', 'C', 'D', 'E', 'F'].map(col => (
                      <div key={col} className="flex-1 border-r border-zinc-100" />
                    ))}
                 </div>
               ))}
             </div>
             
             {/* Overlay overlay */}
             <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-white border border-[#00AAA7]/20 shadow-2xl rounded-2xl p-8 max-w-md text-center flex flex-col items-center">
                  <FileSpreadsheet className="w-16 h-16 text-white/80 mb-6" />
                  <h3 className="text-2xl font-bold text-[#2A2D2A] mb-3">Planilha de {d.tipo_planilha}</h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    Este espaço está reservado para a inserção da planilha interativa de <b>{d.tipo_planilha}</b>.
                  </p>
                </div>
             </div>
           </div>
         )}
      </div>
    )
  }

  // Fallback for missing types
  return (
    <div className={`p-8 border border-[#F5842A] ${cardBg} text-[#F5842A]`}>
      <p>⚠️ Missing renderer for slide type: {type}</p>
    </div>
  )
}

export default function ReportViewer() {
  const { slides } = presentationData

  return (
    <div className="min-h-screen bg-[#F5EDE6] selection:bg-red-500/30 font-sans">
      {slides.map((slide, index) => {
        const themeClass = getSectionTheme(slide.id, slide.slide_type)
        return (
          <SectionWrapper key={slide.id || index} themeClass={themeClass}>
            <RenderBlock slide={slide} />
          </SectionWrapper>
        )
      })}
    </div>
  )
}
