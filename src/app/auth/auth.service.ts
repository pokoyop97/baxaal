import { Injectable, ɵConsole } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs'
import {tap} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient: HttpClient) { }

  postUser(mail:string, pass:string){
    return this.httpClient.post(environment.baseurl+'/usuario/login',{"correo":mail,"contrasena":pass}).pipe();
  }
  getUser(){
    return this.httpClient.get(environment.baseurl+'/usuario').pipe( tap( res => {
    } ) );
  }
  putUser(){
    return this.httpClient.put(environment.baseurl+'/usuario',{}).pipe( tap( res => {
      console.log(res);
    } ) );
  }
  async registerUser(mail: string, pass: string, name:string) {
    let res = await this.httpClient.post(environment.baseurl+'/usuario',{"correo":mail,"contrasena":pass,"nombres":name}).toPromise();
    return this.postUser(mail,pass).toPromise();
  }
}