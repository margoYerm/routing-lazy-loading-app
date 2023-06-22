import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, delay} from "rxjs";
import { map, tap } from 'rxjs/operators';

export interface Todo {
  completed: boolean,
  title: string,
  id?: number
}

@Injectable({providedIn: 'root'})

export class TodoService {

  constructor(private http: HttpClient) {}
  
  addTodo(todo: Todo, url: string): Observable<Todo> {
    const headers = new HttpHeaders ({
      'AnotherWayPassHeaders': 'value'
    })
    return this.http.post<Todo>(url, todo, {
      headers/*: new HttpHeaders({
        'MyCustomHeader': Math.random().toString(),
        'UnHeaderNouvelle': '25',
      })*/      
    });     
  }
  
  fetchTodos(url: string, urlParams?: string): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'anything');    
    return this.http.get<Todo[]>(`${url}`, {      
      params,
      observe: 'response',
    })
      .pipe(
        map(response => {
          //console.log('Response', response);
          return response.body as any
        }),
        delay(500),        
        catchError(err => {           
          throw console.log('Error in source. Details: ', err.message)
        })        
      );
  }

  /*fetchTodos(url: string, urlParams?: string): Observable<Todo[]> { 
    return this.http.get<Todo[]>(`${url}`, {
      params: new HttpParams().set('_limit', '5'),      
      //observe: 'response',
    })
      .pipe(        
        delay(500),        
        catchError(err => {           
          throw console.log('Error in source. Details: ', err.message)
        })        
      );
  }*/

  removeTodo(id: number, url:string): Observable<any> {
    return this.http.delete<void>(`${url}/${id}`, {
      observe: 'events'
    })
      .pipe(
        tap(event => {
          //console.log(event)
          if (event.type === HttpEventType.Sent) {
            console.log('Sent', event)
          }
          if (event.type === HttpEventType.Response) {
            console.log('Response', event)
          }
        })
      )
    ;
  }

  completeTodo(id: number, url:string): Observable<Todo> {
    return this.http.put<Todo>(`${url}/${id}`, {
      completed: true,
    }, {
      responseType: 'json' //'text', Blob, ArrayBuffer
    })
  }

}