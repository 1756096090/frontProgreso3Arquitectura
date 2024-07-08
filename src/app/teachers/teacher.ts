export interface Teacher {
    id: string;
    nombre: string;
    correo: string;
    telefono: string;
    direccion: string;
    experiencia: string[];
    certificaciones: string[];
    habilidades: string[];
    estado: string;
    documentos: Documento[];
    likes: number;
    dislikes: number;
    recomendaciones: Recomendacion[];
    rating: number; // Nueva propiedad
}


export interface Documento {
    tipo: string;
    url: string;
}

export interface Evaluacion {
    id: string;
    idProfesor: string;
    usuarioEstudiante: string;
    estrellas: number;
}

export interface Recomendacion {
    id: string;
    idProfesor: string;
    usuarioEstudiante: string;
    motivo: string;
    fecha: string;
}
