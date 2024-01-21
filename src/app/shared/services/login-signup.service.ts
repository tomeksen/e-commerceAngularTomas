import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  public login_url = "http://localhost:3000"
  public reg_url = "http://localhost:3000"
  
  constructor(private http: HttpClient,private apiService: ApiService) { }
  //authorizationLogin
  authLogin(userName: string, password: string): Observable<any>{
    return this.apiService.get(this.login_url+'/user?email='+userName+'&password='+password);
  }

  //userRegister
  userRegister(userDTO:any):Observable<any>{
    return this.apiService.post(this.reg_url+'/user',userDTO)
  }
  
  //adminLogin
  adminLogin(userName: string, password: string): Observable<any>{
    return this.apiService.get(this.login_url+'/user?email='+userName+'&password='+password+'&role=admin');
  }
}
