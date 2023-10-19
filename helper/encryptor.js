// Specify a string key:
// Don't do this though, your keys should most likely be stored in env variables
// and accessed via process.env.MY_SECRET_KEY
var key = "real secret keys should be long and random"

// Create an encryptor:
var encryptor = require("simple-encryptor")(key)

var encrypted = encryptor.encrypt("admin123")
// Should print gibberish:
console.log("encrypted: %s", encrypted)

var decrypted = encryptor.decrypt(encrypted)
// Should print 'testing'
console.log("decrypted: %s", decrypted)
