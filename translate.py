def getTranslation(langCode)
	if request.method == 'POST':
		gs = goslate.Goslate()
		
		return(gs.translate(word, langCode)