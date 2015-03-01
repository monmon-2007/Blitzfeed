from flask import *
import requests 
import string 

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

def showNews():
    r = requests.get('http://api.feedzilla.com/v1/categories/26/articles.json') 
    
    news = [] 

    for a in r.json()['articles']:
        news.append(a['summary'])        

    return render_template('index.html', news=news)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=80)

