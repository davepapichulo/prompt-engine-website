import { Schema, model, models } from "mongoose";
 
const UserSchema = new Schema({
    email: {
        type : String,
        unique : [true, 'email already registered'],
        required : [true, 'email is required'],
    },

    username: {
        type : String,
        required :[true, 'username is registered'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    
    image: {
        type : String,
    }

});

const User = models.User || model ('Users', UserSchema);

export default User;