/**
 * SpigotJS
 * 
 * Copyright 2018 Maxim Van de Wynckel
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
import { User } from './User';

export class ProfilePost {
    private id: number = 0;
    private author: User = null;
    private messageHTML: string;

    constructor(){

    }

    public getId() : number{
        return this.id;
    }

    public setId(id:number){
        this.id = id;
    }

    public getAuthor() : User{
        return this.author;
    }

    public setAuthor(author : User){
        this.author = author;
    }

    public getMessageHTML(){
        return this.messageHTML;
    }

    public setMessageHTML(messageHTML : string){
        this.messageHTML = messageHTML;
    }
}