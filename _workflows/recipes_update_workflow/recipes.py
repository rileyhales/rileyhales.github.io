# install pandoc
# pandoc Jana\'s\ recipes.docx -o recipes.html

import os

options = {}

base_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'recipe')
if not os.path.exists(os.path.join(base_path, 'database')):
    os.mkdir(os.path.join(base_path, 'database'))

with open(os.path.join(os.path.dirname(__file__), 'recipes.html'), 'r') as r:
    html = r.read()
    html = html.split('<h1 id="')
    for recipe in html:
        recipename = recipe.split('"')[0]
        if recipename == '':
            continue
        ingedients, instructions = recipe.split('<h2 id="instructions')
        ingedients = ingedients.replace('<p>', '<li>').replace('</p>', '</li>')
        with open(os.path.join(base_path, 'database', f'{recipename}.html'), 'w') as r:
            r.write(f'<h1 id="{ingedients}<h2 id="instructions{instructions}')
        options[recipename.replace('-', ' ').title()] = recipename

with open(os.path.join(base_path, 'recipes.json'), 'w') as js:
    sorted_string = 'let recipeOptions='
    sorted_dict = {}
    for i in sorted(options.keys()):
        sorted_dict[i] = options[i]
    js.write('let recipeOptions=' + str(sorted_dict))
    print(sorted_dict)
