/**
         * MUSEUM SLIDES DATABASE
         * Contains structural data, interactive widgets, narrative texts, and quizzes
         */
        const museumData = [
            {
                id: 'splash',
                pioneer: 'Boas-Vindas',
                badgeColor: 'bg-slate-800 text-white border-slate-800',
                type: 'splash',
                title: 'Museu Virtual dos Pioneiros da Computação',
                subtitle: 'Uma jornada imersiva e narrada pelas mentes brilhantes que moldaram a Era da Informação.',
                narrationText: 'Bem-vindo ao Museu Virtual dos Pioneiros da Computação. Nesta experiência interativa e narrada, você conhecerá as contribuições revolucionárias de Ada Lovelace, John von Neumann e Claude Shannon. Clique no botão Iniciar Tour Virtual para começar sua jornada.',
                contentHtml: `
                    <div class="text-center space-y-6 max-w-2xl mx-auto py-4">
                        <div class="inline-flex p-4 bg-blue-50 text-blue-600 rounded-3xl mb-2 shadow-inner">
                            <i class="fa-solid fa-monument text-5xl sm:text-6xl"></i>
                        </div>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Exposição Histórica & Algorítmica
                        </h2>
                        <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
                            Explore invenções, máquinas conceituais, teorias da informação e arquiteturas modernas com <strong class="text-slate-800">narração por voz em português</strong> e <strong class="text-slate-800">desafios interativos</strong>.
                        </p>

                        <!-- Pioneers Preview Grid -->
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
                            <div class="p-3 rounded-2xl bg-purple-50 border border-purple-100 flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">1</div>
                                <div>
                                    <div class="font-bold text-sm text-purple-950">Ada Lovelace</div>
                                    <div class="text-xs text-purple-700">A 1ª Programadora</div>
                                </div>
                            </div>
                            <div class="p-3 rounded-2xl bg-sky-50 border border-sky-100 flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">2</div>
                                <div>
                                    <div class="font-bold text-sm text-sky-950">John von Neumann</div>
                                    <div class="text-xs text-sky-700">Arquitetura de CPU</div>
                                </div>
                            </div>
                            <div class="p-3 rounded-2xl bg-teal-50 border border-teal-100 flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">3</div>
                                <div>
                                    <div class="font-bold text-sm text-teal-950">Claude Shannon</div>
                                    <div class="text-xs text-teal-700">Teoria da Informação</div>
                                </div>
                            </div>
                        </div>

                        <div class="pt-4">
                            <button onclick="app.startTour()" class="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 mx-auto pulse-glow">
                                <i class="fa-solid fa-play"></i>
                                <span>Iniciar Tour Virtual</span>
                            </button>
                        </div>
                    </div>
                `
            },
            {
                id: 'ada-1',
                pioneer: 'Ada Lovelace',
                badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
                type: 'narrative',
                title: 'Ada Lovelace: O Primeiro Algoritmo da História',
                narrationText: 'Ada Lovelace, matemática britânica, colaborou com Charles Babbage na Máquina Analítica. Em 1843, ela publicou o primeiro algoritmo da história projetado para ser executado por uma máquina, calculando os Números de Bernoulli.',
                contentHtml: `
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div class="lg:col-span-7 space-y-4">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
                                <i class="fa-solid fa-feather"></i> 1815 – 1852 • A Poeta dos Números
                            </div>
                            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                                O Salto Conceitual do Cálculo para o Algoritmo
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Enquanto Charles Babbage imaginava a <strong class="text-purple-900">Máquina Analítica</strong> apenas como uma calculadora mecânica gigante, Ada Lovelace enxergou muito além.
                            </p>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Ela descreveu com precisão como programar a máquina por meio de cartões perfurados, criando os conceitos originais de <strong>sub-rotinas</strong>, <strong>loops de repetição</strong> e <strong>desvios condicionais</strong>.
                            </p>

                            <div class="bg-purple-50 p-4 rounded-2xl border-l-4 border-purple-600 text-purple-900 text-xs sm:text-sm italic">
                                "A Máquina Analítica tece padrões algébricos assim como o tear de Jacquard tece flores e folhas."
                                <span class="block font-bold not-italic mt-1 text-purple-700">— Ada Lovelace (1843)</span>
                            </div>
                        </div>

                        <!-- Interactive Widget: Analytical Engine Punch Card Simulator -->
                        <div class="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-center">
                            <h3 class="text-xs font-bold tracking-wider text-slate-500 uppercase">Simulador de Cartão Perfurado (Bernoulli B₁)</h3>
                            <div class="bg-amber-100/70 border border-amber-200 p-4 rounded-xl font-mono text-xs text-slate-800 space-y-2">
                                <div class="flex justify-between items-center border-b border-amber-200 pb-2">
                                    <span class="font-bold text-purple-900" id="card-step-title">Instrução Nº 1</span>
                                    <span class="text-[10px] bg-amber-200 px-2 py-0.5 rounded" id="card-num-badge">Cartão 01/03</span>
                                </div>
                                <div class="grid grid-cols-5 gap-1 text-center py-2" id="card-operation-view">
                                    <div class="p-1.5 bg-amber-200 rounded font-bold border border-amber-300">v1</div>
                                    <div class="p-1.5 bg-amber-200 rounded font-bold border border-amber-300">×</div>
                                    <div class="p-1.5 bg-amber-200 rounded font-bold border border-amber-300">v2</div>
                                    <div class="p-1.5 bg-amber-200 rounded font-bold border border-amber-300">=</div>
                                    <div class="p-1.5 bg-purple-200 text-purple-900 font-bold rounded border border-purple-300">v4</div>
                                </div>
                                <p class="text-[11px] text-slate-600 text-left pt-1" id="card-desc">
                                    <i class="fa-solid fa-circle-info text-purple-600"></i> Multiplica variáveis iniciais armazenadas nas engrenagens.
                                </p>
                            </div>

                            <button onclick="app.nextPunchCardStep()" class="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs shadow transition flex items-center justify-center gap-2">
                                <i class="fa-solid fa-forward"></i>
                                <span>Processar Próximo Cartão</span>
                            </button>
                        </div>
                    </div>
                `
            },
            {
                id: 'ada-2',
                pioneer: 'Ada Lovelace',
                badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
                type: 'narrative',
                title: 'Ada Lovelace: Computação Simbólica e Visão Poética',
                narrationText: 'Lovelace percebeu que a computação não estava restrita a números. Se a máquina pudesse manipular símbolos com regras bem definidas, poderia compor músicas, desenhar e processar qualquer tipo de dado abstrato.',
                contentHtml: `
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div class="lg:col-span-6 space-y-4">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
                                <i class="fa-solid fa-brain"></i> Visão Profética da Informática
                            </div>
                            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                                Do Tear Mecânico à Arte Digital
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Inspirada pelo <strong>Tear de Jacquard</strong>, que utilizava cartões perfurados para criar tecidos com estampas complexas automáticas, Ada associou o mecanismo à lógica matemática.
                            </p>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Ao separar a máquina física (o <i>hardware</i>) das instruções programadas nos cartões (o <i>software</i>), Ada fundou as bases da ciência da computação universal.
                            </p>
                        </div>

                        <!-- Hardware vs Software Concept -->
                        <div class="lg:col-span-6 bg-purple-900 text-white p-6 rounded-3xl shadow-lg space-y-4">
                            <h3 class="text-xs font-bold tracking-widest text-purple-300 uppercase flex items-center gap-2">
                                <i class="fa-solid fa-diagram-project"></i> Abstração: Hardware x Software
                            </h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800">
                                <div class="bg-purple-50 p-4 rounded-2xl border border-purple-200">
                                    <div class="text-xs font-bold text-purple-900 uppercase">Hardware (Babbage)</div>
                                    <div class="text-sm font-bold text-slate-900 mt-1">Engrenagens e Eixos</div>
                                    <p class="text-xs text-slate-600 mt-1">Dispositivo físico mecânico de bronze para efetuar rotações.</p>
                                </div>
                                <div class="bg-white p-4 rounded-2xl border border-purple-300 shadow-md">
                                    <div class="text-xs font-bold text-purple-600 uppercase">Software (Lovelace)</div>
                                    <div class="text-sm font-bold text-slate-900 mt-1">Cartões de Instrução</div>
                                    <p class="text-xs text-slate-600 mt-1">Sequências de comandos, laços condicionais e variáveis.</p>
                                </div>
                            </div>
                            <div class="p-3 bg-purple-800/80 rounded-xl text-xs text-purple-200 flex items-center gap-3">
                                <i class="fa-solid fa-lightbulb text-yellow-300 text-lg"></i>
                                <span>Em 1980, a linguagem de programação <strong>ADA</strong> foi criada pelo Departamento de Defesa dos EUA em sua homenagem.</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: 'ada-quiz',
                pioneer: 'Ada Lovelace',
                badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
                type: 'quiz',
                title: 'Desafio Ada Lovelace',
                question: 'Qual foi o principal avanço conceitual de Ada Lovelace sobre a Máquina Analítica em 1843?',
                options: [
                    'Invenção dos transistores de silício para acelerar a máquina.',
                    'Percepção de que a máquina podia manipular símbolos e criar algoritmos, indo além dos números.',
                    'Criação do primeiro monitor gráfico de tubo de raios catódicos.'
                ],
                correctAnswer: 1,
                narrationText: 'Pergunta de desafio sobre Ada Lovelace: Qual foi o principal avanço conceitual de Ada Lovelace sobre a Máquina Analítica em 1843?'
            },
            {
                id: 'von-1',
                pioneer: 'John von Neumann',
                badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
                type: 'narrative',
                title: 'John von Neumann: A Arquitetura do Computador Moderno',
                narrationText: 'John von Neumann, polímata húngaro-americano, formulou em 1945 a Arquitetura von Neumann. Ela estabeleceu a estrutura de CPU, Memória Principal e Dispositivos de Entrada e Saída, onde programas e dados residem na mesma memória.',
                contentHtml: `
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div class="lg:col-span-6 space-y-4">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-700">
                                <i class="fa-solid fa-microchip"></i> 1903 – 1957 • O Polímata Genial
                            </div>
                            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                                O Conceito de Programa Armazenado
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Antes de von Neumann, computadores como o ENIAC exigiam o rearranjo manual de milhares de cabos e interruptores para mudar de tarefa.
                            </p>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                von Neumann revolucionou a computação ao propor que as <strong class="text-sky-900">instruções do programa</strong> fossem salvas no mesmo espaço da <strong class="text-sky-900">memória principal (RAM)</strong> que armazena os dados.
                            </p>
                        </div>

                        <!-- Interactive Architecture Widget -->
                        <div class="lg:col-span-6 bg-slate-900 text-white p-6 rounded-3xl shadow-xl space-y-4">
                            <div class="text-xs font-bold tracking-widest text-sky-400 uppercase flex justify-between items-center">
                                <span><i class="fa-solid fa-cubes"></i> Diagrama da Arquitetura von Neumann</span>
                                <span class="bg-sky-900 text-sky-200 px-2 py-0.5 rounded text-[10px]">Clique nos blocos</span>
                            </div>

                            <div class="grid grid-cols-1 gap-2.5 text-center">
                                <!-- Memory Box -->
                                <button onclick="app.highlightArchBlock('ram')" id="arch-ram" class="p-3 bg-sky-950 border border-sky-700 rounded-xl hover:border-sky-400 transition text-left">
                                    <div class="text-xs font-bold text-sky-300">MEMÓRIA PRINCIPAL (RAM)</div>
                                    <div class="text-[11px] text-slate-300 mt-0.5">Armazena Dados [0110] e Instruções de Código [LOAD/ADD]</div>
                                </button>

                                <!-- Bus Arrows -->
                                <div class="text-sky-400 text-xs flex justify-around py-0.5">
                                    <i class="fa-solid fa-arrow-down"></i>
                                    <span class="text-[10px] text-slate-400 font-mono">Barramento de Dados e Controle</span>
                                    <i class="fa-solid fa-arrow-up"></i>
                                </div>

                                <!-- CPU Box -->
                                <button onclick="app.highlightArchBlock('cpu')" id="arch-cpu" class="p-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-sky-400 transition text-left grid grid-cols-2 gap-2">
                                    <div class="p-2 bg-sky-900/60 rounded-lg border border-sky-800">
                                        <div class="text-xs font-bold text-sky-200">Unidade de Controle (UC)</div>
                                        <div class="text-[10px] text-slate-300">Decodifica e orquestra instruções</div>
                                    </div>
                                    <div class="p-2 bg-sky-900/60 rounded-lg border border-sky-800">
                                        <div class="text-xs font-bold text-sky-200">ULA (Aritmética e Lógica)</div>
                                        <div class="text-[10px] text-slate-300">Executa operações matemáticas</div>
                                    </div>
                                </button>

                                <!-- I/O Box -->
                                <button onclick="app.highlightArchBlock('io')" id="arch-io" class="p-2 bg-slate-800/80 border border-slate-700 rounded-xl hover:border-sky-400 transition text-xs text-slate-300 flex justify-around items-center">
                                    <span><i class="fa-solid fa-keyboard text-sky-400"></i> Entrada (Teclado/Cartão)</span>
                                    <span><i class="fa-solid fa-desktop text-sky-400"></i> Saída (Monitor/Impressora)</span>
                                </button>
                            </div>

                            <p id="arch-info-text" class="text-xs text-sky-300 bg-sky-950/80 p-2.5 rounded-xl border border-sky-800/80">
                                Clique nos blocos acima para inspecionar cada componente da CPU e Memória!
                            </p>
                        </div>
                    </div>
                `
            },
            {
                id: 'von-2',
                pioneer: 'John von Neumann',
                badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
                type: 'narrative',
                title: 'John von Neumann: Teoria dos Jogos e Autômatos',
                narrationText: 'Além dos computadores, von Neumann co-fundou a Teoria dos Jogos na economia, contribuiu para a física nuclear e criou a teoria dos Autômatos Celulares, demonstrando como sistemas autorreplicantes simples podem gerar complexidade biológica.',
                contentHtml: `
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div class="lg:col-span-7 space-y-4">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-700">
                                <i class="fa-solid fa-chess"></i> Estratégia, Física e Biologia Digital
                            </div>
                            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                                Uma Mente Incrivelmente Multidisciplinar
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                As contribuições de von Neumann transformaram múltiplas áreas do conhecimento no século XX:
                            </p>
                            <ul class="space-y-2 text-sm sm:text-base text-slate-700">
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check-circle text-sky-600 mt-1"></i>
                                    <span><strong>Teoria dos Jogos:</strong> Formulou a matemática das decisões estratégicas na economia e geopolítica.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check-circle text-sky-600 mt-1"></i>
                                    <span><strong>Autômatos Celulares:</strong> Modelou matemática de robôs e estruturas capazes de se autorreplicar sem intervenção humana.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <i class="fa-solid fa-check-circle text-sky-600 mt-1"></i>
                                    <span><strong>Simulações Científicas:</strong> Desenvolveu métodos numéricos fundamentais para simulações de física em supercomputadores.</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Cellular Automata Grid Card -->
                        <div class="lg:col-span-5 bg-sky-50 border border-sky-200 p-6 rounded-3xl space-y-3 text-center">
                            <h3 class="text-xs font-bold uppercase text-sky-800 tracking-wider">Simulação: Autômato Celular 2D</h3>
                            <div class="grid grid-cols-5 gap-1.5 p-3 bg-white rounded-2xl shadow-inner border border-sky-100 justify-items-center" id="automata-grid">
                                <div class="w-8 h-8 rounded-lg bg-sky-100"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-600 shadow-sm"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-100"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-600 shadow-sm"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-100"></div>
                                
                                <div class="w-8 h-8 rounded-lg bg-sky-600 shadow-sm"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-900 shadow-md"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-600 shadow-sm"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-100"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-600 shadow-sm"></div>

                                <div class="w-8 h-8 rounded-lg bg-sky-100"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-600 shadow-sm"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-100"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-600 shadow-sm"></div>
                                <div class="w-8 h-8 rounded-lg bg-sky-100"></div>
                            </div>
                            <p class="text-xs text-slate-500">
                                Regras locais de vizinhança geram padrões vivos e dinâmicos de complexidade.
                            </p>
                        </div>
                    </div>
                `
            },
            {
                id: 'von-quiz',
                pioneer: 'John von Neumann',
                badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
                type: 'quiz',
                title: 'Desafio John von Neumann',
                question: 'O que caracteriza a Arquitetura von Neumann utilizada na esmagadora maioria dos computadores atuais?',
                options: [
                    'Uso exclusivo de engrenagens de bronze sem componentes eletrônicos.',
                    'Armazenamento conjunto de dados e programas na mesma memória principal (RAM).',
                    'Necessidade de trocar fisicamente todos os cabos para rodar um novo programa.'
                ],
                correctAnswer: 1,
                narrationText: 'Pergunta de desafio sobre John von Neumann: O que caracteriza a Arquitetura von Neumann utilizada na esmagadora maioria dos computadores atuais?'
            },
            {
                id: 'shannon-1',
                pioneer: 'Claude Shannon',
                badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
                type: 'narrative',
                title: 'Claude Shannon: Álgebra Booleana em Circuitos Elétricos',
                narrationText: 'Em 1937, Claude Shannon demonstrou em sua tese de mestrado no MIT que relés elétricos podiam resolver operações de Álgebra Booleana, fundando as bases teóricas de todos os circuitos digitais.',
                contentHtml: `
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div class="lg:col-span-7 space-y-4">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-700">
                                <i class="fa-solid fa-toggle-on"></i> 1916 – 2001 • O Pai da Teoria da Informação
                            </div>
                            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                                Transformando Lógica em Eletricidade
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Aos 21 anos, Shannon percebeu que interruptores elétricos simples (abertos ou fechados) podiam representar valores de Verdadeiro (1) e Falso (0).
                            </p>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Ele provou que conectando relés em série ou paralelo era possível realizar cálculos lógicos complexos (portas E, OU, NÃO). Toda a eletrônica de microprocessadores modernos nasceu dessa descoberta.
                            </p>
                        </div>

                        <!-- Interactive Logic Gate Simulator -->
                        <div class="lg:col-span-5 bg-slate-900 text-white p-6 rounded-3xl space-y-4 shadow-xl">
                            <div class="flex justify-between items-center text-xs font-bold text-teal-400 uppercase">
                                <span><i class="fa-solid fa-bolt"></i> Circuito Interativo: Porta Lógica E (AND)</span>
                                <span class="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded">Álgebra Booleana</span>
                            </div>

                            <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-3">
                                <div class="flex justify-around items-center gap-2">
                                    <button onclick="app.toggleGateSwitch('A')" id="switch-A" class="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-mono font-bold rounded-xl border border-slate-600 transition">
                                        Entrada A: <span id="val-A" class="text-red-400">0 (Aberto)</span>
                                    </button>
                                    <span class="text-xs font-bold text-teal-400">&</span>
                                    <button onclick="app.toggleGateSwitch('B')" id="switch-B" class="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-mono font-bold rounded-xl border border-slate-600 transition">
                                        Entrada B: <span id="val-B" class="text-red-400">0 (Aberto)</span>
                                    </button>
                                </div>

                                <div class="p-3 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between">
                                    <span class="text-xs text-slate-400">Lâmpada de Saída (A AND B):</span>
                                    <div id="bulb-status" class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center transition-all duration-300">
                                        <i class="fa-solid fa-lightbulb text-slate-500"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-[11px] text-slate-400 text-center">
                                Clique nos botões para fechar os interruptores e testar a condição lógica!
                            </p>
                        </div>
                    </div>
                `
            },
            {
                id: 'shannon-2',
                pioneer: 'Claude Shannon',
                badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
                type: 'narrative',
                title: 'Claude Shannon: O BIT e a Entropia de Informação',
                narrationText: 'Em 1948, Shannon publicou "Uma Teoria Matemática da Comunicação", estabelecendo a palavra BIT como a unidade fundamental de informação e definindo os limites matemáticos de velocidade e compressão de dados.',
                contentHtml: `
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div class="lg:col-span-6 space-y-4">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-700">
                                <i class="fa-solid fa-signal"></i> 1948 • A Bíblia da Comunicação Digital
                            </div>
                            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                                O Nascimento do BIT e da Compressão de Dados
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Shannon formalizou o termo <strong class="text-teal-900">BIT (Binary Digit)</strong> como o átomo indivisível da informação digital.
                            </p>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Ele provou matematicamente que qualquer tipo de sinal — voz, imagem, vídeo ou texto — pode ser codificado em bits e transmitido sem erros através de meios ruidosos usando códigos de correção de erro.
                            </p>
                        </div>

                        <!-- Communication Model Visualizer -->
                        <div class="lg:col-span-6 bg-teal-50 border border-teal-200 p-6 rounded-3xl space-y-4">
                            <h3 class="text-xs font-bold uppercase text-teal-900 tracking-wider">Modelo Geral de Comunicação de Shannon</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs font-bold">
                                <div class="bg-white p-3 rounded-xl border border-teal-200 shadow-sm">
                                    <i class="fa-solid fa-tower-broadcast text-teal-600 text-lg mb-1 block"></i>
                                    <span>Emissor / Fonte</span>
                                    <div class="text-[10px] font-normal text-slate-500">Codifica em Bits</div>
                                </div>
                                <div class="bg-amber-100 p-3 rounded-xl border border-amber-300 shadow-sm">
                                    <i class="fa-solid fa-wifi text-amber-700 text-lg mb-1 block"></i>
                                    <span>Canal com Ruído</span>
                                    <div class="text-[10px] font-normal text-amber-800">Entropia / Sinal</div>
                                </div>
                                <div class="bg-white p-3 rounded-xl border border-teal-200 shadow-sm">
                                    <i class="fa-solid fa-satellite-dish text-teal-600 text-lg mb-1 block"></i>
                                    <span>Receptor / Destino</span>
                                    <div class="text-[10px] font-normal text-slate-500">Decodifica o Sinal</div>
                                </div>
                            </div>
                            <div class="p-3 bg-white rounded-2xl border border-teal-100 text-xs text-slate-600 space-y-1">
                                <span class="font-bold text-teal-900"><i class="fa-solid fa-calculator"></i> Limite de Shannon (Capacidade C):</span>
                                <p class="font-mono text-[11px] text-teal-800">C = B × log₂(1 + S/N)</p>
                                <p class="text-[11px] text-slate-500">Formulação teórica que rege a velocidade do Wi-Fi, 5G e cabos de fibra ótica.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: 'shannon-quiz',
                pioneer: 'Claude Shannon',
                badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
                type: 'quiz',
                title: 'Desafio Claude Shannon',
                question: 'O que Claude Shannon definiu como a unidade fundamental de medição da informação em 1948?',
                options: [
                    'O Hertz (Hz) de frequência de ondas.',
                    'O Bit (Binary Digit), representando 0 ou 1.',
                    'O Teraflop de capacidade de processamento.'
                ],
                correctAnswer: 1,
                narrationText: 'Pergunta de desafio sobre Claude Shannon: O que Claude Shannon definiu como a unidade fundamental de medição da informação em 1948?'
            },
            {
                id: 'final',
                pioneer: 'Encerramento',
                badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
                type: 'final',
                title: 'Jornada Concluída com Sucesso!',
                narrationText: 'Parabéns! Você concluiu a exposição no Museu Virtual dos Pioneiros da Computação. O tour será reiniciado automaticamente em 10 segundos.',
                contentHtml: '' // Dynamically rendered based on score
            }
        ];

        /**
         * APPLICATION CONTROLLER & ENGINE CLASS
         */
        class MuseumApp {
            constructor() {
                this.currentIndex = 0;
                this.score = 0;
                this.totalQuizzes = museumData.filter(m => m.type === 'quiz').length;
                this.isMuted = false;
                this.isPlaying = true;
                this.userHasStarted = false;
                
                // Active Timers Tracking for clean cleanup
                this.speechTimeout = null;
                this.quizTimerInterval = null;
                this.autoAdvanceTimeout = null;
                this.finalTimerInterval = null;
                this.finalSeconds = 10;

                // Speech Synthesis Setup
                this.synth = window.speechSynthesis;
                
                // Interactive Widget state
                this.punchCardIndex = 0;
                this.gateA = false;
                this.gateB = false;

                this.initUI();
            }

            initUI() {
                this.renderSlide();
            }

            getPtVoice() {
                if (!this.synth) return null;
                const voices = this.synth.getVoices();
                return voices.find(v => v.lang === 'pt-BR') || 
                       voices.find(v => v.lang.startsWith('pt')) || 
                       voices[0] || null;
            }

            clearAllTimersAndSpeech() {
                if (this.speechTimeout) clearTimeout(this.speechTimeout);
                if (this.quizTimerInterval) clearInterval(this.quizTimerInterval);
                if (this.autoAdvanceTimeout) clearTimeout(this.autoAdvanceTimeout);
                if (this.finalTimerInterval) clearInterval(this.finalTimerInterval);

                this.speechTimeout = null;
                this.quizTimerInterval = null;
                this.autoAdvanceTimeout = null;
                this.finalTimerInterval = null;

                if (this.synth) {
                    this.synth.cancel();
                }
            }

            startTour() {
                this.userHasStarted = true;
                this.currentIndex = 1; // Advance to Ada Lovelace
                this.renderSlide();
            }

            renderSlide() {
                this.clearAllTimersAndSpeech();

                const slide = museumData[this.currentIndex];
                const totalSlides = museumData.length;

                // Update Top Navigation Indicators
                document.getElementById('slide-counter').innerText = `Slide ${this.currentIndex + 1} de ${totalSlides}`;
                
                const pioneerBadge = document.getElementById('current-pioneer-badge');
                pioneerBadge.className = `px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${slide.badgeColor}`;
                pioneerBadge.innerText = slide.pioneer;

                // Progress Bar %
                const progressPct = ((this.currentIndex + 1) / totalSlides) * 100;
                document.getElementById('tour-progress').style.width = `${progressPct}%`;

                // Navigation Buttons enablement
                document.getElementById('btn-prev').disabled = (this.currentIndex === 0);
                document.getElementById('btn-next').disabled = (this.currentIndex === totalSlides - 1);

                // Container Target
                const container = document.getElementById('slide-content');
                container.className = "fade-in flex-grow flex flex-col justify-center";

                if (slide.type === 'splash') {
                    container.innerHTML = slide.contentHtml;
                    this.speakText(slide.narrationText);
                } 
                else if (slide.type === 'narrative') {
                    container.innerHTML = slide.contentHtml;
                    if (this.userHasStarted) {
                        this.speakText(slide.narrationText, () => {
                            // On narrative speech completion, advance automatically
                            if (this.isPlaying && this.currentIndex < totalSlides - 1) {
                                this.autoAdvanceTimeout = setTimeout(() => this.nextSlide(), 1200);
                            }
                        });
                    }
                } 
                else if (slide.type === 'quiz') {
                    this.renderQuizSlide(slide, container);
                } 
                else if (slide.type === 'final') {
                    this.renderFinalSlide(container);
                }
            }

            renderQuizSlide(slide, container) {
                let quizAnswered = false;
                let quizSeconds = 12;

                const optionsHtml = slide.options.map((opt, i) => `
                    <button onclick="app.selectQuizOption(${i}, ${slide.correctAnswer})" id="opt-btn-${i}" class="quiz-option-btn w-full p-4 rounded-2xl border-2 border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 text-left font-medium text-slate-800 transition-all flex items-center justify-between group shadow-sm">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-xl bg-white border border-slate-300 text-slate-600 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center font-bold text-sm transition">
                                ${String.fromCharCode(65 + i)}
                            </span>
                            <span class="text-xs sm:text-sm leading-snug">${opt}</span>
                        </div>
                        <i id="opt-icon-${i}" class="fa-solid fa-circle text-transparent text-lg"></i>
                    </button>
                `).join('');

                container.innerHTML = `
                    <div class="max-w-2xl mx-auto w-full space-y-5 py-2">
                        <!-- Quiz Header & Timer -->
                        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                            <span class="px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center gap-1.5">
                                <i class="fa-solid fa-brain"></i> Desafio de Fixação
                            </span>

                            <div class="flex items-center gap-3 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                                <i class="fa-solid fa-stopwatch text-amber-600"></i>
                                <span id="quiz-timer-text" class="font-mono font-bold text-slate-800 text-sm">12s</span>
                                <div class="w-20 bg-slate-200 h-2 rounded-full overflow-hidden">
                                    <div id="quiz-timer-bar" class="bg-amber-500 h-full w-full transition-all duration-1000"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Question Title -->
                        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                            ${slide.question}
                        </h2>

                        <!-- Options -->
                        <div class="space-y-3 pt-1">
                            ${optionsHtml}
                        </div>

                        <!-- Feedback Area -->
                        <div id="quiz-feedback" class="h-8 text-center text-sm font-bold flex items-center justify-center gap-2"></div>
                    </div>
                `;

                // Read question aloud & start timer
                this.speakText(slide.narrationText, () => {
                    if (quizAnswered) return;

                    // Start 12-second countdown
                    const timerText = document.getElementById('quiz-timer-text');
                    const timerBar = document.getElementById('quiz-timer-bar');

                    this.quizTimerInterval = setInterval(() => {
                        if (!this.isPlaying) return; // Freeze when paused

                        quizSeconds--;
                        if (timerText) timerText.innerText = `${quizSeconds}s`;
                        if (timerBar) {
                            const pct = (quizSeconds / 12) * 100;
                            timerBar.style.width = `${pct}%`;
                            if (quizSeconds <= 4) timerBar.className = "bg-red-500 h-full w-full transition-all duration-1000";
                        }

                        if (quizSeconds <= 0) {
                            clearInterval(this.quizTimerInterval);
                            this.handleQuizTimeout(slide.correctAnswer, slide.options);
                        }
                    }, 1000);
                });
            }

            selectQuizOption(selectedIndex, correctAnswer) {
                if (this.quizTimerInterval) clearInterval(this.quizTimerInterval);
                this.clearAllTimersAndSpeech();

                const isCorrect = (selectedIndex === correctAnswer);
                if (isCorrect) this.score++;

                // Visual highlights
                const options = document.querySelectorAll('.quiz-option-btn');
                options.forEach((btn, i) => {
                    btn.onclick = null;
                    const icon = document.getElementById(`opt-icon-${i}`);

                    if (i === correctAnswer) {
                        btn.className = "w-full p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-bold transition-all flex items-center justify-between shadow-md";
                        if (icon) icon.className = "fa-solid fa-circle-check text-emerald-600 text-xl";
                    } else if (i === selectedIndex && !isCorrect) {
                        btn.className = "w-full p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-950 font-medium transition-all flex items-center justify-between";
                        if (icon) icon.className = "fa-solid fa-circle-xmark text-rose-600 text-xl";
                    } else {
                        btn.className = "w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 opacity-40 text-slate-500 flex items-center justify-between";
                    }
                });

                const feedbackEl = document.getElementById('quiz-feedback');
                if (isCorrect) {
                    feedbackEl.className = "text-emerald-600 font-bold flex items-center justify-center gap-2 fade-in";
                    feedbackEl.innerHTML = '<i class="fa-solid fa-circle-check text-lg"></i> Resposta Correta! Excelente reflexão.';
                    this.speakText("Resposta correta! Muito bem.");
                } else {
                    feedbackEl.className = "text-rose-600 font-bold flex items-center justify-center gap-2 fade-in";
                    feedbackEl.innerHTML = '<i class="fa-solid fa-circle-xmark text-lg"></i> Resposta Incorreta. Prosseguindo...';
                    this.speakText("Resposta incorreta.");
                }

                // Advance automatically after 2 seconds
                this.autoAdvanceTimeout = setTimeout(() => this.nextSlide(), 2200);
            }

            handleQuizTimeout(correctAnswer, options) {
                const optionsBtns = document.querySelectorAll('.quiz-option-btn');
                optionsBtns.forEach((btn, i) => {
                    btn.onclick = null;
                    const icon = document.getElementById(`opt-icon-${i}`);
                    if (i === correctAnswer) {
                        btn.className = "w-full p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-bold flex items-center justify-between";
                        if (icon) icon.className = "fa-solid fa-circle-check text-emerald-600 text-xl";
                    } else {
                        btn.className = "w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 opacity-40 text-slate-500 flex items-center justify-between";
                    }
                });

                const feedbackEl = document.getElementById('quiz-feedback');
                feedbackEl.className = "text-amber-600 font-bold flex items-center justify-center gap-2 fade-in";
                feedbackEl.innerHTML = '<i class="fa-solid fa-clock text-lg"></i> Tempo Esgotado! A resposta correta foi destacada.';
                this.speakText("Tempo esgotado!");

                this.autoAdvanceTimeout = setTimeout(() => this.nextSlide(), 2200);
            }

            renderFinalSlide(container) {
                this.finalSeconds = 10;
                const percentage = Math.round((this.score / this.totalQuizzes) * 100);
                
                let badgeTitle = "Visitante do Museu";
                let badgeColor = "text-blue-700 bg-blue-50 border-blue-200";

                if (percentage === 100) {
                    badgeTitle = "Mestre da Ciência da Computação 🏆";
                    badgeColor = "text-emerald-700 bg-emerald-50 border-emerald-300";
                } else if (percentage >= 50) {
                    badgeTitle = "Entusiasta dos Algoritmos 💡";
                    badgeColor = "text-amber-700 bg-amber-50 border-amber-300";
                }

                container.innerHTML = `
                    <div class="text-center max-w-xl mx-auto space-y-6 py-2">
                        <div class="inline-flex p-4 rounded-full bg-amber-100 text-amber-600 shadow-inner">
                            <i class="fa-solid fa-award text-5xl"></i>
                        </div>

                        <div class="space-y-2">
                            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
                                Certificado de Conclusão da Tour
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base">
                                Você explorou as vidas e legados de Ada Lovelace, John von Neumann e Claude Shannon.
                            </p>
                        </div>

                        <!-- Score Breakdown -->
                        <div class="p-5 bg-slate-50 rounded-3xl border border-slate-200 space-y-3 shadow-sm">
                            <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Sua Pontuação no Quiz</div>
                            <div class="text-4xl font-black text-slate-900">
                                ${this.score} <span class="text-xl text-slate-400 font-medium">/ ${this.totalQuizzes}</span>
                            </div>
                            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold border ${badgeColor}">
                                Nível: ${badgeTitle}
                            </div>
                        </div>

                        <!-- 10-Second Auto Restart Banner -->
                        <div class="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-rotate text-amber-600 text-xl"></i>
                                <div>
                                    <div class="text-xs font-bold text-amber-950">Reinício Automático em <span id="final-timer-text" class="font-mono text-sm underline">10s</span></div>
                                    <div class="text-[11px] text-amber-800">O museu recomeçará a apresentação sozinho após a contagem.</div>
                                </div>
                            </div>
                            <div class="w-full sm:w-24 bg-amber-200 h-2 rounded-full overflow-hidden">
                                <div id="final-timer-bar" class="bg-amber-600 h-full w-full transition-all duration-1000"></div>
                            </div>
                        </div>

                        <!-- Manual Restart Button -->
                        <div>
                            <button onclick="app.restartTour()" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 mx-auto">
                                <i class="fa-solid fa-rotate-right"></i>
                                <span>Reiniciar Tour Agora</span>
                            </button>
                        </div>
                    </div>
                `;

                // Read narration & start 10s countdown
                this.speakText(museumData[this.currentIndex].narrationText, () => {
                    this.startFinalCountdown();
                });
            }

            startFinalCountdown() {
                if (this.finalTimerInterval) clearInterval(this.finalTimerInterval);

                const textEl = document.getElementById('final-timer-text');
                const barEl = document.getElementById('final-timer-bar');

                this.finalTimerInterval = setInterval(() => {
                    if (!this.isPlaying) return; // Pause timer if user clicks pause

                    this.finalSeconds--;
                    if (textEl) textEl.innerText = `${this.finalSeconds}s`;
                    if (barEl) {
                        const pct = (this.finalSeconds / 10) * 100;
                        barEl.style.width = `${pct}%`;
                    }

                    if (this.finalSeconds <= 0) {
                        clearInterval(this.finalTimerInterval);
                        this.restartTour();
                    }
                }, 1000);
            }

            speakText(text, onEndCallback) {
                if (!this.synth || this.isMuted) {
                    // Fallback timer if muted or speech unsupported
                    const fallbackMs = Math.max(5000, text.length * 60);
                    this.speechTimeout = setTimeout(() => {
                        if (onEndCallback) onEndCallback();
                    }, fallbackMs);
                    return;
                }

                this.synth.cancel();

                const utterance = new SpeechSynthesisUtterance(text);
                const ptVoice = this.getPtVoice();
                if (ptVoice) utterance.voice = ptVoice;

                utterance.lang = 'pt-BR';
                utterance.rate = 1.0;

                let hasEnded = false;
                
                // Contingency Fallback Timer so application NEVER hangs!
                const fallbackMs = Math.max(6000, text.length * 80);
                this.speechTimeout = setTimeout(() => {
                    if (!hasEnded) {
                        hasEnded = true;
                        if (onEndCallback) onEndCallback();
                    }
                }, fallbackMs);

                utterance.onend = () => {
                    if (!hasEnded) {
                        hasEnded = true;
                        if (this.speechTimeout) clearTimeout(this.speechTimeout);
                        if (onEndCallback) onEndCallback();
                    }
                };

                utterance.onerror = () => {
                    if (!hasEnded) {
                        hasEnded = true;
                        if (this.speechTimeout) clearTimeout(this.speechTimeout);
                        if (onEndCallback) onEndCallback();
                    }
                };

                this.synth.speak(utterance);
            }

            togglePlayPause() {
                this.isPlaying = !this.isPlaying;
                const icon = document.getElementById('play-pause-icon');
                const text = document.getElementById('play-pause-text');

                if (this.isPlaying) {
                    if (icon) icon.className = "fa-solid fa-pause";
                    if (text) text.innerText = "Pausar";
                    if (this.synth && this.synth.paused) {
                        this.synth.resume();
                    }
                } else {
                    if (icon) icon.className = "fa-solid fa-play";
                    if (text) text.innerText = "Continuar";
                    if (this.synth && this.synth.speaking) {
                        this.synth.pause();
                    }
                }
            }

            toggleMute() {
                this.isMuted = !this.isMuted;
                const muteIcon = document.getElementById('mute-icon');

                if (this.isMuted) {
                    if (muteIcon) muteIcon.className = "fa-solid fa-volume-xmark text-slate-400";
                    if (this.synth) this.synth.cancel();
                } else {
                    if (muteIcon) muteIcon.className = "fa-solid fa-volume-high text-blue-600";
                    const currentSlide = museumData[this.currentIndex];
                    this.speakText(currentSlide.narrationText);
                }
            }

            nextSlide() {
                if (this.currentIndex < museumData.length - 1) {
                    this.currentIndex++;
                    this.renderSlide();
                }
            }

            prevSlide() {
                if (this.currentIndex > 0) {
                    this.currentIndex--;
                    this.renderSlide();
                }
            }

            restartTour() {
                this.currentIndex = 0;
                this.score = 0;
                this.renderSlide();
            }

            // Interactive Widget Handlers
            nextPunchCardStep() {
                const steps = [
                    { title: "Instrução Nº 1", card: "Cartão 01/03", op: "v1 × v2 = v4", desc: "Multiplica variáveis de entrada." },
                    { title: "Instrução Nº 2", card: "Cartão 02/03", op: "v4 - v3 = v5", desc: "Aplica constante do termo Bernoulli." },
                    { title: "Instrução Nº 3", card: "Cartão 03/03", op: "LOOP (3x)", desc: "Incrementa contador de repetição e salva no registro." }
                ];
                this.punchCardIndex = (this.punchCardIndex + 1) % steps.length;
                const s = steps[this.punchCardIndex];

                document.getElementById('card-step-title').innerText = s.title;
                document.getElementById('card-num-badge').innerText = s.card;
                document.getElementById('card-desc').innerHTML = `<i class="fa-solid fa-circle-info text-purple-600"></i> ${s.desc}`;
                
                const opView = document.getElementById('card-operation-view');
                if (opView) {
                    opView.innerHTML = `<div class="col-span-5 p-2 bg-purple-200 text-purple-950 font-bold rounded">${s.op}</div>`;
                }
            }

            highlightArchBlock(block) {
                const infoText = document.getElementById('arch-info-text');
                if (!infoText) return;

                if (block === 'ram') {
                    infoText.innerHTML = "<strong>Memória RAM:</strong> Contém instruções do código e valores numéricos lado a lado, permitindo que a CPU leia comandos como se fossem dados.";
                } else if (block === 'cpu') {
                    infoText.innerHTML = "<strong>Unidade Central (CPU):</strong> A UC decodifica cada linha do programa e comanda a ULA para efetuar somas, comparações ou desvios de fluxo.";
                } else if (block === 'io') {
                    infoText.innerHTML = "<strong>Dispositivos E/S:</strong> Permitem a interação com o operador humano (receber dados via teclado/cartão e apresentar respostas).";
                }
            }

            toggleGateSwitch(gateKey) {
                if (gateKey === 'A') this.gateA = !this.gateA;
                if (gateKey === 'B') this.gateB = !this.gateB;

                const valA = document.getElementById('val-A');
                const valB = document.getElementById('val-B');
                const bulb = document.getElementById('bulb-status');

                if (valA) {
                    valA.innerText = this.gateA ? "1 (Fechado)" : "0 (Aberto)";
                    valA.className = this.gateA ? "text-emerald-400 font-bold" : "text-red-400";
                }
                if (valB) {
                    valB.innerText = this.gateB ? "1 (Fechado)" : "0 (Aberto)";
                    valB.className = this.gateB ? "text-emerald-400 font-bold" : "text-red-400";
                }

                // AND gate logic
                const isLit = this.gateA && this.gateB;
                if (bulb) {
                    if (isLit) {
                        bulb.className = "w-8 h-8 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)] flex items-center justify-center transition-all duration-300";
                        bulb.innerHTML = '<i class="fa-solid fa-lightbulb text-slate-900 font-bold"></i>';
                    } else {
                        bulb.className = "w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center transition-all duration-300";
                        bulb.innerHTML = '<i class="fa-solid fa-lightbulb text-slate-500"></i>';
                    }
                }
            }
        }

        // Initialize App on DOM Content Loaded
        let app;
        window.addEventListener('DOMContentLoaded', () => {
            app = new MuseumApp();
        });
