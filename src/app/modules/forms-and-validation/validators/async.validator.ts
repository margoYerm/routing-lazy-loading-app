import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class AsyncValidatorClass  { 
    static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
        return new Promise( resolve => {
            setTimeout( () => {
                if (control.value === 'asyc@mail.ru') {
                    resolve({
                        uniqEmail: true
                    })
                } else {
                    resolve(null)
                }
            }, 1000 )
        })
    }

}