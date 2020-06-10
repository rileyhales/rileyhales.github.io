import os

options = []
with open('recipes.html', 'r') as r:
    a = r.read()
    a = a.split('<h1 id="')
    for b in a:
        recipename = b.split('"')[0]
        if recipename == '':
            continue
        with open(os.path.join('database', f'{recipename}.html'), 'w') as c:
            c.write('<h1 id="' + b)
        options.append([recipename, recipename.replace('-', ' ').title()])
with open('../../recipes/recipes.js', 'w') as js:
    js.write('let recipeOptions=' + str(options))
print(options)
