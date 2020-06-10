# install pandoc
# pandoc recipes.docx -o recipes.html

import os

options = []

base_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'recipes')

with open('recipes.html', 'r') as r:
    a = r.read()
    a = a.split('<h1 id="')
    for b in a:
        recipename = b.split('"')[0]
        if recipename == '':
            continue
        with open(os.path.join(base_path, 'database', f'{recipename}.html'), 'w') as c:
            c.write('<h1 id="' + b)
        options.append([recipename, recipename.replace('-', ' ').title()])
with open(os.path.join(base_path, 'recipes.js'), 'w') as js:
    js.write('let recipeOptions=' + str(options))
print(options)
