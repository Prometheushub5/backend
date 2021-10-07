import requests
import pandas as pd
url = input("Entre com a URL: ")
csv = input("Local do arquivo CSV com dados: ")
bearer = input("Entre com o token: ")
headers = {
    "accept": "application/json",
    "Authorization": "Bearer "+bearer,
    "Content-Type": "application/json"
    }
df = pd.DataFrame(pd.read_csv(csv, sep = ";", header = 0))
for i in df.index:
    df_limpo=df.loc[i].dropna()
    data = df_limpo.to_json(orient = "index",default_handler = None, force_ascii=True,)
    request = requests.post(url, data=data, headers=headers)
    response=request.json
    print(request.content)