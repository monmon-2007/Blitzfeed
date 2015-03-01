from flask import *
import requests 
import string

app = Flask(__name__)

global lang = ""

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        global lang = request.form['lang']
        if lang == 'en':
            link = 'http://api.feedzilla.com/v1/categories/26/articles.json'
		
        elif lang  == 'pl':
            link = 'http://api.feedzilla.com/v1/categories/170/articles.json'
		
        elif lang == 'es':
            link = 'http://api.feedzilla.com/v1/categories/115/articles.json'
			
        elif lang == 'tr':
            link = 'http://api.feedzilla.com/v1/categories/70/articles.json'

        final_list = showNews(link)

        return render_template('index.html', news=final_list)

    else:
        
        final_list = showNews('http://api.feedzilla.com/v1/categories/26/articles.json') 
        return render_template('index.html', news=final_list)


def showNews(link): 
    r = requests.get(link)
    
    raw_list = [] 
    final_list = [] 
    i = 0 
    
    for article in r.json()['articles']:
        raw_list.append(article['summary'].split())
        
    while len(raw_list) > i: 
        for word in raw_list[i]:
            final_list.append(word) 
        
        i+= 1 
    
    return final_list
	
@app.route('/translate', methods=['GET', 'POST'])
def translate():
	word = request.form['untranslated']
	gs = goslate.Goslate()
	
	translated = gs.translate(word, lang)
	
	return render_template("index.html", translated=translated)

      
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=80)

