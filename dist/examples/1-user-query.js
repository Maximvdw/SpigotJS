"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SpigotJS_1 = require("../main/SpigotJS");
SpigotJS_1.default.getUserManager().fetchUserById(1, ((user, success) => {
    if (success) {
        console.log(user.getUsername());
    }
}));
SpigotJS_1.default.getUserManager().fetchUserByName("Maximvdw", ((user, success) => {
    if (success) {
        console.log(user.getId());
    }
}));
//# sourceMappingURL=1-user-query.js.map