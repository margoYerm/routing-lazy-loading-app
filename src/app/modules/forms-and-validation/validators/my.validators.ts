import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class MyValidators {

    static restrictedEmails(control: FormControl): {[key: string]: boolean} {
        if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
            return {
                restrictedEmail: true
            }
        }
        return null as any
    }
}