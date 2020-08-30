## çalıştımak için 
npm run server
## Rerst servis için 3 endpont var

| HTTP | ENDPOINT  |   |   
| ---  |---|---|
|  GET | http://localhost:5000/api/posts   |  Bize database deki tüm post datalarını gerir | 
|  GET | http://localhost:5000/api/posts/get,{"id":"12555"} | id si 12555 olan post bilgisini verir  |   |   |
|  POST| http://localhost:5000/api/posts/create,{ "title": "javaScript", "body": "React", "auther": "Vuejs",} | datayı kaydeder  |  