import {RolUser} from './rol';

export class User{
    idUsuario?: string;
    codigoBaaxal?: string;
    correo?: string;
    contrasena?: string;
    nombres?: string;
    apellidos?: string;
    codigoPostal?: string;
    roles?: RolUser[];
}

