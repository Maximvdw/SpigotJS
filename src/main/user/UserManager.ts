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

import * as request from 'cloudscraper';
import { JSDOM } from 'jsdom';
import { User } from './User';
import { ProfilePost } from './ProfilePost';

export class UserManager {
    constructor() {

    }

    /**
     * Fetch user by Id
     * 
     * @param id User identifier
     * @param callback Callback
     */
    public fetchUserById(id: number, callback: (user : User , success : boolean) => void){
        var url = "https://www.spigotmc.org/" + "members/" + id;
        request.get(
            url,
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var user = new User();
                    var dom = new JSDOM(response.body.toString('utf8'));
                    user.setId(id);
                    user.setUsername(dom.window.document.querySelector("h1.username").textContent);
                    callback(user, true);
                }else{
                    callback(null, false);
                }
            }
        );
    }

    
    /**
     * Fetch user by username
     * 
     * @param username Username
     * @param callback Callback
     */
    public fetchUserByName(username: string, callback: (user : User , success : boolean) => void) {
        var url = "https://www.spigotmc.org/" + "members?username=" + username;
        request.get(
            url,
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var user = new User();
                    var dom = new JSDOM(response.body.toString('utf8'));
                    var topLinkElement = dom.window.document.querySelector(".topLink");
                    var linkProfile = topLinkElement.querySelector("a").getAttribute("href");
                    var userIdStr = linkProfile.substr(0,linkProfile.lastIndexOf("/"));
                    userIdStr = userIdStr.substr(userIdStr.indexOf(".") + 1);
                    user.setId(parseInt(userIdStr));
                    user.setUsername(dom.window.document.querySelector("h1.username").textContent);
                    callback(user, true);
                }else{
                    callback(null, false);
                }
            }
        );
    }

    public fetchUserPosts(user : User, callback: (user : User , success : boolean) => void): ProfilePost[]{

        return null;
    }
}