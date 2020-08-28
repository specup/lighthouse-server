# lighthouse server

웹사이트 성능, PWA 등을 기록하는 데 사용

## env vars

- PORT: 80
- DB_DIARECT: 'postgres', 'mysql', 'sqlite'
- DB_CONNECTION_URL: db connection url

## run

- 아파치 서버 중지시킬 것

```
$ cd /opt/bitnami
$ sudo ./ctlscript.sh stop apache
```

- DB public 설정되어있는지 확인
- `sudo npm run start`
