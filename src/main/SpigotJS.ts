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

import { ResourceManager } from './resource/ResourceManager';
import { UserManager } from './user/UserManager';

declare const BASE_URL = "https://www.spigotmc.org/";

/**
 * SpigotJS
 * 
 * Main API
 */
class SpigotJS {
    private userManager;
    private resourceManager;

    constructor() {
        this.userManager = new UserManager();
        this.resourceManager = new ResourceManager();
    }

     /**
     * Get Spigot User manager
     * 
     * @return { UserManager } resource manager
     */
    public getUserManager() : UserManager{
        return this.userManager;
    }

    /**
     * Get Spigot Resource manager
     * 
     * @return { ResourceManager } resource manager
     */
    public getResourceManager() : ResourceManager{
        return this.resourceManager;
    }
}

export default new SpigotJS();