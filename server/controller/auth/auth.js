import jwt from "jsonwebtoken";
function setUser(user)
{
    const payload = {
        _id:user._id,
        email:user.email,
        role:user.role
    }
    return jwt.sign(payload,"apple",{expiresIn:"1h"})
 
}
function getUser(token)
{
    return jwt.verify(token,"apple")
}
export {setUser,getUser}  