var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};
  
var user = {
    name: 'Jaenam',
    gender: 'male',
};

console.log('user.name = ', user.name);
console.log('user.gender = ', user.gender);
  
var user2 = copyObject(user);
user2.name = 'Jung';

console.log('user2.name = ', user2.name);
console.log('user2.gender = ', user2.gender);
  
if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name);
console.log(user === user2);