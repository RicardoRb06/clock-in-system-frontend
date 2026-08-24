export const categoryOptions = [
    { value: "NONE", label: "Nenhum"},
    { value: "COMBAT", label: "Combate"},
    { value: "MARKETING", label: "Marketing"},
    { value: "LINE_CHASER", label: "Seguidor de Linha"},
    { value: "SOCCER_2D", label: "Simulação de Futebol 2D"},
    { value: "SUMO", label: "Sumô"},
];

export type Category = typeof categoryOptions[number]["value"];