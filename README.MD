1. Install type script by npm : npm -g stypescript
2. Initial typescript in the target folder to generate tsconfig.json : tsc --init
3. Update generated tsconfig.json by modify "outDir" to modify generated JS paht and "rootDir" to modify source ts file path.
4. In the VS code , click Terminal -> Run Build Task.. click typscript and click tsc:watch - tsconfig.json.
5. Type something in the ts file and run command 'node dist/xxx.js' to run the compiled js file.