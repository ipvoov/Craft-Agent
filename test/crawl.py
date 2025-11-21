import json

import requests

s = requests.Session()
s.headers = {
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "ect": "4g",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.bing.com/visualsearch?mkt=zh-CN",
    "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
    "sec-ch-ua-arch": "\"arm\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version": "\"142.0.7444.176\"",
    "sec-ch-ua-full-version-list": "\"Chromium\";v=\"142.0.7444.176\", \"Google Chrome\";v=\"142.0.7444.176\", \"Not_A Brand\";v=\"99.0.0.0\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-ch-ua-platform-version": "\"26.1.0\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36"
}

if __name__ == "__main__":
    keyword = "黑客"
    res = s.get("https://www.bing.com/images/vsasync?q="+keyword)

    items = res.json()["results"]
    print(len(items))
    with open("./data/items.json", "w", encoding="utf-8") as f:
        try:
            # 发送GET请求，设置超时时间
            response = requests.get(items[0]["imageUrl"], timeout=8)
            response.raise_for_status()  # 检查请求是否成功
            filepath = ""
            # 写入文件
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"图片已成功保存至: {filepath}")

        except requests.exceptions.RequestException as e:
            print(f"下载失败: {e}")
