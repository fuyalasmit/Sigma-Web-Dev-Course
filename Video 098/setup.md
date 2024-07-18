## Setup  Tailwind CSS
1: Run the following commands
```
npm install -D tailwindcss
npx tailwindcss init
```
2: Update tailwind.config.js to include
```
content: ["*.html,js"],
```
3: Make src/input.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4: Run <br>
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
put this in .json, as build and do:
```
npm run build
```
5: Link output.css 