from flask import *
import requests 
import string 

app = Flask(__name__)

@app.route('/')
def showNews():
    r = requests.get('http://api.feedzilla.com/v1/categories/26/articles.json') 
    
    raw_list = [] 
    final_list = [] 
    i = 0 

    for article in r.json()['articles']:
        raw_list.append(article['summary'].split())
    
    while len(raw_list) > i: 
        for word in raw_list[i]:
            final_list.append(word)
        
        i+= 1            

    return render_template('index.html', news=final_list)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=80)

