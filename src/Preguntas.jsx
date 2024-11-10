// solo exportamos las preguntas para el juego

export const questions = [
    {
        question: '¿Qué tipo de vino es el Chardonnay?',
        options: [
            { answer: 'Vino blanco', isCorrect: true },
            { answer: 'Vino tinto', isCorrect: false },
            { answer: 'Vino rosado', isCorrect: false }
        ]
    },
    {
        question: '¿Qué país es uno de los mayores productores de vino del mundo?',
        options: [
            { answer: 'Brasil', isCorrect: false },
            { answer: 'India', isCorrect: false },
            { answer: 'Francia', isCorrect: true }
        ]
    },
    {
        question: '¿Qué significa el término “reserva” en vinos?',
        options: [
            { answer: 'Un vino de menor calidad', isCorrect: false },
            { answer: 'Un vino envejecido por un tiempo mayor antes de su venta', isCorrect: true },
            { answer: 'Un tipo de vino blanco', isCorrect: false }
        ]
    },
    {
        question: '¿Cuál es el papel de los taninos en el vino?',
        options: [
            { answer: 'Son responsables del color del vino', isCorrect: false },
            { answer: 'Aportan estructura y astringencia', isCorrect: true },
            { answer: 'Añaden dulzura al vino', isCorrect: false }
        ]
    },
    {
        question: '¿Dónde puedes estudiar Enología en Mendoza?',
        options: [
            { answer: 'Universidad Nacional de Cuyo', isCorrect: true },
            { answer: 'Universidad de Buenos Aires', isCorrect: false },
            { answer: 'Universidad Nacional del Litoral', isCorrect: false }
        ]
    },
    {
        question: '¿Qué es la Enología?',
        options: [
            { answer: 'El estudio de la ciencia del vino y su elaboración', isCorrect: true },
            { answer: 'La degustación de vinos', isCorrect: false },
            { answer: 'El estudio de la geografía de los viñedos', isCorrect: false }
        ]
    },
    {
        question: '¿Cuál es el proceso de fermentación en la elaboración del vino?',
        options: [
            { answer: 'La transformación de azúcar en alcohol mediante levaduras', isCorrect: true },
            { answer: 'La embotellado del vino', isCorrect: false },
            { answer: 'La destilación de líquidos para obtener alcohol', isCorrect: false }
        ]
    },
    {
        question: '¿Qué es un sommelier?',
        options: [
            { answer: 'Un productor de vino', isCorrect: false },
            { answer: 'Un experto en vinos encargado de recomendar y servir vinos en restaurantes', isCorrect: true },
            { answer: 'Una persona que solo degusta vinos', isCorrect: false }
        ]
    },
    {
        question: '¿Qué tipo de uva se utiliza comúnmente para el vino tinto?',
        options: [
            { answer: 'Chardonnay', isCorrect: false },
            { answer: 'Cabernet Sauvignon', isCorrect: true },
            { answer: 'Sauvignon Blanc', isCorrect: false }
        ]
    },
    {
        question: '¿Cuál es una característica principal de los vinos espumosos?',
        options: [
            { answer: 'Son envejecidos por más de 10 años', isCorrect: false },
            { answer: 'Contienen burbujas de dióxido de carbono', isCorrect: true },
            { answer: 'Son siempre de color blanco', isCorrect: false }
        ]
    },
    {
        question: '¿Cuál es el mejor tipo de copa para degustar vino tinto?',
        options: [
            { answer: 'Copa pequeña y cerrada', isCorrect: false },
            { answer: 'Copa de cóctel', isCorrect: false },
            { answer: 'Copa de cáliz ancho y boca estrecha', isCorrect: true }
        ]
    },
    {
        question: '¿Qué es el terroir en la viticultura?',
        options: [
            { answer: 'El tipo de uva utilizado', isCorrect: false },
            { answer: 'La combinación de suelo, clima y otros factores que influyen en el cultivo de la vid', isCorrect: true },
            { answer: 'El proceso de embotellado del vino', isCorrect: false }
        ]
    }
];