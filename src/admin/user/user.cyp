// Takes $username and returns a user object with at least 'id' and 'password'
//WITH {id: 2} AS user, {username: $username, passwordHash: "test"} AS userAccount
// Above serves as mock, should be gathered from real data
//RETURN {id: user.id, username: userAccount.username, password: userAccount.passwordHash}

//RETURN {id: user.id, username: user.username, password: user.password}
MATCH (u:user {username: $username})
RETURN {id: id(u), username: u.username, password: u.password}
