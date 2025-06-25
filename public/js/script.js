window.calculadoraPet = function () {
    return {
        view: 'FORMULARIO',
        restricoes: {
            proteinas: 0,
            carboidratos: 0,
            gorduras: 0,
        },
        racoes: {
            racao_a: {
                nome: "Ração A",
                editar: false,
                proteinas: 0,
                carboidratos: 0,
                gorduras: 0,
                custo: 0
            },
            racao_b: {
                nome: "Ração B",
                editar: false,
                proteinas: 0,
                carboidratos: 0,
                gorduras: 0,
                custo: 0
            },
            racao_c: {
                nome: "Ração C",
                editar: false,
                proteinas: 0,
                carboidratos: 0,
                gorduras: 0,
                custo: 0
            },
            racao_d: {
                nome: "Ração D",
                editar: false,
                proteinas: 0,
                carboidratos: 0,
                gorduras: 0,
                custo: 0
            },
            racao_e: {
                nome: "Ração E",
                editar: false,
                proteinas: 0,
                carboidratos: 0,
                gorduras: 0,
                custo: 0
            },
            racao_f: {
                nome: "Ração F",
                editar: false,
                proteinas: 0,
                carboidratos: 0,
                gorduras: 0,
                custo: 0
            }
        },
        resultado: {
            racao_a: 0,
            racao_b: 0,
            racao_c: 0,
            racao_d: 0,
            racao_e: 0,
            racao_f: 0,
            custo_total: 0,
            solucao_viavel: false,
            solucao_limitada: false
        },
        init() {
            const resultadoRow = document.getElementById('resultado');
            if (resultadoRow) {
                resultadoRow.classList.remove('d-none');
            }
        },
        calcular() {
            const model = {
                optimize: "custo",
                opType: "min",
                constraints: {
                    proteinas: { min: Number(this.restricoes.proteinas) },
                    carboidratos: { min: Number(this.restricoes.carboidratos) },
                    gorduras: { min: Number(this.restricoes.gorduras) },
                },
                variables: {
                    racao_a: {
                        proteinas: Number(this.racoes.racao_a.proteinas),
                        carboidratos: Number(this.racoes.racao_a.carboidratos),
                        gorduras: Number(this.racoes.racao_a.gorduras),
                        custo: Number(this.racoes.racao_a.custo)
                    },
                    racao_b: {
                        proteinas: Number(this.racoes.racao_b.proteinas),
                        carboidratos: Number(this.racoes.racao_b.carboidratos),
                        gorduras: Number(this.racoes.racao_b.gorduras),
                        custo: Number(this.racoes.racao_b.custo)
                    },
                    racao_c: {
                        proteinas: Number(this.racoes.racao_c.proteinas),
                        carboidratos: Number(this.racoes.racao_c.carboidratos),
                        gorduras: Number(this.racoes.racao_c.gorduras),
                        custo: Number(this.racoes.racao_c.custo)
                    },
                    racao_d: {
                        proteinas: Number(this.racoes.racao_d.proteinas),
                        carboidratos: Number(this.racoes.racao_d.carboidratos),
                        gorduras: Number(this.racoes.racao_d.gorduras),
                        custo: Number(this.racoes.racao_d.custo)
                    },
                    racao_e: {
                        proteinas: Number(this.racoes.racao_e.proteinas),
                        carboidratos: Number(this.racoes.racao_e.carboidratos),
                        gorduras: Number(this.racoes.racao_e.gorduras),
                        custo: Number(this.racoes.racao_e.custo)
                    },
                    racao_f: {
                        proteinas: Number(this.racoes.racao_f.proteinas),
                        carboidratos: Number(this.racoes.racao_f.carboidratos),
                        gorduras: Number(this.racoes.racao_f.gorduras),
                        custo: Number(this.racoes.racao_f.custo)
                    }
                }
            };
            const results = solver.Solve(model);

            this.resultado.racao_a = results.racao_a ? Number(results.racao_a.toFixed(3)) : 0;
            this.resultado.racao_b = results.racao_b ? Number(results.racao_b.toFixed(3)) : 0;
            this.resultado.racao_c = results.racao_c ? Number(results.racao_c.toFixed(3)) : 0;
            this.resultado.racao_d = results.racao_d ? Number(results.racao_d.toFixed(3)) : 0;
            this.resultado.racao_e = results.racao_e ? Number(results.racao_e.toFixed(3)) : 0;
            this.resultado.racao_f = results.racao_f ? Number(results.racao_f.toFixed(3)) : 0;
            this.resultado.custo_total = results.result ? Number(results.result.toFixed(2)) : 0;

            this.resultado.solucao_viavel = results.feasible ?? false;
            this.resultado.solucao_limitada = results.bounded ?? false;

            console.log(this.resultado);

            this.geraGrafico();

            this.view = 'RESULTADO';
        },
        limpar(tipo) {
            if (tipo === 'restricoes') {
                this.restricoes.proteinas = 0;
                this.restricoes.carboidratos = 0;
                this.restricoes.gorduras = 0;
            } else {
                this.racoes[tipo].nome = `Ração ${tipo.split('_')[1].toUpperCase()}`;
                this.racoes[tipo].editar = false;
                this.racoes[tipo].proteinas = 0;
                this.racoes[tipo].carboidratos = 0;
                this.racoes[tipo].gorduras = 0;
                this.racoes[tipo].custo = 0;
            }
        },
        setarValores() {
            this.racoes = {
                racao_a: {
                    nome: "Ração A",
                    editar: false,
                    proteinas: "20",
                    carboidratos: "50",
                    gorduras: "4",
                    custo: "2"
                },
                racao_b: {
                    nome: "Ração B",
                    editar: false,
                    proteinas: "30",
                    carboidratos: "30",
                    gorduras: "9",
                    custo: "3"
                },
                racao_c: {
                    nome: "Ração C",
                    editar: false,
                    proteinas: "40",
                    carboidratos: "20",
                    gorduras: "11",
                    custo: "5"
                },
                racao_d: {
                    nome: "Ração D",
                    editar: false,
                    proteinas: "40",
                    carboidratos: "25",
                    gorduras: "10",
                    custo: "6"
                },
                racao_e: {
                    nome: "Ração E",
                    editar: false,
                    proteinas: "45",
                    carboidratos: "50",
                    gorduras: "9",
                    custo: "8"
                },
                racao_f: {
                    nome: "Ração F",
                    editar: false,
                    proteinas: "30",
                    carboidratos: "20",
                    gorduras: "10",
                    custo: "8"
                }
            };
            this.restricoes = {
                proteinas: "70",
                carboidratos: "100",
                gorduras: "20"
            }
        },
        geraGrafico() {
            // Remove gráfico anterior se existir
            if (window.graficoRacoes) {
                window.graficoRacoes.destroy();
            }

            const racoesNomes = [
                this.racoes.racao_a.nome,
                this.racoes.racao_b.nome,
                this.racoes.racao_c.nome,
                this.racoes.racao_d.nome,
                this.racoes.racao_e.nome,
                this.racoes.racao_f.nome
            ];
            const racoesValores = [
                this.resultado.racao_a,
                this.resultado.racao_b,
                this.resultado.racao_c,
                this.resultado.racao_d,
                this.resultado.racao_e,
                this.resultado.racao_f
            ];

            var options = {
                chart: {
                    type: 'bar',
                    height: 400,
                    toolbar: { show: false },
                    background: '#fff' // fundo branco
                },
                series: [{
                    name: 'Quantidade (kg)',
                    data: racoesValores
                }],
                xaxis: {
                    categories: racoesNomes,
                    labels: { 
                        style: { 
                            fontFamily: 'Lilita One, sans-serif', 
                            fontSize: '16px',
                            colors: '#000' // texto preto no eixo X
                        } 
                    }
                },
                colors: ['#f7931e'], // apenas um tom de laranja
                plotOptions: {
                    bar: {
                        distributed: false, // todas as barras com a mesma cor
                        borderRadius: 6,
                        columnWidth: '55%',
                        dataLabels: {
                            style: {
                                colors: ['#000'] // texto preto dentro das colunas
                            }
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    style: { 
                        fontFamily: 'Lilita One, sans-serif', 
                        fontSize: '14px',
                        colors: ['#000'] // texto preto nos valores das barras
                    }
                },
                yaxis: {
                    title: { text: 'Quantidade (kg)' },
                    labels: {
                        style: {
                            colors: '#000' // texto preto no eixo Y
                        }
                    }
                },
                tooltip: {
                    y: { formatter: val => `${val} kg` }
                }
            };

            window.graficoRacoes = new ApexCharts(document.querySelector("#grafico-racoes"), options);
            window.graficoRacoes.render();
        }
    }
};
