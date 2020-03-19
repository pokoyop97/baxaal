export class RolUser{
    rol: UsuarioRolType;
    correoRol:string;
}
export enum UsuarioRolType {
    Presidente = "Presidente",
    Entrenador = "Entrenador",
    Arbitro = "Arbitro",
    Jugador = "Jugador",
    DirectorEscuela = "Director Escuela",
}