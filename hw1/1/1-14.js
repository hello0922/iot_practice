var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
      result[prop] = target[prop];
    }
    return result;
  };
  
  var user = {
    name: 'Jaenam',
    urls: {
      portfolio: 'http://github.com/abc',
      blog: 'http://blog.com',
      facebook: 'http://facebook.com/abc',
    },
  };

  var user2 = copyObject(user);
  for (prop in user) console.log("    user." + prop + "  = " + user[prop]);
  for (prop in user2) console.log("    user2." + prop + " = " + user2[prop]);
  
  user2.name = 'Jung';
  console.log("after : user2.name = 'Jung';");
  for (prop in user) console.log("    user." + prop + "  = " + user[prop]);
  for (prop in user2) console.log("    user2." + prop + " = " + user2[prop]);
  
  console.log("user.name === user2.name:", user.name === user2.name);
  
  user.urls.portfolio = 'http://portfolio.com';
  console.log("after : user.urls.portfolio = 'http://portfolio.com';");
  for (prop in user) console.log("    user." + prop + "  = " + user[prop]);
  for (prop in user2) console.log("    user2." + prop + " = " + user2[prop]);

  console.log("user.urls.portfolio === user2.urls.portfolio", user.urls.portfolio === user2.urls.portfolio);
  
  user2.urls.blog = '';
  console.log("after : user2.urls.blog = '';");
  for (prop in user) console.log("    user." + prop + "  = " + user[prop]);
  for (prop in user2) console.log("    user2." + prop + " = " + user2[prop]);

  console.log("user.urls.blog === user2.urls.blog", user.urls.blog === user2.urls.blog);