export interface Tutor {
    id: string;
    nombre: string;
    correo: string;
    telefono: string;
    direccion: string;
    experiencia: Experiencia[];
    certificaciones: Certificacion[];
    habilidades: string[];
    estado: string;
    documentos: Documento[]; // Nueva propiedad
    esTutor: boolean; // Nueva propiedad
    tutorias: Tutoria[]; // Nueva propiedad
}

export interface Experiencia {
    institucion: string;
    puesto: string;
    fechaInicio: string;
    fechaFin: string;
    descripcion: string;
}

export interface Certificacion {
    titulo: string;
    institucion: string;
    fechaObtencion: string;
}

export interface Documento { // Nueva interfaz
    tipo: string;
    url: string;
}

export interface Tutoria { // Nueva interfaz
    id: string;
    usuarioEstudiante: string;
    idProfesor: string;
    estado: string;
    fechaContratacion: string;
}
