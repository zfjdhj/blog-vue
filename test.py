# -*- coding: UTF-8 -*-
"""
 * @author  zfj
 * @date  2020/11/19 15:49
"""
import re

msg=["xxx我叫小明xxxxxx我吃茶xxxx",
"xxxxx我吃茶xxx我叫小明xxxx",
"xxx我叫小明xxxxxxxxxxx",
"xxxxxxxx我吃茶xxxxxx"]
for item in msg:
    res=re.search(r'(.*?)(我叫小明|我吃茶)(.*)',item)
    # res=re.match(r'(.*?)我叫小明(.*?)(.*)',msg2)
    print("匹配结果",res)
    print("res",res.group())
    print("res1",res.group(1))
    print("res2",res.group(2))
    print("res3",res.group(3))
