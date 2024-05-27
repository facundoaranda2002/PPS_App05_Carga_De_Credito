export interface UserId extends User {
    id: string;
  }
  
  export interface User {
    email: string;
    perfil: string;
    sexo: string;
    cantidadCreditos: number;
    codigosUtilizados: string[];
  }