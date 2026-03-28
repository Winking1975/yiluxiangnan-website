# -*- coding: utf-8 -*-
import os

# 获取所有HTML文件
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for filename in html_files:
    print("正在处理: " + filename)
    
    # 读取文件
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 替换品牌名称
    content = content.replace('南洋通', '一路向南')
    content = content.replace('NanYangTong', '一路向南，阳光灿烂')
    
    # 写回文件
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("已完成: " + filename)

print("所有文件处理完成！")
