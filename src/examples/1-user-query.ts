import api from '../main/SpigotJS';

api.getUserManager().fetchUserById(1, ((user, success) => {
    if (success){
        console.log(user.getUsername());
    }
}));

api.getUserManager().fetchUserByName("Maximvdw", ((user, success) => {
    if (success){
        console.log(user.getId());
    }
}));
