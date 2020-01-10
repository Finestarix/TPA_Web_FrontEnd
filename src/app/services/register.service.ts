import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {getPhoneCode, insertNewUser} from './queries/registerService';
import {Apollo} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apollo: Apollo) {
  }

  public getPhoneCode(): Observable<any> {

    return this.apollo.query<any>({
      query: getPhoneCode,
    });

  }

  public insertUser(email: string, firstName: string, lastName: string,
                    phoneCode: string, phone: string, password: string): Observable<any> {

    const emailConvert = String(email);
    const firstNameConvert = String(firstName);
    const lastNameConvert = String(lastName);
    const phoneCodeConvert = String(phoneCode);
    const phoneConvert = String(phone);
    const passwordConvert = String(password);

    return this.apollo.mutate<any>({
      mutation: insertNewUser,
      variables: {
        emailData: emailConvert,
        firstNameData: firstNameConvert,
        lastNameData: lastNameConvert,
        phoneCodeData: phoneCodeConvert,
        phoneData: phoneConvert,
        passwordData: passwordConvert,
      }
    });

  }

}
