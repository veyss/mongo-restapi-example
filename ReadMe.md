## çalıştımak için 
npm run server
## Rerst servis için 3 endpont var

| HTTP | ENDPOINT  |   |   
| ---  |---|---|
|  GET | http://localhost:5000/api/posts   |  tüm postları getirir | 
|  GET | http://localhost:5000/api/posts/get,{"id":"12555"} | id si 12555 olan post bilgisini getirir  |  
|  POST| http://localhost:5000/api/posts/create,{ "title": "javaScript", "body": "React", "auther": "Vuejs",} | gönderilen objeyi kaydeder |

***NOT:*** post işleminde title ,body, auther bilgileri zorunludur(required)