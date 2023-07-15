import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Todo } from "../Model/todo.model";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    isChanged = new Subject<boolean>();

    private base_url: string= "https://ynayan-cautious-space-broccoli-xq5wxrjj6qghvjr-5000.preview.app.github.dev/todos";

    constructor(private http: HttpClient){}

    getTodos(): Observable<any>{
        return this.http.get<Todo>(this.base_url);
    }

    getParticularTodo(title: string): Observable<any>{
        return this.http.get<Todo>(`${this.base_url}/${title}`)
    }

    addTodos(todo: Todo): Observable<any>{
        return this.http.post<Todo>(this.base_url,todo);
    }

    deleteTodos(id: any): Observable<any>{
        return this.http.delete(`${this.base_url}/${id}`);
    }

    updateTodos(todo: Todo, id:string):Observable<any>{
        return this.http.put<Todo>(`${this.base_url}/${id}`,todo);
    }
    
}